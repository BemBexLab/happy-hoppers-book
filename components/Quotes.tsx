"use client";

import { motion } from "motion/react";
import { serifStyle, makeTypewriterVariants, fadeUp, fromLeft, fromRight } from "@/lib/motion";

const { container: headingContainer, char: charVariant } = makeTypewriterVariants(0.08, 0.1);
const headingChars = "quotes".split("");

const FADE_UP     = fadeUp(0);
const FADE_UP_01  = fadeUp(0.1);
const FROM_LEFT   = fromLeft(0);
const FROM_LEFT_1 = fromLeft(0.1);
const FROM_RIGHT  = fromRight(0);
const FROM_RIGHT_1 = fromRight(0.1);

const Quotes = () => {
  return (
    <section className="relative bg-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Rectangle 81.png')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 h-full overflow-y-auto px-6 py-10 lg:px-16">
        <motion.h2
          className="mb-15 text-center text-4xl italic text-[#ff1fa8] md:text-5xl xl:text-6xl"
          style={serifStyle}
          variants={headingContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          {headingChars.map((char, i) => (
            <motion.span key={i} variants={charVariant}>{char}</motion.span>
          ))}
        </motion.h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          <motion.p className="col-span-2 text-center text-lg font-bold text-[#1a1a1a] md:text-xl lg:text-2xl" {...FADE_UP}>
            &ldquo;I can do this... I can do BETTER!&rdquo; Gina B, 1970
          </motion.p>

          <motion.p className="text-sm italic leading-relaxed text-[#2e2e2e] md:text-lg lg:text-xl" {...FROM_LEFT}>
            &ldquo;Gina&apos;s creative writing is very original... her poems and stories display her best work.&rdquo; Barbara S, grade school report card 1972
          </motion.p>
          <motion.p className="text-sm italic leading-relaxed text-[#2e2e2e] md:text-lg lg:text-xl" {...FROM_RIGHT}>
            &ldquo;Gina is very creative... in the midst of writing a children&apos;s book.&rdquo; B. L. Denaris, grade school report card 1974
          </motion.p>

          <motion.p className="col-span-2 text-center text-lg font-bold text-[#1a1a1a] md:text-xl lg:text-2xl" {...FADE_UP}>
            &ldquo;You have a HEART OF GOLD!&rdquo; Elizabeth F
          </motion.p>

          <motion.p className="col-span-2 text-center text-sm italic text-[#2e2e2e] md:text-lg lg:text-xl" {...FADE_UP_01}>
            &ldquo;Everyone LOVES STICK FIGURES!&rdquo;
          </motion.p>

          <motion.p className="text-lg font-bold text-[#1a1a1a] md:text-xl lg:text-2xl" {...FROM_LEFT}>
            &ldquo;There&apos;s some GENIUS in her!&rdquo; William P
          </motion.p>
          <motion.p className="self-center text-sm italic leading-relaxed text-[#2e2e2e] md:text-lg lg:text-xl" {...FROM_RIGHT_1}>
            &ldquo;An incredible artist offering her amazing talents to the world.&rdquo; Allyson M
          </motion.p>

          <motion.p className="text-sm italic leading-relaxed text-[#2e2e2e] md:text-lg lg:text-xl" {...FROM_LEFT_1}>
            &ldquo;The characters that Gina created feel real... and their journeys mirror our own joys and struggles.&rdquo;
          </motion.p>
          <motion.p className="self-center text-lg font-bold text-[#1a1a1a] md:text-xl lg:text-2xl" {...FROM_RIGHT}>
            &ldquo;This amazing series is unique and GROUNDBREAKING!&rdquo; Steve H
          </motion.p>

          <motion.p className="col-span-2 text-center text-base italic leading-relaxed text-[#2e2e2e] md:text-xl lg:text-2xl" {...FADE_UP}>
            &ldquo;Through her words, poetry and unique Hopper images, Gina stirs hearts, ignites imaginations and evokes feelings that resonate deeply within her readers.&rdquo;
          </motion.p>

          <motion.p className="text-sm italic leading-relaxed text-[#2e2e2e] md:text-lg lg:text-xl" {...FROM_LEFT}>
            &ldquo;Her raw talent goes way beyond just appreciating her skills.&rdquo;
          </motion.p>
          <motion.p className="text-sm italic leading-relaxed text-[#2e2e2e] md:text-lg lg:text-xl" {...FROM_RIGHT}>
            &ldquo;Each carefully written word and crafted illustration become vessels of emotion.&rdquo;
          </motion.p>

          <motion.p className="col-span-2 text-center text-sm italic leading-relaxed text-[#2e2e2e] md:text-lg lg:text-xl" {...FADE_UP}>
            &ldquo;The emotional impact of her Happy Hoppers, with her original writing and illustrations, is profound and enduring.&rdquo;
          </motion.p>

          <motion.p className="text-sm italic leading-relaxed text-[#2e2e2e] md:text-lg lg:text-xl" {...FROM_LEFT}>
            &ldquo;Amazingly creative. LOVE, LAUGH, and LEARN is the absolute mantra that I took from this brilliant author!&rdquo; Sean M
          </motion.p>
          <motion.p className="text-sm italic leading-relaxed text-[#2e2e2e] md:text-lg lg:text-xl" {...FROM_RIGHT}>
            &ldquo;The Happy Hoppers will become a cherished companion for readers around the globe.&rdquo;
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
