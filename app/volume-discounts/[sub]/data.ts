import { getProductSlug } from "@/app/books/data";
import { getProductGallery } from "@/lib/product-galleries";

export type VolumeDiscountProduct = {
  label: string;
  price: string;
  original: string;
  src: string;
  gallery: string[];
};

export type VolumeDiscountQuickViewData = {
  description: string;
  details?: string[];
  gallery: string[];
};

export const volumeDiscountProducts: VolumeDiscountProduct[] = [
  {
    label: "Hardcover Books",
    price: "$180.00",
    original: "$200.00",
    gallery: getProductGallery("Hardcover Books"),
    src: "/Rectangle 71.png",
  },
  {
    label: "Video Books",
    price: "$144.00",
    original: "$160.00",
    gallery: getProductGallery("Video Books"),
    src: "/Rectangle 71.png",
  },
  {
    label: "Ebooks",
    price: "$108.00",
    original: "$120.00",
    gallery: getProductGallery("Ebooks"),
    src: "/Rectangle 71.png",
  },
  {
    label: "Audio Books",
    price: "$72.00",
    original: "$80.00",
    gallery: getProductGallery("Audio Books"),
    src: "/Rectangle 71.png",
  },
];

const defaultDetails = [
  "Product: Complete series of 8",
  "Publisher: Happy Hoppers Books",
  "Publication year: 2025",
  "Language: English",
  "Discount: 10% off full set pricing",
];

const quickViewDataByProduct: Record<string, VolumeDiscountQuickViewData> = {
  "hardcover-books": {
    description:
      "Customers will receive the 8 printed, hardcover books via USPS or UPS ground service after the products are purchased.",
    details: [],
    gallery: getProductGallery("Hardcover Books"),
  },
  "video-books": {
    description:
      "Customers receive an email to download the 8 MP4 video books after the products are purchased. ",
    details: [],
    gallery: getProductGallery("Video Books"),
  },
  ebooks: {
    description:
      "Customers receive an email to download the 8 digital flipbooks after the products are purchased.",
    details: [],
    gallery: getProductGallery("Ebooks"),
  },
  "audio-books": {
    description:
      "Customers receive an email to download the 8 MP3 audio books after the products are purchased.",
    details: [],
    gallery: getProductGallery("Audio Books"),
  },
};

export const getVolumeDiscountProductBySlug = (sub: string) =>
  volumeDiscountProducts.find(
    (product) => getProductSlug(product.label) === sub,
  );

export const getVolumeDiscountQuickViewData = (
  product: VolumeDiscountProduct,
): VolumeDiscountQuickViewData => {
  const productSlug = getProductSlug(product.label);
  return (
    quickViewDataByProduct[productSlug] ?? {
      description:
        "This complete series package lets you enjoy all 8 Happy Hoppers stories in your preferred format.",
      details: defaultDetails,
      gallery: product.gallery,
    }
  );
};
