import { notFound } from "next/navigation";
import BookDetailView from "@/components/BookDetailView";
import { books, getBookBySlug } from "@/app/books/data";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

const Page = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return <BookDetailView book={book} />;
};

export default Page;
