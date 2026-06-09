import CheckoutSuccess from "@/components/CheckoutSuccess";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) => {
  const { token } = await searchParams;

  return <CheckoutSuccess orderId={token ?? ""} />;
};

export default Page;
