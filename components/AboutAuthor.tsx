"use client";

import { motion } from "motion/react";

const AboutAuthor = () => {
  return (
    <section className="relative overflow-hidden bg-red-500">
      <div
        aria-hidden
        className="absolute inset-0 bg-contain bg-top bg-no-repeat opacity-[0.94]"
        style={{ backgroundImage: "url('/GINA%20BALLOTTA%20-%201200%20DPI%20-%20V5%20-%2040%25_edit.avif')" }}
      />

      <div className="relative z-10 mx-auto min-h-[840px] max-w-[1195px] px-6 pt-15 pb-10 sm:px-10 lg:min-h-[760px] lg:px-0 lg:pt-6">
        <motion.h2
          className="pt-1 text-center font-libra text-[40px] leading-none text-[#ff1fa8] sm:text-[48px] lg:text-[34px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          author
        </motion.h2>

        <motion.p
          className="mt-12 text-left font-libra leading-none text-[#111111] lg:ml-[58px] lg:mt-[42px] lg:text-[23px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
        >
          ~ poet, artist, author, sculptor ~
        </motion.p>

        <div className="mt-12 max-w-[590px] lg:mt-[48px] lg:ml-[58px]">
          <motion.p
            className="font-poppins text-[17px] leading-[1.57] text-[#082f43]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }}
          >
            <span className="font-libra text-[17px] leading-none text-[#2427c7]">
              gina ballotta
            </span>{" "}
            grew up watching her mother create Victorian sculptures. At 17, she
            was handed some clay and told, "Make something!" Gina sculpted a
            frog on a log and realized she had a gifted ability to sculpt. Over
            time, she enjoyed sculpting people, faces and flowers. Being a
            perfectionist helped Gina improve her artistic goals and polish her
            innate talents.
          </motion.p>

          <motion.p
            className="mt-22 font-poppins text-[17px] leading-[1.57] text-[#082f43] lg:mt-[28px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
          >
            At 29, Gina was inspired to invent a different kind of children's
            book... something never done before! She began by creating 16
            unique characters, each with special traits and personalities. Like
            her sculptures, Gina refined her illustrations and poetic
            writings... ultimately perfecting the characters and their stories.
            Then, miraculously, the series took on a life of its own! In time,
            Gina realized she was unconsciously influenced by the experiences of
            growing up as the middle child of three daughters.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
