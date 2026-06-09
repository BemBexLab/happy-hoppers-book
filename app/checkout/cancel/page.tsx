import Link from "next/link";
import { serifStyle } from "@/lib/motion";

const CancelPage = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-3xl rounded-[30px] border border-[#ffd9ef] bg-[#fff7fb] px-6 py-12 text-center shadow-[0_20px_50px_rgba(255,46,179,0.08)] sm:px-10">
        <p className="text-[15px] uppercase tracking-[0.2em] text-[#ff2eb3]">
          PayPal Checkout
        </p>
        <h1
          className="mt-3 text-[34px] leading-[0.95] text-[#2a3ccf] sm:text-[48px]"
          style={serifStyle}
        >
          checkout canceled
        </h1>
        <p className="mt-5 text-[16px] text-[#2e2e2e] sm:text-[18px]">
          Your cart is still here whenever you are ready to continue.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/cart"
            className="rounded-full bg-[#97D700] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7fb800]"
          >
            Back to Cart
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

export default CancelPage;
