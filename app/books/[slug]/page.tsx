import { notFound } from "next/navigation";
import BookDetailView from "@/components/BookDetailView";
import { books, getBookBySlug } from "@/app/books/data";
import HomeHero from "@/components/HomeHero";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
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
