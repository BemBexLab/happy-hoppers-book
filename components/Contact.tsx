"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { serifStyle } from "@/lib/motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="bg-white py-10 overflow-hidden">
      <motion.h2
        className="mb-15 text-center text-4xl italic text-[#ff1fa8] md:text-6xl"
        style={serifStyle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Connect
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%]">
        <motion.div
          className="flex flex-col pt-8 px-8 lg:pt-[29%] lg:px-16"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="mb-5 w-full max-w-[300px] border border-gray-400 p-1 mx-auto">
            <Image
              src="/Rectangle 83.png"
              alt="Happy Hoppers Books"
              width={200}
              height={200}
              className="h-auto w-full object-contain"
            />
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#1a1a1a]">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border border-gray-300 px-3 py-2 text-sm text-[#1a1a1a] outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#1a1a1a]">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="border border-gray-300 px-3 py-2 text-sm text-[#1a1a1a] outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#1a1a1a]">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="resize-none border border-gray-300 px-3 py-2 text-sm text-[#1a1a1a] outline-none"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#1a1f8f] rounded-3xl py-3 text-base font-semibold text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="flex items-center justify-center py-8 lg:py-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/image 431.png"
            alt="Happy Hoppers characters"
            width={0}
            height={0}
            sizes="(max-width: 1024px) 90vw, 55vw"
            style={{ width: "80%", height: "auto" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
