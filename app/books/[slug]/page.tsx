import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookDetailView from "@/components/BookDetailView";
import { books, getBookBySlug } from "@/app/books/data";
import HomeHero from "@/components/HomeHero";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return {};
  }

  return buildMetadata({
    title: `${book.title} Books`,
    description: book.description,
    path: `/books/${book.slug}`,
    image: book.detailImageSrc,
  });
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <BookDetailView book={book} />
    </section>
  );
};

export default Page;
