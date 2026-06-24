import type { Metadata } from "next";
import CheckoutSuccess from "@/components/CheckoutSuccess";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Checkout Success",
  description: "Your Happy Hoppers order was completed successfully.",
  path: "/checkout/success",
  robots: {
    index: false,
    follow: false,
  },
});

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) => {
  const { token } = await searchParams;

  return <CheckoutSuccess orderId={token ?? ""} />;
};

export default Page;
