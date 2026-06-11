"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { books } from "@/app/books/data";

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const HappyHoppersBooks = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* <div className="mx-auto h-[2px] w-full bg-[#74d1ea]" /> */}
      <section className="relative overflow-hidden bg-white pb-4 pt-[2px]">
        <div
          aria-hidden
          className="absolute inset-0 bg-center bg-no-repeat opacity-[1.57]"
          style={{
            backgroundImage: "url('/Rectangle 3.png')",
            backgroundSize: "auto 93%",
            backgroundPosition: "center top",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 pt-8 sm:px-6 lg:px-0">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-poppins text-[22px] font-normal tracking-[-0.03em] text-[#133848] sm:text-[28px] lg:text-3xl lg:leading-none">
              Happy Hoppers Books
            </p>
            <h2 className="mt-1 font-libra leading-relaxed text-4xl">
              <span className="text-[#ff29b4]">the happy hoppers</span>{" "}
              <span className="text-[#2a35c8]">adventures series</span>
            </h2>
            <motion.p
              className="mt-8 font-poppins text-[16px] text-[#161616] sm:text-[20px] lg:mt-11 lg:text-[19px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              click on books
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 grid max-w-[812px] grid-cols-2 justify-items-center gap-x-10 gap-y-14 sm:max-w-[880px] sm:gap-x-12 lg:mt-9 lg:max-w-[800px] lg:grid-cols-4 lg:gap-x-38 lg:gap-y-14"
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {books.map((book) => (
              <motion.div
                key={book.title}
                variants={cardVariant}
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Link
                  href={`/books/${book.slug}`}
                  className="group mx-auto block w-[166px] rounded-[1px] lg:w-[166px]"
                >
                  <div className="overflow-hidden border border-[#173f4e] bg-white">
                    <motion.div
                      className="relative aspect-[166/239] w-[166px] overflow-hidden bg-white"
                      whileHover={{ scale: 1.025 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <Image
                        src={book.listingImageSrc}
                        alt={book.title}
                        fill
                        sizes="166px"
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="mt-8 pb-3 text-center font-poppins text-[16px] text-[#161616] sm:text-[20px] lg:mt-7 lg:text-[19px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            click on books
          </motion.p>
        </div>
      </section>
    </section>
  );
};

export default HappyHoppersBooks;
