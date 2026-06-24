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
        "This is a 4-color, hardcover, printed edition of A Musical Surprise. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: defaultDetails,
      gallery: getProductGallery("Hardcover Books"),
    },
    "video-books": {
      description:
        "This video book edition of A Musical Surprise shares the joyful musical adventure in a lively visual format families can watch together.",
      details: defaultDetails,
      gallery: getProductGallery("Video Books"),
    },
    ebooks: {
      description:
        "This ebook edition of A Musical Surprise provides instant digital access to the story and its music-inspired lessons on your preferred device.",
      details: defaultDetails,
      gallery: getProductGallery("Ebooks"),
    },
    "audio-books": {
      description:
        "This audio book edition of A Musical Surprise lets listeners enjoy the sounds, rhythm, and imagination of the story through engaging narration.",
      details: defaultDetails,
      gallery: getProductGallery("Audio Books"),
    },
  },
  "delicious-treats": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed edition of Delicious Treats. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: defaultDetails,
      gallery: getProductGallery("Hardcover Books"),
    },
    "video-books": {
      description:
        "This video book edition of Delicious Treats turns the colorful story into an easy-to-follow visual experience about self-control and balance.",
      details: defaultDetails,
      gallery: getProductGallery("Video Books"),
    },
    ebooks: {
      description:
        "This ebook edition of Delicious Treats gives you instant digital access to the story and its message about making thoughtful choices.",
      details: defaultDetails,
      gallery: getProductGallery("Ebooks"),
    },
    "audio-books": {
      description:
        "This audio book edition of Delicious Treats lets children listen along to the story's playful lesson about temptation and moderation.",
      details: defaultDetails,
      gallery: getProductGallery("Audio Books"),
    },
  },
  "thrill-of-exercise": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed edition of Thrill of Exercise. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: defaultDetails,
      gallery: getProductGallery("Hardcover Books"),
    },
    "video-books": {
      description:
        "This video book edition of Thrill of Exercise presents the energetic story in motion, helping children connect with its healthy lifestyle message.",
      details: defaultDetails,
      gallery: getProductGallery("Video Books"),
    },
    ebooks: {
      description:
        "This ebook edition of Thrill of Exercise provides instant digital access to the story's motivating lesson about movement and well-being.",
      details: defaultDetails,
      gallery: getProductGallery("Ebooks"),
    },
    "audio-books": {
      description:
        "This audio book edition of Thrill of Exercise makes it easy to enjoy the story's upbeat message through flexible on-the-go listening.",
      details: defaultDetails,
      gallery: getProductGallery("Audio Books"),
    },
  },
  "power-of-thought": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed edition of Power of Thought. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: defaultDetails,
      gallery: getProductGallery("Hardcover Books"),
    },
    "video-books": {
      description:
        "This video book edition of Power of Thought brings the uplifting message of confidence and inner strength to life with visual storytelling.",
      details: defaultDetails,
      gallery: getProductGallery("Video Books"),
    },
    ebooks: {
      description:
        "This ebook edition of Power of Thought gives you instant digital access to the story's encouraging lesson about belief and confidence.",
      details: defaultDetails,
      gallery: getProductGallery("Ebooks"),
    },
    "audio-books": {
      description:
        "This audio book edition of Power of Thought lets listeners enjoy the story's message about self-trust through engaging narration.",
      details: defaultDetails,
      gallery: getProductGallery("Audio Books"),
    },
  },
  "dreams-come-true": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed edition of Dreams Come True. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: defaultDetails,
      gallery: getProductGallery("Hardcover Books"),
    },
    "video-books": {
      description:
        "This video book edition of Dreams Come True helps children experience the story's imaginative journey in a bright and memorable visual format.",
      details: defaultDetails,
      gallery: getProductGallery("Video Books"),
    },
    ebooks: {
      description:
        "This ebook edition of Dreams Come True gives you instant digital access to a story centered on discovery, growth, and inspiration.",
      details: defaultDetails,
      gallery: getProductGallery("Ebooks"),
    },
    "audio-books": {
      description:
        "This audio book edition of Dreams Come True lets families listen to the adventure and its hopeful message wherever they go.",
      details: defaultDetails,
      gallery: getProductGallery("Audio Books"),
    },
  },
  "creative-discovery": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed edition of Creative Discovery. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: defaultDetails,
      gallery: getProductGallery("Hardcover Books"),
    },
    "video-books": {
      description:
        "This video book edition of Creative Discovery showcases the artistic adventure in a vivid visual format that encourages imagination.",
      details: defaultDetails,
      gallery: getProductGallery("Video Books"),
    },
    ebooks: {
      description:
        "This ebook edition of Creative Discovery gives you instant digital access to the story's creative and confidence-building lesson.",
      details: defaultDetails,
      gallery: getProductGallery("Ebooks"),
    },
    "audio-books": {
      description:
        "This audio book edition of Creative Discovery lets listeners enjoy the artistic journey and its message through expressive narration.",
      details: defaultDetails,
      gallery: getProductGallery("Audio Books"),
    },
  },
  "love-and-be-loved": {
    "hardcover-books": {
      description:
        "This is a 4-color, hardcover, printed edition of Love & Be Loved. Customers will receive the book via USPS or UPS ground service after the product is purchased.",
      details: defaultDetails,
      gallery: getProductGallery("Hardcover Books"),
    },
    "video-books": {
      description:
        "This video book edition of Love & Be Loved presents the heartfelt story in a visual format that emphasizes connection, care, and belonging.",
      details: defaultDetails,
      gallery: getProductGallery("Video Books"),
    },
    ebooks: {
      description:
        "This ebook edition of Love & Be Loved gives you instant digital access to the story's warm message about love, companionship, and family time.",
      details: defaultDetails,
      gallery: getProductGallery("Ebooks"),
    },
    "audio-books": {
      description:
        "This audio book edition of Love & Be Loved lets listeners enjoy the series message of love and togetherness through flexible audio storytelling.",
      details: defaultDetails,
      gallery: getProductGallery("Audio Books"),
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
