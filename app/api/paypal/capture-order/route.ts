import { NextResponse } from "next/server";

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
    const { orderId } = (await request.json()) as { orderId?: string };

    if (!orderId) {
      return NextResponse.json({ error: "Missing order id." }, { status: 400 });
    }

    const accessToken = await getAccessToken();
    const response = await fetch(
      `${getPayPalBaseUrl()}/v2/checkout/orders/${orderId}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to capture PayPal order.", details: data },
        { status: 500 },
      );
    }

    return NextResponse.json({ status: "COMPLETED", details: data });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected PayPal error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
