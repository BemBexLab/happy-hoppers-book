export type BookProduct = {
  label: string;
  price: string;
  original: string;
  src: string;
};

export type Book = {
  slug: string;
  title: string;
  bookLabel: string;
  listingImageSrc: string;
  detailImageSrc: string;
  description: string;
  products: BookProduct[];
};

const defaultProducts: BookProduct[] = [
  {
    label: "Hardcover Books",
    price: "$180.00",
    original: "$200.00",
    src: "/Rectangle 82.png",
  },
  {
    label: "Video Books",
    price: "$144.00",
    original: "$160.00",
    src: "/Rectangle 82.png",
  },
  {
    label: "Ebooks",
    price: "$108.00",
    original: "$120.00",
    src: "/Rectangle 82.png",
  },
  {
    label: "Audio Books",
    price: "$72.00",
    original: "$80.00",
    src: "/Rectangle 82.png",
  },
];

export const books: Book[] = [
  {
    slug: "curious-visitors",
    title: "Curious Visitors",
    bookLabel: "Book 1",
    listingImageSrc: "/Rectangle 71.png",
    detailImageSrc: "/Rectangle 89.png",
    description:
      "Looking for a new adventure? Introducing a series that entertains and effortlessly influences children while providing valuable life lessons. In Book 1, the happy hoppers encounter the arrival of 2 friendly creatures. Aren't you curious? Each story flows into the next revealing layers of impactful, teachable moments. (Printed, E-book & Video-book)",
    products: defaultProducts,
  },
  {
    slug: "a-musical-surprise",
    title: "A Musical Surprise",
    bookLabel: "Book 2",
    listingImageSrc: "/Rectangle 72.png",
    detailImageSrc: "/Rectangle 89 (2).png",
    description:
      "The 2 creatures share a clue, intriguing way to introduce the 8 hoppers to the sounds of music. They prompt them, their goal is to inspire and motivate them into wanting to learn to play an instrument. This book may awaken your child's mind and desire to play a musical instrument. Wouldn't that be incredibly motivating? (Printed, E-book & Video-book)",
    products: [
      {
        label: "Hardcover Books",
        price: "$180.00",
        original: "$200.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Video Books",
        price: "$144.00",
        original: "$160.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Ebooks",
        price: "$108.00",
        original: "$120.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Audio Books",
        price: "$72.00",
        original: "$80.00",
        src: "/Rectangle 82.png",
      },
    ],
  },
  {
    slug: "delicious-treats",
    title: "Delicious Treats",
    bookLabel: "Book 3",
    listingImageSrc: "/Rectangle 73.png",
    detailImageSrc: "/Rectangle 89 (4).png",
    description:
      "The 2 friendly creatures surprise the 8 happy hoppers by sharing beautiful displays of delicious treats. This story will help your child realize the benefits of self-control, and understand the importance of 'having enough.' The creatures, hoppers, want children to be less indulgent, and to exercise the power to resist temptation. (Printed, E-book & Video-book)",
    products: [
      {
        label: "Hardcover Books",
        price: "$180.00",
        original: "$200.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Video Books",
        price: "$144.00",
        original: "$160.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Ebooks",
        price: "$108.00",
        original: "$120.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Audio Books",
        price: "$72.00",
        original: "$80.00",
        src: "/Rectangle 82.png",
      },
    ],
  },
  {
    slug: "thrill-of-exercise",
    title: "Thrill of Exercise",
    bookLabel: "Book 4",
    listingImageSrc: "/Rectangle 74.png",
    detailImageSrc: "/Rectangle 89 (6).png",
    description:
      "The 2 friendly creatures encourage the 8 happy hoppers to discover the joy and thrill of exercise. They teach them to achieve a healthy body and mind by engaging not only physical self-discipline. This story will help your child realize the importance of exerting energy and stay healthy, to strengthen them as they grow and develop. (Printed, E-book & Video-book)",
    products: [
      {
        label: "Hardcover Books",
        price: "$180.00",
        original: "$200.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Video Books",
        price: "$144.00",
        original: "$160.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Ebooks",
        price: "$108.00",
        original: "$120.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Audio Books",
        price: "$72.00",
        original: "$80.00",
        src: "/Rectangle 82.png",
      },
    ],
  },
  {
    slug: "power-of-thought",
    title: "Power of Thought",
    bookLabel: "Book 5",
    listingImageSrc: "/Rectangle 75.png",
    detailImageSrc: "/Rectangle 89 (1).png",
    description:
      "Continues with the 8 happy hoppers missing the 2 friendly creatures. This book teaches the importance of beliefs and confidence, to learn how to trust one's inner strength and to overcome self-doubt. The hoppers ultimately reach their goals, trust the safety of their bubbles, and enjoy the miracle of flight. (Printed, E-book & Video-book)",
    products: [
      {
        label: "Hardcover Books",
        price: "$180.00",
        original: "$200.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Video Books",
        price: "$144.00",
        original: "$160.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Ebooks",
        price: "$108.00",
        original: "$120.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Audio Books",
        price: "$72.00",
        original: "$80.00",
        src: "/Rectangle 82.png",
      },
    ],
  },
  {
    slug: "dreams-come-true",
    title: "Dreams Come True",
    bookLabel: "Book 6",
    listingImageSrc: "/Rectangle 76.png",
    detailImageSrc: "/Rectangle 89 (3).png",
    description:
      "Reveals how the 2 creatures discovered the 8 happy hoppers, and the three eventually 8 lovable creatures whose colorful and creative rainbow. Throughout this adventure series, the creatures, hoppers, parents, enjoy exercising and teaching life lessons to build faith and self-worth, rooted in determination. (Printed, E-book & Video-book)",
    products: [
      {
        label: "Hardcover Books",
        price: "$180.00",
        original: "$200.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Video Books",
        price: "$144.00",
        original: "$160.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Ebooks",
        price: "$108.00",
        original: "$120.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Audio Books",
        price: "$72.00",
        original: "$80.00",
        src: "/Rectangle 82.png",
      },
    ],
  },
  {
    slug: "creative-discovery",
    title: "Creative Discovery",
    bookLabel: "Book 7",
    listingImageSrc: "/Rectangle 77.png",
    detailImageSrc: "/Rectangle 89 (5).png",
    description:
      "The 8 lovable creatures give the 8 happy hoppers the opportunity to experience the joys of becoming an artist. This is a powerful introduction into the world of doing creative, it will help your child attain levels of confidence while experiencing the endless fun and blessings of becoming an original thinker. (Printed, E-book & Video-book)",
    products: [
      {
        label: "Hardcover Books",
        price: "$180.00",
        original: "$200.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Video Books",
        price: "$144.00",
        original: "$160.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Ebooks",
        price: "$108.00",
        original: "$120.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Audio Books",
        price: "$72.00",
        original: "$80.00",
        src: "/Rectangle 82.png",
      },
    ],
  },
  {
    slug: "love-and-be-loved",
    title: "Love & Be Loved",
    bookLabel: "Book 8",
    listingImageSrc: "/Rectangle 78.png",
    detailImageSrc: "/Rectangle 89 (7).png",
    description:
      "The adventure series continues with the 8 happy hoppers missing the 8 friendly creatures. Upon the arrival, they teach them the meaning of life on earth. Love & Be Loved! The hoppers learn that they will never be alone, and they will always continue to be where there is parent time! (Printed, E-book & Video-book)",
    products: [
      {
        label: "Hardcover Books",
        price: "$180.00",
        original: "$200.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Video Books",
        price: "$144.00",
        original: "$160.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Ebooks",
        price: "$108.00",
        original: "$120.00",
        src: "/Rectangle 82.png",
      },
      {
        label: "Audio Books",
        price: "$72.00",
        original: "$80.00",
        src: "/Rectangle 82.png",
      },
    ],
  },
];

export const getBookBySlug = (slug: string) =>
  books.find((book) => book.slug === slug);
