"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PiShoppingCart } from "react-icons/pi";
import { useCart } from "@/components/CartProvider";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "Characters", href: "/characters" },
  { label: "Toy Sculptures", href: "/toy-sculptures" },
  { label: "Author", href: "/author" },
  { label: "Quotes", href: "/quotes" },
  { label: "Volume Discounts", href: "/volume-discounts" },
  { label: "Connect", href: "/connect" },
  { label: "Info", href: "/info" },
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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const HomeHero = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const { itemCount } = useCart();

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white px-4 pt-10 pb-8 sm:px-6 sm:pb-10 lg:items-center lg:px-10 lg:pb-0">
      {/* Main hero image */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link href="/" className="h-auto w-full max-w-[980px]">
          <Image
            src="/Rectangle 1.png"
            alt="Happy Hoppers Books"
            width={1120}
            height={672}
            preload
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 980px"
            className="h-auto w-full max-w-[980px]"
          />
        </Link>
      </motion.div>

      {/* Divider + character images */}
      <div className="pointer-events-none relative z-10 mt-2 w-full px-2 sm:mt-3 sm:px-4 lg:absolute lg:inset-x-0 lg:bottom-[4.8rem] lg:mt-0 lg:px-10">
        <div className="relative mx-auto max-w-6xl">
          {/* Animated divider line */}
          <motion.div
            className="h-px w-full bg-[#9fe7fb]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Left character */}
          <motion.div
            className="absolute bottom-[-8px] left-[8%] sm:left-[12%] lg:left-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            <Image
              src="/9bed69_1280cd02f9e5413a97491919a46c85cd~mv2 2.png"
              alt="Happy Hoppers character"
              width={120}
              height={92}
              sizes="(max-width: 640px) 56px, (max-width: 1024px) 92px, 112px"
              className="h-auto w-[56px] sm:w-[92px] lg:w-[112px]"
            />
          </motion.div>

          {/* Faded background character */}
          <motion.div
            className="absolute bottom-[-56px] right-[20%] opacity-20 sm:bottom-[-78px] sm:right-[24%] lg:bottom-[-96px] lg:right-[26%]"
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
              sizes="(max-width: 640px) 52px, (max-width: 1024px) 68px, 184px"
              className="h-auto w-[52px] sm:w-[68px] lg:w-[184px]"
            />
          </motion.div>

          {/* Right character */}
          <motion.div
            className="absolute bottom-[-28px] right-[8%] sm:bottom-[-56px] sm:right-[18%] lg:bottom-[-72px] lg:right-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
          >
            <Image
              src="/9bed69_1943854583374d1da016e4ec38449356~mv2 1.png"
              alt="Happy Hoppers character"
              width={184}
              height={282}
              sizes="(max-width: 640px) 56px, (max-width: 1024px) 92px, 158px"
              className="h-auto w-[56px] sm:w-[92px] lg:w-[158px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Nav + cart */}
      <div className="relative z-20 mt-10 w-full px-3 sm:mt-12 sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-6 lg:mt-0">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 sm:gap-5 lg:flex-row lg:items-end lg:gap-10">
          {/* Staggered nav links */}
          <motion.nav
            aria-label="Primary"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-[12px] text-[#143846] sm:gap-x-7 sm:gap-y-3 sm:text-[17px] lg:gap-x-10 lg:text-left lg:text-[19px]"
            variants={navContainer}
            initial="hidden"
            animate="show"
          >
            {navItems.map((item) => (
              <motion.div key={item.label} variants={navItem}>
                <Link
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`transition-colors hover:opacity-70 ${
                    item.label === activeItem ? "text-[#67d4ff]" : "text-black"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Cart */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
          >
            <Link
              href="/cart"
              aria-label="Open cart"
              className="flex items-center gap-1 pb-0.5 text-[#173846] transition-transform hover:scale-[1.03]"
            >
              <span className="text-[26px] leading-none">
                <PiShoppingCart />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#173846] text-base font-semibold text-white">
                {itemCount}
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
