"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { serifStyle } from "@/lib/motion";
import { useCart } from "@/components/CartProvider";

const CheckoutSuccess = ({ orderId }: { orderId: string }) => {
  const { clearCart } = useCart();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Confirming your PayPal payment...");

  useEffect(() => {
    if (!orderId) {
      setStatus("error");
      setMessage("PayPal did not return an order token.");
      return;
    }

    let isMounted = true;

    const captureOrder = async () => {
      const response = await fetch("/api/paypal/capture-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
      });

      const data = (await response.json()) as { error?: string };

      if (!isMounted) {
        return;
      }

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "We could not capture your PayPal payment.");
        return;
      }

      clearCart();
      setStatus("success");
      setMessage("Your PayPal payment was completed successfully.");
    };

    void captureOrder();

    return () => {
      isMounted = false;
    };
  }, [clearCart, orderId]);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-3xl rounded-[30px] border border-[#dff6fb] bg-[#f9feff] px-6 py-12 text-center shadow-[0_20px_50px_rgba(42,60,207,0.08)] sm:px-10">
        <p className="text-[15px] uppercase tracking-[0.2em] text-[#98c73a]">
          PayPal Checkout
        </p>
        <h1
          className="mt-3 text-[34px] leading-[0.95] text-[#2a3ccf] sm:text-[48px]"
          style={serifStyle}
        >
          {status === "success" ? "payment complete" : "one more hop"}
        </h1>
        <p className="mt-5 text-[16px] text-[#2e2e2e] sm:text-[18px]">{message}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={status === "success" ? "/" : "/cart"}
            className="rounded-full bg-[#97D700] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7fb800]"
          >
            {status === "success" ? "Back to Home" : "Return to Cart"}
          </Link>
          <Link
            href="/books"
            className="rounded-full border border-[#153f48] px-6 py-3 text-sm font-semibold text-[#153f48] transition-colors hover:bg-[#153f48] hover:text-white"
          >
            Continue Browsing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
