"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { serifStyle } from "@/lib/motion";

const books = [
  { title: "Curious Visitors", href: "/", src: "/Rectangle 71.png" },
  { title: "A Musical Surprise", href: "/", src: "/Rectangle 72.png" },
  { title: "Delicious Treats", href: "/", src: "/Rectangle 73.png" },
  { title: "Thrill Of Exercise", href: "/", src: "/Rectangle 74.png" },
  { title: "Power Of Thought", href: "/", src: "/Rectangle 75.png" },
  { title: "Dreams Come True", href: "/", src: "/Rectangle 76.png" },
  { title: "Creative Discovery", href: "/", src: "/Rectangle 77.png" },
  { title: "Love & Be Loved", href: "/", src: "/Rectangle 78.png" },
];

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const HappyHoppersBooks = () => {
  return (
    <>
      <motion.div
        className="mx-auto h-px max-w-[1830px] bg-[#9fe7fb]"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <section className="relative overflow-hidden bg-white pb-10 sm:pb-12 lg:pb-12">
        <div
          aria-hidden
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Rectangle 3.png')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1180px] border-t border-[#aeeeff] px-4 pt-8 sm:px-6 lg:px-0">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[22px] font-medium tracking-tight text-[#153f48] sm:text-[28px] lg:text-[34px]">
              Happy Hoppers Books
            </p>
            <h2 className="mt-2 text-[32px] leading-[0.95] sm:text-[46px] lg:text-6xl">
              <span className="lowercase tracking-tight text-[#ff2eb3]" style={serifStyle}>
                the happy hoppers
              </span>{" "}
              <span className="font-semibold lowercase tracking-tight text-[#2a3ccf]" style={serifStyle}>
                adventures series
              </span>
            </h2>
            <motion.p
              className="mt-6 text-[16px] text-[#2e2e2e] sm:mt-8 sm:text-[20px] lg:text-[22px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              click on books
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-4"
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {books.map((book) => (
              <motion.div
                key={book.title}
                variants={cardVariant}
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link href={book.href} className="group mx-auto block w-full max-w-[340px] rounded-[2px] sm:max-w-none">
                  <div className="overflow-hidden border border-[#4f5d61] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
                    <motion.div
                      className="relative aspect-[0.72] w-full overflow-hidden bg-white"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image
                        src={book.src}
                        alt={book.title}
                        fill
                        sizes="(max-width: 640px) min(340px, 92vw), (max-width: 1024px) 44vw, 220px"
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="mt-7 text-center text-[16px] text-[#2e2e2e] sm:text-[20px] lg:text-[22px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            click on books
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default HappyHoppersBooks;
