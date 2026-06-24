import { getProductSlug, type Book, type BookProduct } from "@/app/books/data";
import { getProductGallery } from "@/lib/product-galleries";

export type QuickViewData = {
  description: string;
  details: string[];
  gallery: string[];
};

type QuickViewBookData = Record<
  string,
  Omit<QuickViewData, "gallery"> & { gallery?: string[] }
>;

const defaultDetails = [
  "Artist & Author: Gina Ballotta",
  "Publisher: Happy Hoppers Books",
  "Publication year: 2025",
  "Pages: 40",
  "Language: English",
  "Age range: 6 to 99",
  "BISAC Category: Juvenile Fiction",
];

const quickViewDataByBook: Record<string, QuickViewBookData> = {
  "curious-visitors": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed book. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: [
        "Artist & Author:  Gina Ballotta",
        "Publisher:  Happy Hoppers Books",
        "Publication year:  2025",
        "Pages: 40",
        "Language: English",
        "ISBN #:  979-8-3507-3693-9",
        "Dimensions:  8.5” w x 11” h",
        "Weight:  1.0 pound",
        "Age range: 6 to 99",
        "BISAC Category: Juvenile Fiction",
      ],
      gallery: [
        "/9bed69_b969bb2967bd4cdfacc87fde8ad56f2f~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
      ],
    },
    "video-books": {
      description:
        "This is a 09:34 MP4 format video file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
      ],
    },
    ebooks: {
      description:
        "This is a digital Flipbook. Customers receive a link to download the E-book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
      ],
    },
    "audio-books": {
      description:
        "This is a 09:03 MP3 format audio file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
      ],
    },
  },

  "a-musical-surprise": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed book. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: [
        "Artist & Author:  Gina Ballotta",
        "Publisher:  Happy Hoppers Books",
        "Publication year:  2025",
        "Pages: 40",
        "Language: English",
        "ISBN #:  979-8-3507-3822-3",
        "Dimensions:  8.5” w x 11” h",
        "Weight:  1.0 pound",
        "Age range: 6 to 99",
        "BISAC Category: Juvenile Fiction",
      ],
      gallery: [
        "/9bed69_097882167bb9406baae368a4fd81ce60~mv2.avif",
        "/9bed69_8df13190395546159177e2859f654b1f~mv2.avif",
        "/9bed69_b9b987ac06b74227b3c682f1684565ad~mv2.avif",
        "/9bed69_341495a2e9b4494eb42433c618cd3a61~mv2.avif",
        "/9bed69_3456d5882925431ba41d3f2a638f311a~mv2.avif",
      ],
    },
    "video-books": {
      description:
        "This is a 10:17 MP4 format video file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_8df13190395546159177e2859f654b1f~mv2.avif",
        "/9bed69_b9b987ac06b74227b3c682f1684565ad~mv2.avif",
        "/9bed69_341495a2e9b4494eb42433c618cd3a61~mv2.avif",
        "/9bed69_3456d5882925431ba41d3f2a638f311a~mv2.avif",
      ],
    },
    ebooks: {
      description:
        "This is a digital Flipbook. Customers receive a link to download the E-Book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_341495a2e9b4494eb42433c618cd3a61~mv2.avif",
        "/9bed69_8df13190395546159177e2859f654b1f~mv2.avif",
        "/9bed69_b9b987ac06b74227b3c682f1684565ad~mv2.avif",
        "/9bed69_3456d5882925431ba41d3f2a638f311a~mv2.avif",
      ],
    },
    "audio-books": {
      description:
        "This is a 09:48 MP3 format audio file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_341495a2e9b4494eb42433c618cd3a61~mv2.avif",
        "/9bed69_8df13190395546159177e2859f654b1f~mv2.avif",
        "/9bed69_b9b987ac06b74227b3c682f1684565ad~mv2.avif",
        "/9bed69_3456d5882925431ba41d3f2a638f311a~mv2.avif",
      ],
    },
  },

  "delicious-treats": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed book. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: [
        "Artist & Author:  Gina Ballotta",
        "Publisher:  Happy Hoppers Books",
        "Publication year:  2025",
        "Pages: 40",
        "Language: English",
        "ISBN #: 979-8-3507-3897-1",
        "Dimensions:  8.5” w x 11” h",
        "Weight: 1.0 pound",
        "Age range: 6 to 99",
        "BISAC Category: Juvenile Fiction",
      ],
      gallery: [
        "/9bed69_734212ff19de4867a6b19624ed9353cf~mv2.avif",
        "/9bed69_7ed6f37476854231ae05cba24ee3e52e~mv2.avif",
        "/9bed69_f7449e9e7f74413a92344894e9e9f138~mv2.avif",
        "/9bed69_065c1a45654b433e84ccfecd4032eff0~mv2.avif",
        "/9bed69_c6b8e29dde6f4343b41ca2a4d4d0a578~mv2.avif",
      ],
    },
    "video-books": {
      description:
        "This is a 10:32 MP4 format video file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_065c1a45654b433e84ccfecd4032eff0~mv2.avif",
        "/9bed69_7ed6f37476854231ae05cba24ee3e52e~mv2.avif",
        "/9bed69_f7449e9e7f74413a92344894e9e9f138~mv2.avif",
        "/9bed69_c6b8e29dde6f4343b41ca2a4d4d0a578~mv2.avif",
      ],
    },
    ebooks: {
      description:
        "This is a digital Flipbook. Customers receive a link to download the E-book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_065c1a45654b433e84ccfecd4032eff0~mv2.avif",
        "/9bed69_7ed6f37476854231ae05cba24ee3e52e~mv2.avif",
        "/9bed69_f7449e9e7f74413a92344894e9e9f138~mv2.avif",
        "/9bed69_c6b8e29dde6f4343b41ca2a4d4d0a578~mv2.avif",
      ],
    },
    "audio-books": {
      description:
        "This is a 10:16 MP3 format audio file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_065c1a45654b433e84ccfecd4032eff0~mv2.avif",
        "/9bed69_7ed6f37476854231ae05cba24ee3e52e~mv2.avif",
        "/9bed69_f7449e9e7f74413a92344894e9e9f138~mv2.avif",
        "/9bed69_c6b8e29dde6f4343b41ca2a4d4d0a578~mv2.avif",
      ],
    },
  },

  "thrill-of-exercise": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed book. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: [
        "Artist & Author: Gina Ballotta",
        "Publisher: Happy Hoppers Books",
        "Publication year:  2025",
        "Pages: 40",
        "Language: English",
        "ISBN #:  979-8-3507-3956-5",
        "Dimensions: 8.5” w x 11” h",
        "Weight: 1.0 pound",
        "Age range: 6 to 99",
        "BISAC Category: Juvenile Fiction",
      ],
      gallery: [
        "/9bed69_806c99578ae14e1ea1d14e2c1c44fcda~mv2.avif",
        "/9bed69_293052f4e7be423db94fa1a732e3ff32~mv2.avif",
        "/9bed69_60d55ee2372c4bc58281184f765b074b~mv2.avif",
        "/9bed69_ee503331ae044f24b2de6db01d721155~mv2.avif",
        "/9bed69_86928b37ba93444b916e58a6c9301790~mv2.avif",
      ],
    },
    "video-books": {
      description:
        "This is a 09:43 MP4 format video file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_ee503331ae044f24b2de6db01d721155~mv2.avif",
        "/9bed69_293052f4e7be423db94fa1a732e3ff32~mv2.avif",
        "/9bed69_60d55ee2372c4bc58281184f765b074b~mv2.avif",
        "/9bed69_86928b37ba93444b916e58a6c9301790~mv2.avif",
      ],
    },
    ebooks: {
      description:
        "This is a digital Flipbook. Customers receive a link to download the E-book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_ee503331ae044f24b2de6db01d721155~mv2.avif",
        "/9bed69_293052f4e7be423db94fa1a732e3ff32~mv2.avif",
        "/9bed69_60d55ee2372c4bc58281184f765b074b~mv2.avif",
        "/9bed69_86928b37ba93444b916e58a6c9301790~mv2.avif",
      ],
    },
    "audio-books": {
      description:
        "This is a 09:16 MP3 format audio file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_ee503331ae044f24b2de6db01d721155~mv2.avif",
        "/9bed69_293052f4e7be423db94fa1a732e3ff32~mv2.avif",
        "/9bed69_60d55ee2372c4bc58281184f765b074b~mv2.avif",
        "/9bed69_86928b37ba93444b916e58a6c9301790~mv2.avif",
      ],
    },
  },

  "power-of-thought": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed book. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: [
        "Artist & Author: Gina Ballotta",
        "Publisher: Happy Hoppers Books",
        "Publication year:  2025",
        "Pages: 40",
        "Language: English",
        "ISBN #: 979-8-3507-3693-9",
        "Dimensions: 8.5” w x 11” h",
        "Weight: 1.0 pound",
        "Age range: 6 to 99",
        "BISAC Category: Juvenile Fiction",
      ],
      gallery: [
        "/9bed69_38f12728e96040e1ac731f46735b7cde~mv2.avif",
        "/9bed69_84923e19be934d7c875d1139182451e7~mv2.avif",
        "/9bed69_da14e09de3b046128b0b9d674bb27e4f~mv2.avif",
        "/9bed69_5f08ce73d5e041f985848003331680ca~mv2.avif",
        "/9bed69_65e18129739f4146b9e3d98a168e15ae~mv2.avif",
      ],
    },
    "video-books": {
      description:
        "This is a 10:06 MP4 format video file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_5f08ce73d5e041f985848003331680ca~mv2.avif",
        "/9bed69_84923e19be934d7c875d1139182451e7~mv2.avif",
        "/9bed69_da14e09de3b046128b0b9d674bb27e4f~mv2.avif",
        "/9bed69_65e18129739f4146b9e3d98a168e15ae~mv2.avif",
      ],
    },
    ebooks: {
      description:
        "This is a digital Flipbook. Customers receive a link to download the E-book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
      ],
    },
    "audio-books": {
      description:
        "This is a 09:36 MP3 format audio file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
      ],
    },
  },

  "dreams-come-true": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed book. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: [
        "Artist & Author: Gina Ballotta",
        "Publisher: Happy Hoppers Books",
        "Publication year:  2025",
        "Pages: 40",
        "Language: English",
        "ISBN #: 979-8-3507-4209-1",
        "Dimensions: 8.5” w x 11” h",
        "Weight: 1.0 pound",
        "Age range: 6 to 99",
        "BISAC Category: Juvenile Fiction",
      ],
      gallery: [
        "/9bed69_b3573b3831804ca2b4f80cf0bd7e13cf~mv2.avif",
        "/9bed69_c34b64565d804227aac8b8223beb5c69~mv2.avif",
        "/9bed69_53c15b8218eb40488adab17beddec537~mv2.avif",
        "/9bed69_ce3e37c285ad4d89ae203d33059d0a30~mv2.avif",
        "/9bed69_5acfa9015789491783d63c960910bdaf~mv2.avif",
      ],
    },
    "video-books": {
      description:
        "This is a 10:22 MP4 format video file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_ce3e37c285ad4d89ae203d33059d0a30~mv2.avif",
        "/9bed69_c34b64565d804227aac8b8223beb5c69~mv2.avif",
        "/9bed69_53c15b8218eb40488adab17beddec537~mv2.avif",
        "/9bed69_5acfa9015789491783d63c960910bdaf~mv2.avif",
      ],
    },
    ebooks: {
      description:
        "This is a digital Flipbook. Customers receive a link to download the E-book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_ce3e37c285ad4d89ae203d33059d0a30~mv2.avif",
        "/9bed69_c34b64565d804227aac8b8223beb5c69~mv2.avif",
        "/9bed69_53c15b8218eb40488adab17beddec537~mv2.avif",
        "/9bed69_5acfa9015789491783d63c960910bdaf~mv2.avif",
      ],
    },
    "audio-books": {
      description:
        "This is a 09:52 MP3 format audio file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_ce3e37c285ad4d89ae203d33059d0a30~mv2.avif",
        "/9bed69_c34b64565d804227aac8b8223beb5c69~mv2.avif",
        "/9bed69_53c15b8218eb40488adab17beddec537~mv2.avif",
        "/9bed69_5acfa9015789491783d63c960910bdaf~mv2.avif",
      ],
    },
  },
  
  "creative-discovery": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed book. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: [
        "Artist & Author:  Gina Ballotta",
        "Publisher:  Happy Hoppers Books",
        "Publication year:  2025",
        "Pages: 40",
        "Language: English",
        "ISBN #:  979-8-3507-3693-9",
        "Dimensions:  8.5” w x 11” h",
        "Weight:  1.0 pound",
        "Age range: 6 to 99",
        "BISAC Category: Juvenile Fiction",
      ],
      gallery: [
        "/9bed69_b969bb2967bd4cdfacc87fde8ad56f2f~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
      ],
    },
    "video-books": {
      description:
        "This is a 09:34 MP4 format video file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
      ],
    },
    ebooks: {
      description:
        "This is a digital Flipbook. Customers receive a link to download the E-book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
      ],
    },
    "audio-books": {
      description:
        "This is a 09:03 MP3 format audio file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
      ],
    },
  },
  "love-and-be-loved": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed book. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: [
        "Artist & Author:  Gina Ballotta",
        "Publisher:  Happy Hoppers Books",
        "Publication year:  2025",
        "Pages: 40",
        "Language: English",
        "ISBN #:  979-8-3507-3693-9",
        "Dimensions:  8.5” w x 11” h",
        "Weight:  1.0 pound",
        "Age range: 6 to 99",
        "BISAC Category: Juvenile Fiction",
      ],
      gallery: [
        "/9bed69_b969bb2967bd4cdfacc87fde8ad56f2f~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
      ],
    },
    "video-books": {
      description:
        "This is a 09:34 MP4 format video file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
      ],
    },
    ebooks: {
      description:
        "This is a digital Flipbook. Customers receive a link to download the E-book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
      ],
    },
    "audio-books": {
      description:
        "This is a 09:03 MP3 format audio file, lively narrated by Gina Ballotta. Customers receive a link to download the video book after the product is purchased.",
      details: [],
      gallery: [
        "/9bed69_3f7edda29c584daa8e5e05de55e032b8~mv2.avif",
        "/9bed69_580083f08bb94d0aacc0ecf097cca33d~mv2.avif",
        "/9bed69_e32809895ab146088244e37dd6e4289d~mv2.avif",
        "/9bed69_5f336bc8dfcb4abfb5a8997f64b631c3~mv2.avif",
      ],
    },
  },
};

export const getQuickViewData = (
  book: Book,
  product: BookProduct,
): QuickViewData => {
  const productSlug = getProductSlug(product.label);
  const routeData = quickViewDataByBook[book.slug]?.[productSlug];

  if (routeData) {
    return {
      description: routeData.description,
      details: routeData.details,
      gallery: routeData.gallery ?? product.gallery,
    };
  }

  return {
    description: `This edition of ${book.title} lets you enjoy the story in a format that fits your family best.`,
    details: defaultDetails,
    gallery: product.gallery,
  };
};
