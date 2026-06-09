import { NextResponse } from "next/server";
import {
  getCartTotals,
  parseCurrency,
  type CheckoutCartItem,
  type ShippingDetails,
} from "@/lib/cart";

export const runtime = "nodejs";

const getPayPalBaseUrl = () =>
  process.env.PAYPAL_ENVIRONMENT === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

const getAccessToken = async () => {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Missing PayPal credentials.");
  }

  const response = await fetch(`${getPayPalBaseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });

  if (!response.ok) {
    throw new Error("Unable to authenticate with PayPal.");
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
};

export async function POST(request: Request) {
  try {
    const { items, shippingDetails } = (await request.json()) as {
      items: CheckoutCartItem[];
      shippingDetails?: ShippingDetails;
    };

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    if (
      !shippingDetails ||
      !shippingDetails.name ||
      !shippingDetails.email ||
      !shippingDetails.phone ||
      !shippingDetails.address ||
      !shippingDetails.country ||
      !shippingDetails.state ||
      !shippingDetails.zipCode
    ) {
      return NextResponse.json(
        { error: "Shipping details are required before checkout." },
        { status: 400 },
      );
    }

    const { subtotal, shipping, discount, total } = getCartTotals(items);
    const accessToken = await getAccessToken();
    const origin = new URL(request.url).origin;

    const response = await fetch(`${getPayPalBaseUrl()}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: total.toFixed(2),
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: subtotal.toFixed(2),
                },
                shipping: {
                  currency_code: "USD",
                  value: shipping.toFixed(2),
                },
                discount: {
                  currency_code: "USD",
                  value: discount.toFixed(2),
                },
              },
            },
            items: items.map((item) => ({
              name: `${item.title} - ${item.format}`.slice(0, 127),
              quantity: String(item.quantity),
              unit_amount: {
                currency_code: "USD",
                value: parseCurrency(item.price).toFixed(2),
              },
            })),
            shipping: {
              name: {
                full_name: shippingDetails.name,
              },
              address: {
                address_line_1: shippingDetails.address,
                admin_area_1: shippingDetails.state,
                postal_code: shippingDetails.zipCode,
                country_code: shippingDetails.country.toUpperCase(),
              },
            },
          },
        ],
        payment_source: {
          paypal: {
            experience_context: {
              user_action: "PAY_NOW",
              shipping_preference: "SET_PROVIDED_ADDRESS",
              return_url: `${origin}/checkout/success`,
              cancel_url: `${origin}/checkout/cancel`,
            },
          },
        },
      }),
    });

    const data = (await response.json()) as {
      links?: Array<{ rel: string; href: string }>;
      message?: string;
    };

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message ?? "Failed to create PayPal order." },
        { status: 500 },
      );
    }

    const approvalUrl =
      data.links?.find((link) => link.rel === "payer-action")?.href ??
      data.links?.find((link) => link.rel === "approve")?.href;

    if (!approvalUrl) {
      return NextResponse.json(
        { error: "PayPal approval link was not returned." },
        { status: 500 },
      );
    }

    return NextResponse.json({ approvalUrl });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected PayPal error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
