"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { makeTypewriterVariants, serifStyle } from "@/lib/motion";

const { container: containerVariants, char: charVariants } = makeTypewriterVariants(0.045, 0.6);
const textChars = "toy sculptures coming soon!".split("");

const ToySculptures = () => {
  return (
    <section className="bg-white px-8 pt-8">
      <motion.div
        className="relative mx-auto w-full max-w-[1500px]"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          src="/image 43.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", display: "block" }}
          alt="Toy sculptures tree illustration"
        />

        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2">
          <div className="border border-[#1a1a1a] bg-white px-6 py-2">
            <motion.p
              className="whitespace-nowrap text-5xl text-[#1a1a1a]"
              style={serifStyle}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              {textChars.map((char, i) => (
                <motion.span key={i} variants={charVariants}>{char}</motion.span>
              ))}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ToySculptures;
