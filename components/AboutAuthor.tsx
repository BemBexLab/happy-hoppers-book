"use client";

import { motion } from "motion/react";
import { serifStyle, makeTypewriterVariants, fadeUp, fromLeft } from "@/lib/motion";

const { container: headingContainer, char: charVariant } = makeTypewriterVariants(0.08, 0.2);
const headingChars = "author".split("");

const FADE_UP_SUBTITLE = fadeUp(0.7, 24, 0.6);
const FADE_LEFT_P1 = fromLeft(0.95, 30, 0.65, 0.3);
const FADE_LEFT_P2 = fromLeft(1.15, 30, 0.65, 0.3);

const AboutAuthor = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Rectangle 79.png')" }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div className="relative z-10 flex min-h-screen flex-col px-6 py-4 sm:py-6 lg:px-12 lg:py-8">
        <motion.h2
          className="pt-5 text-center text-[42px] italic leading-none text-[#ff1fa8] sm:pt-8 lg:pt-10 lg:text-[52px]"
          style={serifStyle}
          variants={headingContainer}
          initial="hidden"
          animate="show"
        >
          {headingChars.map((char, i) => (
            <motion.span key={i} variants={charVariant}>{char}</motion.span>
          ))}
        </motion.h2>

        <div className="flex flex-1 items-center">
          <div className="w-full lg:max-w-[55%]">
            <motion.p
              className="mb-4 text-center text-xl font-semibold italic text-[#2e2e2e] sm:text-2xl lg:text-3xl"
              style={serifStyle}
              {...FADE_UP_SUBTITLE}
            >
              ~ poet, artist, author, sculptor ~
            </motion.p>

            <motion.p className="mb-4 text-base leading-[1.7] text-[#2e2e2e] sm:text-lg lg:text-xl" {...FADE_LEFT_P1}>
              <motion.span
                className="font-bold italic text-[#10069F]"
                style={serifStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                Gina Ballotta
              </motion.span>{" "}
              grew up watching her mother create Victorian sculptures. At 17, she
              was handed some clay and told, &ldquo;Make something!&rdquo; Gina
              sculpted a frog on a log and realized she had a gifted ability to
              sculpt. Over time, she enjoyed sculpting people, faces and flowers.
              Being a perfectionist helped Gina improve her artistic goals and
              polish her innate talents.
            </motion.p>

            <motion.p className="text-base leading-[1.7] text-[#2e2e2e] sm:text-lg lg:text-xl" {...FADE_LEFT_P2}>
              At 29, Gina was inspired to invent a different kind of
              children&apos;s book... something never done before! She began by
              creating 16 unique characters, each with special traits and
              personalities. Like her sculptures, Gina refined her illustrations
              and poetic writings... ultimately perfecting the characters and
              their stories. Then, miraculously, the series took on a life of
              its own! In time, Gina realized she was unconsciously influenced
              by the experiences of growing up as the middle child of three
              daughters.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
