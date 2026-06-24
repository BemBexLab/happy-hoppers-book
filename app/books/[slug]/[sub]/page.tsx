import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookProductDetailView from "@/components/BookProductDetailView";
import {
  books,
  getBookBySlug,
  getProductBySlug,
  getProductSlug,
} from "@/app/books/data";
import { getQuickViewData } from "./data";
import HomeHero from "@/components/HomeHero";

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
  return books.flatMap((book) =>
    book.products.map((product) => ({
      slug: book.slug,
      sub: getProductSlug(product.label),
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>;
}): Promise<Metadata> {
  const { slug, sub } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return {};
  }

  const product = getProductBySlug(book, sub);

  if (!product) {
    return {};
  }

  const quickViewData = getQuickViewData(book, product);
  const productLabel = getProductDisplayLabel(product.label);
  const title = `${book.title} ${productLabel} | Happy Hoppers Books`;
  const description =
    quickViewData.description ||
    `Shop ${book.title} in ${productLabel} format from Happy Hoppers Books.`;
  const canonicalPath = `/books/${book.slug}/${getProductSlug(product.label)}`;
  const image = quickViewData.gallery[0] ?? product.gallery[0] ?? product.src;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: "Happy Hoppers Books",
      type: "website",
      images: image
        ? [
            {
              url: image,
              alt: `${book.title} ${productLabel}`,
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
    robots: {
      index: true,
      follow: true,
    },
  };
}

const Page = async ({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>;
}) => {
  const { slug, sub } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const product = getProductBySlug(book, sub);

  if (!product) {
    notFound();
  }

  const quickViewData = getQuickViewData(book, product);

  const currentIndex = book.products.findIndex(
    (item) => getProductSlug(item.label) === sub,
  );

  const prevProduct = currentIndex > 0 ? book.products[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < book.products.length - 1
      ? book.products[currentIndex + 1]
      : null;

  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <BookProductDetailView
        book={book}
        product={product}
        quickViewData={quickViewData}
        prevHref={
          prevProduct
            ? `/books/${book.slug}/${getProductSlug(prevProduct.label)}`
            : null
        }
        nextHref={
          nextProduct
            ? `/books/${book.slug}/${getProductSlug(nextProduct.label)}`
            : null
        }
      />
    </section>
  );
};

export default Page;
