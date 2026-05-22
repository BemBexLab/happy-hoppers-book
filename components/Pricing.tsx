"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { serifStyle } from "@/lib/motion";

const products = [
  { label: "Hardcover Books", price: "$180.00", original: "$200.00", src: "/Rectangle 82.png" },
  { label: "Video Books",     price: "$144.00", original: "$160.00", src: "/Rectangle 82.png" },
  { label: "Ebooks",          price: "$108.00", original: "$120.00", src: "/Rectangle 82.png" },
  { label: "Audio Books",     price: "$72.00",  original: "$80.00",  src: "/Rectangle 82.png" },
];

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1, y: 0, scale: 1,
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
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const ProductCard = ({
  label, price, original, src,
}: {
  label: string; price: string; original: string; src: string;
}) => {
  const [qty, setQty] = useState(1);

  return (
    <motion.div
      className="flex flex-col border border-gray-200 bg-white shadow-sm"
      variants={cardVariant}
      whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <motion.div
        className="relative aspect-[0.75] w-full overflow-hidden bg-white"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 640px) 90vw, 25vw"
          className="object-contain"
        />
      </motion.div>

      <div className="flex flex-col items-center gap-2 px-3 py-3 sm:gap-3 sm:px-4 sm:py-4">
        <motion.p
          className="text-center text-lg font-medium text-[#1a1a1a] sm:text-xl md:text-2xl lg:text-3xl"
          variants={cardItemVariant}
        >
          Buy Series of 8{" "}
          <span className="block">{label}</span>
        </motion.p>

        <motion.div className="flex items-center gap-3" variants={cardItemVariant}>
          <span className="text-lg font-bold text-[#2a9d2a] sm:text-xl md:text-2xl lg:text-3xl">{price}</span>
          <span className="text-sm text-gray-400 line-through sm:text-base md:text-lg lg:text-xl">{original}</span>
        </motion.div>

        <motion.div
          className="flex items-center overflow-hidden border border-gray-300"
          variants={cardItemVariant}
        >
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-10 w-10 items-center justify-center bg-white text-xl font-semibold text-[#1a1a1a] hover:bg-gray-100"
          >
            −
          </button>
          <div className="flex h-10 w-14 items-center justify-center border-x border-gray-300 text-lg font-medium text-[#1a1a1a]">
            {String(qty).padStart(2, "0")}
          </div>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="flex h-10 w-10 items-center justify-center bg-white text-xl font-semibold text-[#1a1a1a] hover:bg-gray-100"
          >
            +
          </button>
        </motion.div>

        <motion.button
          className="w-full bg-[#97D700] py-2 text-base font-semibold text-white sm:py-3 sm:text-lg"
          variants={cardItemVariant}
          whileHover={{ backgroundColor: "#4cae4c", scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Add to Cart
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
          className="text-base font-bold text-[#2a3ccf] sm:text-xl md:text-2xl lg:text-3xl"
          style={serifStyle}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          Buy the complete series of 8 Books to
        </motion.p>
        <motion.p
          className="mt-2 text-xl font-bold text-[#ff2eb3] sm:text-2xl md:text-3xl lg:text-4xl"
          style={serifStyle}
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
