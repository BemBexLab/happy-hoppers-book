"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Book, BookProduct } from "@/app/books/data";
import type { QuickViewData } from "@/app/books/[slug]/[sub]/data";
import { useCart } from "@/components/CartProvider";

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

type BookProductDetailViewProps = {
  book: Book;
  product: BookProduct;
  quickViewData: QuickViewData;
  prevHref: string | null;
  nextHref: string | null;
};

const BookProductDetailView = ({
  book,
  product,
  quickViewData,
  prevHref,
  nextHref,
}: BookProductDetailViewProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();

  const gallery = quickViewData.gallery.length
    ? quickViewData.gallery
    : product.gallery.length
      ? product.gallery
      : [product.src];
  const currentImage = gallery[selectedIndex] ?? gallery[0] ?? product.src;
  const productName = `${book.title} - ${getProductDisplayLabel(product.label)}`;
  const showQuantity = product.label === "Hardcover Books";

  const handleAddToCart = () => {
    addItem({
      slug: book.slug,
      title: book.title,
      bookLabel: book.bookLabel,
      format: product.label,
      price: product.price,
      original: product.original,
      quantity: qty,
      src: currentImage,
    });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <section className="bg-white px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-4 pb-4 text-[14px] text-[#173b4d] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-[#10069F]">
              Home
            </Link>
            <span className="text-[#8aa0ad]">›</span>
            <Link href={`/books/${book.slug}`} className="hover:text-[#10069F]">
              All Products
            </Link>
            <span className="text-[#8aa0ad]">›</span>
            <span>{productName}</span>
          </div>

          <div className="flex items-center gap-3 text-[15px]">
            {prevHref ? (
              <Link href={prevHref} className="text-[#7d909a] hover:text-[#10069F]">
                ‹ Prev
              </Link>
            ) : (
              <span className="text-[#b8c3ca]">‹ Prev</span>
            )}
            <span className="text-[#b8c3ca]">|</span>
            {nextHref ? (
              <Link href={nextHref} className="text-[#173b4d] hover:text-[#10069F]">
                Next ›
              </Link>
            ) : (
              <span className="text-[#b8c3ca]">Next ›</span>
            )}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,500px)_360px] lg:items-start lg:justify-center">
          <div>
            <div className="relative aspect-[0.72] max-w-[500px] overflow-hidden border border-[#d6dde2] bg-white">
              <Image
                src={currentImage}
                alt={productName}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {gallery.map((src, index) => {
                const active = index === selectedIndex;

                return (
                  <button
                    key={`${product.label}-${index}`}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`relative h-10 w-10 overflow-hidden border bg-white ${
                      active ? "border-[#10069F]" : "border-[#cdd7de]"
                    }`}
                    aria-label={`Show ${productName} image ${index + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`${productName} thumbnail ${index + 1}`}
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-6 max-w-[690px] text-[15px] leading-5 text-[#0f2432]">
              <p>{quickViewData.description}</p>

              <div className="mt-5 space-y-1 leading-5">
                {quickViewData.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center lg:pt-1">
            <h1 className="text-[18px] font-normal text-[#10384c] sm:text-[22px]">
              {productName}
            </h1>

            <p className="my-6 text-[28px] leading-none font-normal text-[#8ad400]">
              {product.price}
            </p>

            {showQuantity ? (
              <div className="mb-6">
                <label className="text-[18px] text-[#10384c]">
                  Quantity <span className="text-[#10069F]">*</span>
                </label>

                <div className="mx-auto mt-2 flex w-[104px] items-center overflow-hidden border border-[#88a0ae] bg-white">
                  <button
                    type="button"
                    onClick={() => setQty((currentQty) => Math.max(1, currentQty - 1))}
                    className="flex h-7 w-8 items-center justify-center text-xl text-[#546a77] hover:bg-[#f4f8fa]"
                  >
                    -
                  </button>
                  <div className="flex h-7 flex-1 items-center justify-center border-x border-[#88a0ae] text-[14px] text-[#1a3342]">
                    {qty}
                  </div>
                  <button
                    type="button"
                    onClick={() => setQty((currentQty) => currentQty + 1)}
                    className="flex h-7 w-8 items-center justify-center text-xl text-[#546a77] hover:bg-[#f4f8fa]"
                  >
                    +
                  </button>
                </div>
              </div>
            ) : null}

            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full bg-[#8ad400] py-2 text-xl font-medium text-white transition-colors hover:bg-[#78bf00]"
            >
              {justAdded ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookProductDetailView;
