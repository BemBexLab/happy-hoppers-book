"use client";

import { motion } from "motion/react";

const Footnote = () => {
  return (
    <footer className="mx-auto w-[calc(100%-2rem)] max-w-[1470px] bg-[#d0edf4] px-5 py-8 text-center sm:w-[calc(100%-3rem)] sm:px-8 lg:w-[calc(100%-5rem)] lg:px-16 xl:px-24">
      <motion.p
        className="mx-auto max-w-[1120px] text-[11px] leading-relaxed text-[#1a1a1a] sm:text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Terms of use. Private policy. Eight hardcover books, Video books, E-books, and Audio books
        featuring the eight (8) Creatures and the eight (8) Happy Hopper characters: Hugger, Kisser,
        Looker, Louder, Runner, Sculpter, Sniffer, and Toother Copyright 2025 Gina Ballotta, Happy
        Hoppers Books &amp; The Happy Hoppers Adventures Series. All rights reserved.
      </motion.p>

      <hr className="mx-auto my-5 max-w-[1120px] border-black" />

      <motion.p
        className="text-[11px] text-[#1a1a1a] sm:text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Copyright 2026 by Gina Ballotta &amp; Happy Hoppers Books. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footnote;
