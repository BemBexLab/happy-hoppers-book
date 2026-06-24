import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeHero from "@/components/HomeHero";
import VolumeDiscountDetailView from "@/components/VolumeDiscountDetailView";
import {
  getVolumeDiscountProductBySlug,
  getVolumeDiscountQuickViewData,
  volumeDiscountProducts,
} from "./data";
import { getProductSlug } from "@/app/books/data";
import { buildMetadata } from "@/lib/seo";

const getProductDisplayLabel = (label: string) => {
  switch (label) {
    case "Hardcover Books":
      return "Hardcover";
    case "Video Books":
      return "Video Book";
    case "Ebooks":
      return "Ebook";
    case "Audio Books":
      return "Audio Book";
    default:
      return label;
  }
};

export function generateStaticParams() {
  return volumeDiscountProducts.map((product) => ({
    sub: getProductSlug(product.label),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sub: string }>;
}): Promise<Metadata> {
  const { sub } = await params;
  const product = getVolumeDiscountProductBySlug(sub);

  if (!product) {
    return {};
  }

  const quickViewData = getVolumeDiscountQuickViewData(product);
  const productLabel = getProductDisplayLabel(product.label);

  return buildMetadata({
    title: `${productLabel} Volume Discount`,
    description: quickViewData.description,
    path: `/volume-discounts/${getProductSlug(product.label)}`,
    image: quickViewData.gallery[0] ?? product.gallery[0] ?? product.src,
  });
}

const Page = async ({
  params,
}: {
  params: Promise<{ sub: string }>;
}) => {
  const { sub } = await params;
  const product = getVolumeDiscountProductBySlug(sub);

  if (!product) {
    notFound();
  }

  const quickViewData = getVolumeDiscountQuickViewData(product);
  const currentIndex = volumeDiscountProducts.findIndex(
    (item) => getProductSlug(item.label) === sub,
  );
  const prevProduct =
    currentIndex > 0 ? volumeDiscountProducts[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < volumeDiscountProducts.length - 1
      ? volumeDiscountProducts[currentIndex + 1]
      : null;

  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <VolumeDiscountDetailView
        product={product}
        quickViewData={quickViewData}
        prevHref={
          prevProduct
            ? `/volume-discounts/${getProductSlug(prevProduct.label)}`
            : null
        }
        nextHref={
          nextProduct
            ? `/volume-discounts/${getProductSlug(nextProduct.label)}`
            : null
        }
      />
    </section>
  );
};

export default Page;
