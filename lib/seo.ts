import type { Metadata } from "next";

export const SITE_NAME = "Happy Hoppers Books";
export const SITE_URL = "https://www.happyhoppersbooks.com";
export const DEFAULT_OG_IMAGE = "/logo for header.avif";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  robots?: Metadata["robots"];
};

export const buildMetadata = ({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  robots,
}: BuildMetadataInput): Metadata => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: SITE_NAME,
    type: "website",
    images: image
      ? [
          {
            url: image,
            alt: title,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: image ? [image] : undefined,
  },
  robots,
});
