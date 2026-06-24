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

export function generateStaticParams() {
  return books.flatMap((book) =>
    book.products.map((product) => ({
      slug: book.slug,
      sub: getProductSlug(product.label),
    })),
  );
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
