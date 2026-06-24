"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="overflow-hidden bg-white pt-4 pb-8">
      <motion.h2
        className="text-center font-libra text-[32px] leading-none text-[#ff1fa8] sm:text-[34px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        connect
      </motion.h2>

      <div className="mx-auto mt-6 grid max-w-[1180px] grid-cols-1 items-start gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[38%_62%] lg:gap-1 lg:px-0">
        <motion.div
          className="flex flex-col items-center pt-1 lg:mt-[60px] lg:items-start lg:pl-[82px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
        >
          <div className="mb-10 w-full max-w-[220px] border border-[#41525a] p-[3px] sm:mb-12 sm:max-w-[240px] lg:mb-18 lg:ml-[72px] lg:max-w-[255px]">
            <Image
              src="/Rectangle 83.png"
              alt="Happy Hoppers Books"
              width={255}
              height={255}
              className="h-auto w-full object-contain"
            />
          </div>

          <form
            className="flex w-full max-w-[385px] flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-1.5">
              <label className="font-poppins text-[13px] text-black">
                Name *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="h-[35px] border border-black bg-white px-3 text-sm text-black outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-poppins text-[13px] text-black">
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="h-[35px] border border-black bg-white px-3 text-sm text-black outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-poppins text-[13px] text-black">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="min-h-[82px] resize-none border border-black bg-white px-3 py-2 text-sm text-black outline-none"
              />
            </div>

            <motion.button
              type="submit"
              className="mt-1 h-[37px] w-[114px] self-center rounded-full bg-black font-poppins text-[14px] font-medium text-white lg:ml-[136px] lg:self-start"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="flex items-start justify-center lg:justify-start"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.18 }}
        >
          <Image
            src="/Book 8 illustrations-28 copy_edited.avif"
            alt="Happy Hoppers characters"
            width={760}
            height={698}
            sizes="(max-width: 1024px) 90vw, 760px"
            className="h-auto w-full max-w-[760px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
