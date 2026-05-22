export const serifStyle = { fontFamily: "Georgia, 'Times New Roman', serif" } as const;

export const makeTypewriterVariants = (stagger = 0.08, delay = 0.2) => ({
  container: {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  },
  char: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } },
});

export const fadeUp = (delay = 0, y = 28, duration = 0.55) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 as number },
  transition: { duration, ease: "easeOut" as const, delay },
});

export const fromLeft = (delay = 0, x = 36, duration = 0.55, amount = 0.4) => ({
  initial: { opacity: 0, x: -x },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: amount as number },
  transition: { duration, ease: "easeOut" as const, delay },
});

export const fromRight = (delay = 0, x = 36, duration = 0.55, amount = 0.4) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: amount as number },
  transition: { duration, ease: "easeOut" as const, delay },
});
