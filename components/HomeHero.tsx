"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PiShoppingCart } from "react-icons/pi";

const navItems = [
  { label: "Books", href: "/" },
  { label: "Characters", href: "/" },
  { label: "Toy Sculptures", href: "/" },
  { label: "Author", href: "/" },
  { label: "Quotes", href: "/" },
  { label: "Volume Discounts", href: "/" },
  { label: "Connect", href: "/" },
  { label: "Info", href: "/" },
];

const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.9,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const HomeHero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 pt-10 sm:px-6 lg:px-10">
      {/* Main hero image */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/Rectangle 1.png"
          alt="Happy Hoppers Books"
          width={1120}
          height={672}
          priority
          className="h-auto w-full max-w-[980px]"
        />
      </motion.div>

      {/* Divider + character images */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[4.8rem] z-10 px-4 sm:px-8 lg:px-10">
        <div className="relative mx-auto">
          {/* Animated divider line */}
          <motion.div
            className="h-px w-full bg-[#9fe7fb]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Left character */}
          <motion.div
            className="absolute bottom-[-8px] left-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            <Image
              src="/9bed69_1280cd02f9e5413a97491919a46c85cd~mv2 2.png"
              alt="Happy Hoppers character"
              width={120}
              height={92}
              className="h-auto w-[72px] sm:w-[92px] lg:w-[112px]"
            />
          </motion.div>

          {/* Faded background character */}
          <motion.div
            className="absolute bottom-[-96px] right-[26%] hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Image
              src="/9bed69_1943854583374d1da016e4ec38449356~mv2 1.png"
              alt=""
              width={184}
              height={282}
              aria-hidden
              className="h-auto w-[68px] lg:w-[184px]"
            />
          </motion.div>

          {/* Right character */}
          <motion.div
            className="absolute bottom-[-72px] right-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
          >
            <Image
              src="/9bed69_1943854583374d1da016e4ec38449356~mv2 1.png"
              alt="Happy Hoppers character"
              width={184}
              height={282}
              className="h-auto w-[74px] sm:w-[92px] lg:w-[158px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Nav + cart */}
      <div className="absolute inset-x-0 bottom-6 z-20 px-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-end justify-center gap-4 sm:gap-6 lg:gap-10">
          {/* Staggered nav links */}
          <motion.nav
            aria-label="Primary"
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[17px] text-[#143846] sm:text-[19px]"
            variants={navContainer}
            initial="hidden"
            animate="show"
          >
            {navItems.map((item) => (
              <motion.div key={item.label} variants={navItem}>
                <Link
                  href={item.href}
                  className={`transition-colors hover:opacity-70 ${
                    item.label === "Books" ? "text-[#67d4ff]" : "text-[#173846]"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Cart */}
          <motion.div
            className="flex items-center gap-1 pb-0.5 text-[#173846]"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
          >
            <span className="text-[26px] leading-none">
              <PiShoppingCart />
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#173846] text-base font-semibold text-white">
              0
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
