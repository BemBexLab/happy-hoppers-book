"use client";

import { motion } from "motion/react";

const Footnote = () => {
  return (
    <footer className="bg-[#d0edf4] px-8 py-8 text-center md:px-56 mx-40">
      <motion.p
        className="mx-auto max-w-8xl text-xs leading-relaxed text-[#1a1a1a]"
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

      <hr className="my-5 border-black" />

      <motion.p
        className="text-xs text-[#1a1a1a]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        © 2026 by Gina Ballotta &amp; Happy Hoppers Books. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footnote;
