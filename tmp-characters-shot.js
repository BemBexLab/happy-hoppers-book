const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1285, height: 795 } });

  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });

  const heading = page.getByRole("heading", { name: /characters/i }).last();
  await heading.scrollIntoViewIfNeeded();

  const section = heading.locator("xpath=ancestor::section[1]");
  await section.screenshot({ path: "tmp-characters-section.png" });

  await browser.close();
})();
