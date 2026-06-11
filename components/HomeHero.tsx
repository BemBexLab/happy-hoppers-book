"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { PiShoppingCart } from "react-icons/pi";
import { useCart } from "@/components/CartProvider";

const navItems = [
  { label: "Books", href: "/books" },
  { label: "Characters", href: "/characters" },
  // { label: "Toy Sculptures", href: "/toy-sculptures" },
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
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <section className="relative overflow-hidden bg-white px-4 pt-6 pb-0 sm:px-6 sm:pt-8 lg:h-[590px] lg:px-0 lg:pt-[25px]">
      {/* Centered logo artwork */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Link href="/" className="block w-full max-w-[760px] sm:max-w-[760px] lg:max-w-[721px]">
          <Image
            src="/logo for header.avif"
            alt="Happy Hoppers Books"
            width={1120}
            height={672}
            preload
            sizes="(max-width: 640px) 94vw, (max-width: 1024px) 72vw, 721px"
            className="h-auto w-full"
          />
        </Link>
      </motion.div>

      {/* Centered divider band with characters, nav, and cart */}
      <div className="relative z-20 mx-auto mt-3 w-full pt-8 sm:pt-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:pt-0">
        {/* Top divider line */}
        <motion.div
          className="absolute left-1/2 top-0 h-[2px] w-full -translate-x-1/2 bg-[#74D1EA]"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeInOut" }}
        />

        {/* Centered content that sits inside the full-width divider band */}
        <div className="relative mx-auto w-full px-8 sm:px-12 lg:px-0">
          {/* Left character sitting on the divider */}
          <motion.div
            className="pointer-events-none absolute left-[12%] top-[-30px] sm:left-[13%] sm:top-[-38px] lg:left-[13.9%] lg:top-[-77px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
          >
            <Image
              src="/9bed69_1280cd02f9e5413a97491919a46c85cd~mv2.avif"
              alt="Happy Hoppers character"
              width={124}
              height={101}
              sizes="(max-width: 640px) 78px, (max-width: 1024px) 96px, 124px"
              className="h-auto w-[78px] sm:w-[96px] lg:w-[124px]"
            />
          </motion.div>

          {/* Right character leaning over the divider */}
          <motion.div
            className="pointer-events-none absolute right-[7%] top-[-68px] sm:right-[8%] sm:top-[-88px] lg:right-[10.8%] lg:top-[-97px]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.52, ease: "easeOut" }}
          >
            <Image
              src="/9bed69_1943854583374d1da016e4ec38449356~mv2.avif"
              alt="Happy Hoppers character"
              width={141}
              height={171}
              sizes="(max-width: 640px) 92px, (max-width: 1024px) 112px, 141px"
              className="h-auto w-[92px] sm:w-[112px] lg:w-[141px]"
            />
          </motion.div>

          {/* Navigation row and cart icon */}
          <div className="relative flex flex-col items-center gap-4 pt-3 sm:gap-5 sm:pt-5 lg:flex-row lg:justify-center lg:gap-4 lg:pt-[28px]">
            <motion.nav
              aria-label="Primary"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-[12px] tracking-[-0.01em] text-[#072f3f] sm:gap-x-7 sm:text-[15px] lg:flex-nowrap lg:gap-x-[55px] lg:text-[16px] lg:leading-none"
              variants={navContainer}
              initial="hidden"
              animate="show"
            >
              {navItems.map((item) => (
                <motion.div key={item.label} variants={navItem}>
                  <Link
                    href={item.href}
                    className={`whitespace-nowrap transition-colors hover:opacity-70 ${
                      pathname === item.href ? "text-[#74D1EA]" : "text-[#072f3f]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
            >
              <Link
                href="/cart"
                aria-label="Open cart"
                className="flex items-center gap-1 text-[#072f3f] transition-transform hover:scale-[1.03]"
              >
                <span className="text-[30px] leading-none">
                  <PiShoppingCart strokeWidth={0.8} />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#072f3f] text-[15px] font-semibold text-white">
                  {itemCount}
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom divider line */}
          <motion.div
            className="mx-auto mt-7 hidden h-[2px] w-full bg-[#74D1EA] lg:block"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
