"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";
import { PiShoppingCart } from "react-icons/pi";
import { books } from "@/app/books/data";
import { useCart } from "@/components/CartProvider";

const navItems = [
  { label: "Books", href: "/" },
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

const isBooksPath = (pathname: string) =>
  pathname === "/" || pathname === "/books" || pathname.startsWith("/books/");

const HomeHero = () => {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileBooksOpen, setIsMobileBooksOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileBooksOpen(false);
  };

  return (
    <section className="relative overflow-visible bg-white">
      <div className="max-[1035px]:hidden">
        {/* Centered logo artwork */}
        <motion.div
          className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 pt-6 pb-0 sm:px-6 sm:pt-8 lg:h-[590px] lg:px-0 lg:pt-[25px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="block w-full max-w-[760px] sm:max-w-[760px] lg:max-w-[721px]"
          >
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
                className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center font-poppins text-[13px] font-medium tracking-[-0.011em] text-[#072f3f] sm:gap-x-8 sm:text-[16px] lg:flex-nowrap lg:gap-x-[53px] lg:text-[14px] lg:leading-none"
                variants={navContainer}
                initial="hidden"
                animate="show"
              >
                {navItems.map((item) => (
                  <motion.div key={item.label} variants={navItem}>
                    {item.label === "Books" ? (
                      <div className="group relative">
                        <Link
                          href="/"
                          className={`whitespace-nowrap transition-colors hover:opacity-70 ${
                            isBooksPath(pathname) ? "text-[#74D1EA]" : "text-[#072f3f]"
                          }`}
                        >
                          {item.label}
                        </Link>

                        <div className="invisible absolute left-1/2 top-full z-30 mt-3 w-56 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                          <div className="rounded-sm border border-[#74D1EA] bg-white/98 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                            {books.map((book) => (
                              <Link
                                key={book.slug}
                                href={`/books/${book.slug}`}
                                className={`block px-4 py-2 text-left text-[14px] leading-none transition-colors hover:bg-[#f2fbfe] hover:text-[#74D1EA] ${
                                  pathname === `/books/${book.slug}`
                                    ? "text-[#74D1EA]"
                                    : "text-[#072f3f]"
                                }`}
                              >
                                {book.bookLabel}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`whitespace-nowrap transition-colors hover:opacity-70 ${
                          pathname === item.href ? "text-[#74D1EA]" : "text-[#072f3f]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
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
      </div>

      <div className="min-[1036px]:hidden">
        <div className="mx-auto flex w-full max-w-[1035px] flex-col px-4 pt-4 pb-5 sm:px-6 sm:pt-6 sm:pb-6">
          <motion.div
            className="relative z-10 mx-auto w-full max-w-[620px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <Link href="/" className="block">
              <Image
                src="/logo for header.avif"
                alt="Happy Hoppers Books"
                width={1120}
                height={672}
                preload={false}
                sizes="(max-width: 640px) 92vw, (max-width: 1035px) 70vw, 620px"
                className="h-auto w-full"
              />
            </Link>
          </motion.div>

          <motion.div
            className="relative mt-4 overflow-hidden rounded-[28px] border-2 border-[#74D1EA] bg-[linear-gradient(180deg,#f7fdff_0%,#ffffff_100%)] shadow-[0_16px_36px_rgba(7,47,63,0.08)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 flex -translate-y-[38%] items-start justify-between px-3 sm:px-6">
              <Image
                src="/9bed69_1280cd02f9e5413a97491919a46c85cd~mv2.avif"
                alt="Happy Hoppers character"
                width={124}
                height={101}
                sizes="(max-width: 640px) 74px, 96px"
                className="h-auto w-[74px] sm:w-[96px]"
              />
              <Image
                src="/9bed69_1943854583374d1da016e4ec38449356~mv2.avif"
                alt="Happy Hoppers character"
                width={141}
                height={171}
                sizes="(max-width: 640px) 82px, 104px"
                className="h-auto w-[82px] sm:w-[104px]"
              />
            </div>

            <div className="relative flex items-center justify-between gap-3 px-4 pt-12 pb-4 sm:px-6 sm:pt-14">
              <Link
                href="/cart"
                aria-label="Open cart"
                onClick={closeMobileMenu}
                className="flex shrink-0 items-center gap-2 rounded-full border border-[#072f3f]/10 bg-white px-3 py-2 text-[#072f3f] shadow-[0_8px_18px_rgba(7,47,63,0.08)] transition-transform hover:scale-[1.03]"
              >
                <span className="text-[28px] leading-none">
                  <PiShoppingCart strokeWidth={0.8} />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#072f3f] text-[14px] font-semibold text-white">
                  {itemCount}
                </span>
              </Link>

              <div className="flex min-w-0 flex-1 flex-col items-center px-2 text-center">
                <p className="font-libra text-[24px] leading-none text-[#10069F] sm:text-[30px]">
                  hop in
                </p>
                <p className="mt-1 font-poppins text-[10px] uppercase tracking-[0.24em] text-[#072f3f] sm:text-[11px]">
                  Explore the collection
                </p>
              </div>

              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-hero-menu"
                onClick={() => setIsMobileMenuOpen((current) => !current)}
                className="flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-[#74D1EA] bg-white text-[#072f3f] shadow-[0_8px_18px_rgba(7,47,63,0.08)] transition-colors hover:bg-[#f2fbfe]"
              >
                <span
                  className={`block h-[2px] w-5 bg-current transition-transform duration-200 ${
                    isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 bg-current transition-opacity duration-200 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 bg-current transition-transform duration-200 ${
                    isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>

            <motion.div
              id="mobile-hero-menu"
              initial={false}
              animate={
                isMobileMenuOpen
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden border-t-2 border-[#74D1EA]"
            >
              <div className="px-4 pt-4 pb-5 sm:px-6">
                <motion.nav
                  aria-label="Primary mobile"
                  className="flex flex-col"
                  variants={navContainer}
                  initial="hidden"
                  animate="show"
                >
                  {navItems.map((item) => {
                    const isActive =
                      item.label === "Books"
                        ? isBooksPath(pathname)
                        : pathname === item.href;

                    if (item.label === "Books") {
                      return (
                        <motion.div key={item.label} variants={navItem}>
                          <div className="flex items-center border-b border-[#072f3f]/10">
                            <Link
                              href="/"
                              onClick={closeMobileMenu}
                              className={`min-w-0 flex-1 py-3 font-poppins text-[14px] font-medium transition-colors ${
                                isActive ? "text-[#74D1EA]" : "text-[#072f3f]"
                              }`}
                            >
                              {item.label}
                            </Link>

                            <button
                              type="button"
                              onClick={() =>
                                setIsMobileBooksOpen((current) => !current)
                              }
                              aria-label={
                                isMobileBooksOpen
                                  ? "Collapse books menu"
                                  : "Expand books menu"
                              }
                              aria-expanded={isMobileBooksOpen}
                              aria-controls="mobile-books-submenu"
                              className={`ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#74D1EA]/50 text-[18px] leading-none transition-colors ${
                                isActive ? "text-[#74D1EA]" : "text-[#072f3f]"
                              }`}
                            >
                              <span
                                className={`transition-transform duration-200 ${
                                  isMobileBooksOpen ? "rotate-45" : ""
                                }`}
                              >
                                +
                              </span>
                            </button>
                          </div>

                          <motion.div
                            id="mobile-books-submenu"
                            initial={false}
                            animate={
                              isMobileBooksOpen
                                ? { height: "auto", opacity: 1 }
                                : { height: 0, opacity: 0 }
                            }
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="rounded-[18px] bg-[#f2fbfe] px-4 py-2">
                              {books.map((book) => (
                                <Link
                                  key={book.slug}
                                  href={`/books/${book.slug}`}
                                  onClick={closeMobileMenu}
                                  className={`block border-b border-[#072f3f]/10 py-3 font-poppins text-[13px] font-medium last:border-b-0 ${
                                    pathname === `/books/${book.slug}`
                                      ? "text-[#74D1EA]"
                                      : "text-[#072f3f]"
                                  }`}
                                >
                                  {book.bookLabel}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div key={item.label} variants={navItem}>
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={`flex items-center justify-between border-b border-[#072f3f]/10 py-3 font-poppins text-[14px] font-medium transition-colors ${
                            isActive ? "text-[#74D1EA]" : "text-[#072f3f]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.nav>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
