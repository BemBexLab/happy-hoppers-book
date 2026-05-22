"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { serifStyle } from "@/lib/motion";

const SocialIcon = ({
  href,
  label,
  bg,
  children,
}: {
  href: string;
  label: string;
  bg: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    aria-label={label}
    className="flex h-10 w-10 items-center justify-center text-white"
    style={{ backgroundColor: bg }}
  >
    {children}
  </a>
);

const Info = () => {
  return (
    <section className="bg-white px-4 pb-8 pt-6 sm:px-6 sm:pt-8 md:px-10 lg:px-16 lg:pb-0 lg:pt-10">
      <motion.h2
        className="mb-4 text-center text-3xl italic text-[#ff1fa8] sm:mb-6 sm:text-4xl md:text-5xl lg:mb-8"
        style={serifStyle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        info
      </motion.h2>

      <div className="grid grid-cols-1 items-center lg:grid-cols-[58%_42%]">
        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src="/image 46.png"
            alt="Happy Hoppers characters group"
            width={0}
            height={0}
            sizes="(max-width: 1024px) 90vw, 58vw"
            style={{ width: "95%", height: "auto", display: "block" }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4 py-6 sm:gap-6 sm:py-8 lg:py-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="border border-gray-400 p-1">
            <Image
              src="/Rectangle 83.png"
              alt="Happy Hoppers Books Logo"
              width={175}
              height={175}
              className="object-contain"
            />
          </div>

          <div className="text-center">
            <p className="text-lg font-bold italic text-[#2a9d2a] sm:text-xl md:text-2xl" style={serifStyle}>
              WEBSITE
            </p>
            <p className="text-xs text-[#2e2e2e] sm:text-sm md:text-base">www.happyhoppersbooks.com</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-bold italic text-[#2a9d2a] sm:text-xl md:text-2xl" style={serifStyle}>
              email
            </p>
            <p className="text-xs text-[#2e2e2e] sm:text-sm md:text-base">HappyHoppersBooks@gmail.com</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-lg font-bold italic text-[#2a9d2a] sm:text-xl md:text-2xl" style={serifStyle}>
              social media
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="#" label="Tumblr" bg="#35465c">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.058 2.371h.048c.19-.005.353-.037.5-.014.831.084 1.272.776 1.272 1.522 0 .555-.3 1.007-.73 1.289-.442.29-1.131.615-2.082.615z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="Facebook" bg="#1877f2">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="Instagram" bg="#c13584">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="X" bg="#000000">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <p className="text-center text-xs text-[#2e2e2e] sm:text-sm md:text-base">
            No Tax, Shipping Cost or Returns
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
