"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { getProductSlug, type Book, type BookProduct } from "@/app/books/data";
import { useCart } from "@/components/CartProvider";

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariant = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

type ProductCardProps = {
  heading: string;
  book: Book;
  product: BookProduct;
};

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

const GalleryModal = ({
  label,
  gallery,
  onClose,
}: {
  label: string;
  gallery: string[];
  onClose: () => void;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentImage = gallery[selectedIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b14]/80 p-3 backdrop-blur-[6px] sm:p-5"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-5xl overflow-hidden border border-white/15 bg-[#f7f4ee] shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${label} gallery`}
      >
        <div className="flex items-center justify-between border-b border-[#e5ddcf] bg-white px-4 py-3 sm:px-5">
          <div>
            <p className="font-libra text-2xl text-[#ff2eb3] sm:text-3xl">{label}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[#6b5f4d]">
              {gallery.length} images
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center border border-[#d8cdbd] bg-white text-2xl leading-none text-gray-700 hover:bg-[#f4efe6]"
            aria-label="Close gallery"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-3 p-3 sm:p-5">
          <div className="relative min-h-[56vh] overflow-hidden border border-[#e4dac8] bg-white">
            <Image
              src={currentImage}
              alt={`${label} preview ${selectedIndex + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 90vw"
              className="object-contain p-4 sm:p-6"
              priority
            />

            <button
              type="button"
              onClick={() => setSelectedIndex((current) => (current - 1 + gallery.length) % gallery.length)}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#dfd4c4] bg-white/95 text-xl text-[#3d3327] shadow-sm hover:bg-[#f6f0e6]"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setSelectedIndex((current) => (current + 1) % gallery.length)}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#dfd4c4] bg-white/95 text-xl text-[#3d3327] shadow-sm hover:bg-[#f6f0e6]"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 border border-[#e4dac8] bg-white/95 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#6b5f4d]">
              {String(selectedIndex + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
            {gallery.map((src, index) => {
              const active = index === selectedIndex;

              return (
                <button
                  key={`${label}-${index}`}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`relative aspect-square overflow-hidden border bg-white transition-all duration-150 ${
                    active
                      ? "border-[#97D700] shadow-[0_0_0_2px_rgba(151,215,0,0.18)]"
                      : "border-[#e0d7c9] hover:border-[#b89d77]"
                  }`}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={active}
                >
                  <Image
                    src={src}
                    alt={`${label} thumbnail ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 20vw, 10vw"
                    className="object-contain p-1.5"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ heading, book, product }: ProductCardProps) => {
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();
  const productDisplayLabel = getProductDisplayLabel(product.label);
  const productHref = `/books/${book.slug}/${getProductSlug(product.label)}`;

  const handleAddToCart = () => {
    addItem({
      slug: book.slug,
      title: book.title,
      bookLabel: book.bookLabel,
      format: product.label,
      price: product.price,
      original: product.original,
      quantity: qty,
      src: book.detailImageSrc,
    });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <>
      <motion.div
        className="flex flex-col border border-[#cfd6dc] bg-white"
        variants={cardVariant}
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        <motion.div
          className="group relative aspect-[0.78] w-full overflow-hidden border-b border-[#d6dde2] bg-white"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Link
            href={productHref}
            className="block h-full w-full"
            aria-label={`Open ${book.title} ${product.label}`}
          >
            <Image
              src={product.src}
              alt={product.label}
              fill
              sizes="(max-width: 640px) 90vw, 25vw"
              className="object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#111111]/0 opacity-0 transition-all duration-200 group-hover:bg-[#111111]/18 group-hover:opacity-100 group-focus-visible:bg-[#111111]/18 group-focus-visible:opacity-100">
              <span className="border border-white/80 bg-white px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#1c1c1c] shadow-sm sm:text-sm">
                Quick View
              </span>
            </div>
          </Link>
        </motion.div>

        <div className="flex flex-col items-center gap-2 px-3 py-2 sm:px-3 sm:py-2.5">
          <motion.p
            className="min-h-[52px] text-center text-[17px] leading-[1.2] font-normal text-[#0c3d57] sm:text-[18px]"
            variants={cardItemVariant}
          >
            {heading} -<span className="block">{productDisplayLabel}</span>
          </motion.p>

          <motion.div className="flex items-center gap-3" variants={cardItemVariant}>
            <span className="text-[31px] leading-none font-normal text-[#8ad400]">
              {product.price}
            </span>
          </motion.div>

          <motion.div
            className="flex w-full items-center overflow-hidden border border-[#9fb3c1] bg-white"
            variants={cardItemVariant}
          >
            <button
              onClick={() => setQty((currentQty) => Math.max(1, currentQty - 1))}
              className="flex h-7 w-8 items-center justify-center bg-white text-xl font-normal text-[#5f7481] hover:bg-[#f6f9fb]"
            >
              -
            </button>
            <div className="flex h-7 flex-1 items-center justify-center border-x border-[#9fb3c1] text-[14px] text-[#213743]">
              {qty}
            </div>
            <button
              onClick={() => setQty((currentQty) => currentQty + 1)}
              className="flex h-7 w-8 items-center justify-center bg-white text-xl font-normal text-[#5f7481] hover:bg-[#f6f9fb]"
            >
              +
            </button>
          </motion.div>

          <motion.button
            onClick={handleAddToCart}
            className="w-full bg-[#8ad400] py-2 text-[15px] font-semibold text-white"
            variants={cardItemVariant}
            whileHover={{ backgroundColor: "#78bf00", scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
          >
            {justAdded ? "Added to Cart" : "Add to Cart"}
          </motion.button>
        </div>
      </motion.div>

    </>
  );
};

type BookDetailViewProps = {
  book: Book;
};

const BookDetailView = ({ book }: BookDetailViewProps) => {
  const [heroGalleryOpen, setHeroGalleryOpen] = useState(false);
  const heroGallery = book.products[0]?.gallery?.length
    ? book.products[0].gallery
    : [book.detailImageSrc];

  return (
    <section className="bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-16 lg:py-10">
      <div className="mx-auto max-w-6xl">
        {/* <motion.div
          className="grid items-center gap-8 pb-10 lg:grid-cols-[minmax(280px,360px)_1fr]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <button
            type="button"
            onClick={() => setHeroGalleryOpen(true)}
            className="group mx-auto block w-full max-w-[360px]"
            aria-label={`Open ${book.title} gallery`}
          >
            <div className="relative overflow-hidden rounded-[6px] shadow-[0_12px_34px_rgba(0,0,0,0.12)]">
              <Image
                src={book.detailImageSrc}
                alt={book.title}
                width={360}
                height={480}
                sizes="(max-width: 1024px) 70vw, 360px"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#111111]/0 opacity-0 transition-all duration-200 group-hover:bg-[#111111]/18 group-hover:opacity-100 group-focus-visible:bg-[#111111]/18 group-focus-visible:opacity-100">
                <span className="border border-white/80 bg-white px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#1c1c1c] shadow-sm sm:text-sm">
                  Quick View
                </span>
              </div>
            </div>
          </button>

          <div className="text-center lg:text-left">
            <p className="text-base font-semibold uppercase tracking-[0.18em] text-[#98c73a]">
              {book.bookLabel}
            </p>
            <h1
              className="mt-3 text-[#2a3ccf] font-libra text-4xl leading-[0.95] text-[#2832bb] sm:text-5xl lg:text-6xl"
            >
              {book.title}
            </h1>
            <p className="mt-5 text-lg leading-7 text-[#1e1e1e]">
              {book.description}
            </p>
          </div>
        </motion.div> */}
      </div>

      {/* <motion.div
        className="mb-4 text-center sm:mb-6 lg:mb-8"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.p
          className="text-4xl font-libra text-[#2a3ccf]"
          // style={serifStyle}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          Buy {book.title} in your favorite format
        </motion.p>
        <motion.p
          className="mt-2 font-libra text-4xl text-[#ff2eb3]"
          // style={serifStyle}
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
        >
          Choose your edition below
        </motion.p>
      </motion.div> */}

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {book.products.map((product) => (
          <ProductCard
            key={product.label}
            heading={book.title}
            book={book}
            product={product}
          />
        ))}
      </motion.div>

      {heroGalleryOpen ? (
        <GalleryModal
          key={`${book.slug}-hero`}
          label={book.title}
          gallery={heroGallery}
          onClose={() => setHeroGalleryOpen(false)}
        />
      ) : null}
    </section>
  );
};

export default BookDetailView;
