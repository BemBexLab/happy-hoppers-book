"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { serifStyle } from "@/lib/motion";

const TheHappyHoppers = () => {
  return (
    <section className="bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-10 lg:px-16 lg:py-10">
      <motion.div
        className="mb-3 text-center sm:mb-5 lg:mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xl leading-snug sm:text-2xl md:text-3xl lg:text-4xl">
          <motion.span
            className="italic text-[#ff2eb3]"
            style={serifStyle}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          >
            the happy hoppers{" "}
          </motion.span>
          <motion.span
            className="font-bold uppercase tracking-wide text-[#2a3ccf]"
            style={serifStyle}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
          >
            adventures series
          </motion.span>
        </p>

        <motion.p
          className="mt-2 text-xl font-bold uppercase tracking-wide text-[#2a3ccf] sm:text-2xl md:text-3xl lg:text-4xl"
          style={serifStyle}
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.45 }}
        >
          volume discounts
        </motion.p>
      </motion.div>

      <motion.div
        className="mx-auto w-[95%] sm:w-[88%] md:w-[82%] lg:w-4/5"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src="/8 hard cover books copy fixed.png"
          alt="The Happy Hoppers Adventures Series — Volume Discounts"
          width={0}
          height={0}
          sizes="(max-width: 640px) 95vw, (max-width: 768px) 88vw, (max-width: 1024px) 82vw, 80vw"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </motion.div>
    </section>
  );
};

export default TheHappyHoppers;
