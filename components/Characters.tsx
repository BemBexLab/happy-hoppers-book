"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { serifStyle } from "@/lib/motion";

const Characters = () => {
  return (
    <section className="bg-white px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8 lg:pt-22">
      <div className="mx-auto max-w-8xl">
        <motion.h2
          className="text-center text-[28px] lowercase tracking-tight text-[#ff1fa8] sm:text-4xl lg:text-6xl"
          style={serifStyle}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          characters
        </motion.h2>

        <motion.div
          className="relative mx-auto mt-4 w-full max-w-[1600px] sm:mt-6 lg:mt-8"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <Image
            src="/image 45.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", display: "block" }}
            alt="Happy Hoppers characters"
          />
        </motion.div>

        {/* <motion.div
          className="mx-auto mt-6 max-w-7xl text-center sm:mt-8 lg:mt-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <p className="mx-auto max-w-[22rem] text-[16px] leading-[1.4] text-[#123b47] sm:max-w-4xl sm:text-[20px] sm:leading-[1.32] lg:max-w-7xl lg:text-[18px] lg:leading-[1.24]">
            At 29, Gina Ballotta was inspired to invent a different kind of
            children&apos;s book... something never done before! She began by
            creating 16 unique characters, each with special traits and
            personalities. Gina refined her illustrations, poetic writings and
            sculptures, ultimately perfecting the characters and their stories.
            Then, miraculously, they took on a life of their own and became...
          </p>

          <p className="mt-4 text-[26px] leading-[0.98] sm:mt-3 sm:text-[38px] lg:mt-2 lg:text-[22px] lg:leading-none">
            <motion.span
              className="lowercase tracking-tight text-[#ff2eb3]"
              style={serifStyle}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              the happy hoppers
            </motion.span>{" "}
            <motion.span
              className="lowercase tracking-tight text-[#2a3ccf]"
              style={serifStyle}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            >
              adventures series!
            </motion.span>
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Characters;
