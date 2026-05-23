"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { serifStyle } from "@/lib/motion";

const books = [
  {
    title: "Curious Visitors",
    bookLabel: "Book 1",
    imageSrc: "/Rectangle 89.png",
    description:
      "Looking for a new adventure? Introducing a series that entertains and effortlessly influences children while providing valuable life lessons. In Book 1, the happy hoppers encounter the arrival of 2 friendly creatures. Aren't you curious? Each story flows into the next revealing layers of impactful, teachable moments. (Printed, E-book & Video-book)",
  },
  {
    title: "Power of Thought",
    bookLabel: "Book 5",
    imageSrc: "/Rectangle 89 (1).png",
    description:
      "Continues with the 8 happy hoppers missing the 2 friendly creatures. This book teaches the importance of beliefs and confidence, to learn how to trust one's inner strength and to overcome self-doubt. The hoppers ultimately reach their goals, trust the safety of their bubbles, and enjoy the miracle of flight. (Printed, E-book & Video-book)",
  },
  {
    title: "A Musical Surprise",
    bookLabel: "Book 2",
    imageSrc: "/Rectangle 89 (2).png",
    description:
      "The 2 creatures share a clue, intriguing way to introduce the 8 hoppers to the sounds of music. They prompt them, their goal is to inspire and motivate them into wanting to learn to play an instrument. This book may awaken your child's mind and desire to play a musical instrument. Wouldn't that be incredibly motivating? (Printed, E-book & Video-book)",
  },
  {
    title: "Dreams Come True",
    bookLabel: "Book 6",
    imageSrc: "/Rectangle 89 (3).png",
    description:
      "Reveals how the 2 creatures discovered the 8 happy hoppers, and the three eventually 8 lovable creatures whose colorful and creative rainbow. Throughout this adventure series, the creatures, hoppers, parents, enjoy exercising and teaching life lessons to build faith and self-worth, rooted in determination. (Printed, E-book & Video-book)",
  },
  {
    title: "Delicious Treats",
    bookLabel: "Book 3",
    imageSrc: "/Rectangle 89 (4).png",
    description:
      "The 2 friendly creatures surprise the 8 happy hoppers by sharing beautiful displays of delicious treats. This story will help your child realize the benefits of self-control, and understand the importance of 'having enough.' The creatures, hoppers, want children to be less indulgent, and to exercise the power to resist temptation. (Printed, E-book & Video-book)",
  },
  {
    title: "Creative Discovery",
    bookLabel: "Book 7",
    imageSrc: "/Rectangle 89 (5).png",
    description:
      "The 8 lovable creatures give the 8 happy hoppers the opportunity to experience the joys of becoming an artist. This is a powerful introduction into the world of doing creative, it will help your child attain levels of confidence while experiencing the endless fun and blessings of becoming an original thinker. (Printed, E-book & Video-book)",
  },
  {
    title: "Thrill of Exercise",
    bookLabel: "Book 4",
    imageSrc: "/Rectangle 89 (6).png",
    description:
      "The 2 friendly creatures encourage the 8 happy hoppers to discover the joy and thrill of exercise. They teach them to achieve a healthy body and mind by engaging not only physical self-discipline. This story will help your child realize the importance of exerting energy and stay healthy, to strengthen them as they grow and develop. (Printed, E-book & Video-book)",
  },
  {
    title: "Love & Be Loved",
    bookLabel: "Book 8",
    imageSrc: "/Rectangle 89 (7).png",
    description:
      "The adventure series continues with the 8 happy hoppers missing the 8 friendly creatures. Upon the arrival, they teach them the meaning of life on earth. Love & Be Loved! The hoppers learn that they will never be alone, and they will always continue to be where there is parent time! (Printed, E-book & Video-book)",
  },
] as const;

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
          className="mb-6 text-center text-[28px] leading-[0.95] tracking-[-0.02em] sm:mb-8 sm:text-4xl lg:text-6xl"
          style={serifStyle}
          initial={{ opacity: 0, y: -28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="lowercase text-[#ff1fa8]">the happy hoppers </span>
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
                <BookImageSlot src={book.imageSrc} title={book.title} />
              </motion.div>

              <motion.div
                className="pt-1 text-center sm:text-left"
                variants={copyVariants}
              >
                <h3
                  className="text-[22px] leading-[0.92] tracking-[-0.02em] sm:text-[28px] lg:text-[34px]"
                  style={serifStyle}
                >
                  <span className="uppercase text-[#98c73a]">{book.title}</span><br />
                  <span className="text-[#ff1fa8]"> ~ {book.bookLabel}</span>
                </h3>

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
