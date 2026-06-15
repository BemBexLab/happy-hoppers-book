export const productGalleries = {
  "Hardcover Books": [
    "/Rectangle 71.png",
    "/9bed69_a32a46e843334bf89256ab8b558606b6~mv2.jpg.avif",
    "/9bed69_065c1a45654b433e84ccfecd4032eff0~mv2.jpg.avif",
    "/9bed69_ee503331ae044f24b2de6db01d721155~mv2.jpg.avif",
    "/9bed69_5f08ce73d5e041f985848003331680ca~mv2.jpg.avif",
    "/9bed69_ce3e37c285ad4d89ae203d33059d0a30~mv2.jpg.avif",
    "/9bed69_6b78c4c86466453fb2dcb67d7c85470e~mv2.jpg.avif",
    "/9bed69_3da38c0d69964136a5318a75977eebae~mv2.jpg.avif",
  ],
  "Video Books": [
    "/Rectangle 71.png",
    "/9bed69_a32a46e843334bf89256ab8b558606b6~mv2.jpg.avif",
    "/9bed69_065c1a45654b433e84ccfecd4032eff0~mv2.jpg.avif",
    "/9bed69_ee503331ae044f24b2de6db01d721155~mv2.jpg.avif",
    "/9bed69_5f08ce73d5e041f985848003331680ca~mv2.jpg.avif",
    "/9bed69_ce3e37c285ad4d89ae203d33059d0a30~mv2.jpg.avif",
    "/9bed69_6b78c4c86466453fb2dcb67d7c85470e~mv2.jpg.avif",
    "/9bed69_3da38c0d69964136a5318a75977eebae~mv2.jpg.avif",
  ],
  Ebooks: [
    "/Rectangle 71.png",
    "/9bed69_a32a46e843334bf89256ab8b558606b6~mv2.jpg.avif",
    "/9bed69_065c1a45654b433e84ccfecd4032eff0~mv2.jpg.avif",
    "/9bed69_ee503331ae044f24b2de6db01d721155~mv2.jpg.avif",
    "/9bed69_5f08ce73d5e041f985848003331680ca~mv2.jpg.avif",
    "/9bed69_ce3e37c285ad4d89ae203d33059d0a30~mv2.jpg.avif",
    "/9bed69_6b78c4c86466453fb2dcb67d7c85470e~mv2.jpg.avif",
    "/9bed69_3da38c0d69964136a5318a75977eebae~mv2.jpg.avif",
  ],
  "Audio Books": [
    "/Rectangle 71.png",
    "/9bed69_a32a46e843334bf89256ab8b558606b6~mv2.jpg.avif",
    "/9bed69_065c1a45654b433e84ccfecd4032eff0~mv2.jpg.avif",
    "/9bed69_ee503331ae044f24b2de6db01d721155~mv2.jpg.avif",
    "/9bed69_5f08ce73d5e041f985848003331680ca~mv2.jpg.avif",
    "/9bed69_ce3e37c285ad4d89ae203d33059d0a30~mv2.jpg.avif",
    "/9bed69_6b78c4c86466453fb2dcb67d7c85470e~mv2.jpg.avif",
    "/9bed69_3da38c0d69964136a5318a75977eebae~mv2.jpg.avif",
  ],
} as const;

export const getProductGallery = (label: string) =>
  [...(productGalleries[label as keyof typeof productGalleries] ?? [])];
