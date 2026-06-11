"use client";

import { motion } from "motion/react";

const AboutAuthor = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.94]"
        style={{ backgroundImage: "url('/Rectangle 79.png')" }}
      />

      <div className="relative z-10 mx-auto min-h-[840px] max-w-[1195px] px-6 pt-15 pb-10 sm:px-10 lg:px-12">
        <motion.h2
          className="pt-1 text-center font-libra text-[40px] leading-none text-[#ff1fa8] sm:text-[48px] lg:text-[40px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          author
        </motion.h2>

        <motion.p
          className="mt-12 text-left font-libra leading-none text-[#111111] sm:text-[36px] lg:mt-[54px] text-[28px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
        >
          ~ poet, artist, author, sculptor ~
        </motion.p>

        <div className="mt-12 max-w-[590px] lg:mt-12">
          <motion.p
            className="font-poppins text-[20px] leading-[1.57] text-[#082f43] sm:text-[22px] lg:text-[21px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }}
          >
            <span className="font-libra text-[31px] leading-none text-[#2427c7] lg:text-[33px]">
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
            className="mt-22 font-poppins text-[20px] leading-[1.57] text-[#082f43] sm:text-[22px] lg:mt-[30px] lg:text-[21px]"
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
