"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { serifStyle } from "@/lib/motion";
import { books } from "@/app/books/data";

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -24, rotate: -2 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut" as const,
    },
  },
};

const copyVariants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
      delay: 0.08,
    },
  },
};

function BookImageSlot({ src, title }: { src: string; title: string }) {
  if (!src) {
    return (
      <div className="flex h-[220px] w-[168px] items-center justify-center rounded-[6px] bg-[#f6f6f6] text-center text-[13px] leading-none text-[#b8b8b8] shadow-[0_10px_28px_rgba(0,0,0,0.08)] sm:h-[300px] sm:w-[228px] lg:h-[360px] lg:w-[270px]">
        image
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${title} cover`}
      width={270}
      height={360}
      loading="lazy"
      sizes="(max-width: 639px) 168px, (max-width: 1023px) 228px, 270px"
      className="h-auto w-[168px] rounded-[6px] object-cover shadow-[0_12px_34px_rgba(0,0,0,0.12)] sm:w-[228px] lg:w-[270px]"
    />
  );
}

const TheHappyHoppersAdventures = () => {
  return (
    <section className="bg-white px-4 pb-8 pt-4 sm:px-[24px] sm:pb-10 lg:px-[28px] lg:pb-12">
      <div className="mx-auto max-w-[1508px]">
        <motion.h2
          className="mb-6 text-center font-libra text-[38px] leading-[0.95] tracking-[-0.02em] sm:mb-8"
          initial={{ opacity: 0, y: -28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="text-[#ff1fa8]">The happy hoppers </span>
          <span className="lowercase text-[#2832bb]">adventures series!</span>
        </motion.h2>

        <motion.div
          className="grid gap-y-10 xl:grid-cols-2 xl:gap-x-10 lg:gap-y-12 2xl:gap-x-18"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
        >
          {books.map((book) => (
            <motion.article
              key={book.bookLabel}
              className="mx-auto grid max-w-[620px] grid-cols-1 justify-items-center gap-y-4 sm:max-w-none sm:grid-cols-[228px_1fr] sm:justify-items-start sm:gap-x-6 sm:gap-y-0 lg:grid-cols-[270px_1fr] lg:gap-x-7"
              variants={itemVariants}
            >
              <motion.div
                variants={imageVariants}
                whileHover={{
                  y: -12,
                  rotate: -1.5,
                  scale: 1.02,
                  transition: { duration: 0.28, ease: "easeOut" },
                }}
              >
                <Link href={`/books/${book.slug}`} className="block">
                  <BookImageSlot src={book.detailImageSrc} title={book.title} />
                </Link>
              </motion.div>

              <motion.div
                className="pt-1 text-center sm:text-left"
                variants={copyVariants}
              >
                <Link href={`/books/${book.slug}`} className="block">
                  <h3
                    className="text-[22px] leading-[0.92] tracking-[-0.02em]"
                    // style={serifStyle}
                  >
                    <span className="uppercase text-[#98c73a]">{book.title}</span><br />
                    <span className="text-[#ff1fa8]"> ~ {book.bookLabel}</span>
                  </h3>
                </Link>

                <motion.p
                  className="mt-3 max-w-[34rem] text-[13px] leading-[1.35] text-[#1e1e1e] sm:max-w-[560px] sm:text-[14px] lg:text-[16px] lg:leading-[1.26]"
                  initial={{ opacity: 0.75 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                >
                  {book.description}
                </motion.p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TheHappyHoppersAdventures;
