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
  details: string[];
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
      "This complete hardcover set includes all 8 Happy Hoppers books in printed format. Customers will receive the series via USPS or UPS ground service after the product is purchased.",
    details: [
      ...defaultDetails,
      "Format: Hardcover Books",
      "Set contents: 8 printed books",
    ],
    gallery: getProductGallery("Hardcover Books"),
  },
  "video-books": {
    description:
      "This complete video book set includes all 8 Happy Hoppers stories in MP4 format. Customers receive access details after the product is purchased.",
    details: [
      ...defaultDetails,
      "Format: Video Books",
      "Set contents: 8 video books",
    ],
    gallery: getProductGallery("Video Books"),
  },
  ebooks: {
    description:
      "This complete ebook set includes all 8 Happy Hoppers stories in digital format. Customers receive access details after the product is purchased.",
    details: [
      ...defaultDetails,
      "Format: Ebooks",
      "Set contents: 8 ebooks",
    ],
    gallery: getProductGallery("Ebooks"),
  },
  "audio-books": {
    description:
      "This complete audio book set includes all 8 Happy Hoppers stories in audio format. Customers receive access details after the product is purchased.",
    details: [
      ...defaultDetails,
      "Format: Audio Books",
      "Set contents: 8 audio books",
    ],
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
