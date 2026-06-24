"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { getProductSlug } from "@/app/books/data";
import { useCart } from "@/components/CartProvider";
import { getProductGallery } from "@/lib/product-galleries";

type Product = {
  label: string;
  price: string;
  original: string;
  src: string;
  gallery: string[];
};

const products: Product[] = [
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

const ProductCard = ({
  label,
  price,
  original,
  src,
}: {
  label: string;
  price: string;
  original: string;
  src: string;
}) => {
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();
  const pathname = usePathname() || "/volume-discounts";
  const productHref = `/volume-discounts/${getProductSlug(label)}`;

  const handleAddToCart = () => {
    addItem({
      slug: "complete-series",
      href: pathname,
      title: "Happy Hoppers Complete Series",
      bookLabel: "Series of 8",
      format: label,
      price,
      original,
      quantity: qty,
      src,
    });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <motion.div
      className="flex flex-col border border-[#d7dfe5] bg-white"
      variants={cardVariant}
      whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <motion.div
        className="group relative block aspect-[0.76] w-full overflow-hidden border-b border-[#d7dfe5] bg-white"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Link
          href={productHref}
          className="block h-full w-full"
          aria-label={`Open ${label} quick view`}
        >
          <Image
            src={src}
            alt={label}
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

      <div className="flex flex-col items-center gap-2 px-3 py-3">
        <motion.p
          className="min-h-[70px] text-center text-[19px] leading-[1.15] font-normal text-[#0b3550]"
          variants={cardItemVariant}
        >
          Buy Series of 8 -<span className="block">{label}</span>
        </motion.p>

        <motion.div className="flex items-center gap-2" variants={cardItemVariant}>
          <span className="text-[19px] text-[#8ad400] line-through">
            {original}
          </span>
          <span className="text-[19px] text-[#8ad400]">{price}</span>
        </motion.div>

        <motion.div
          className="flex w-full items-center overflow-hidden border border-[#9fb3c1] bg-white"
          variants={cardItemVariant}
        >
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-9 w-11 items-center justify-center bg-white text-xl font-normal text-[#6e8796] hover:bg-[#f5f8fa]"
          >
            -
          </button>
          <div className="flex h-9 flex-1 items-center justify-center border-x border-[#9fb3c1] text-[18px] font-normal text-[#10384c]">
            {qty}
          </div>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="flex h-9 w-11 items-center justify-center bg-white text-[30px] font-normal leading-none text-[#6e8796] hover:bg-[#f5f8fa]"
          >
            +
          </button>
        </motion.div>

        <motion.button
          onClick={handleAddToCart}
          className="w-full bg-[#8ad400] py-2.5 text-[15px] font-semibold text-white"
          variants={cardItemVariant}
          whileHover={{ backgroundColor: "#78bf00", scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
        >
          {justAdded ? "Added to Cart" : "Add to Cart"}
        </motion.button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section className="bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-16 lg:py-10">
      <motion.div
        className="mb-4 text-center sm:mb-6 lg:mb-8"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.p
          className="text-4xl font-libra text-[#10069F]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          Buy the complete series of 8 Books to
        </motion.p>
        <motion.p
          className="mt-2 text-4xl font-libra text-[#ff2eb3]"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
        >
          RECEIVE A 10% DISCOUNT!
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {products.map((product) => (
          <ProductCard key={product.label} {...product} />
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
