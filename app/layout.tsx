import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Footnote from "@/components/Footnote";
import { SITE_URL } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = localFont({
  src: [
    { path: "../public/fonts/Poppins/Poppins-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../public/fonts/Poppins/Poppins-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../public/fonts/Poppins/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../public/fonts/Poppins/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/Poppins/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../public/fonts/Poppins/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../public/fonts/Poppins/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../public/fonts/Poppins/Poppins-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "../public/fonts/Poppins/Poppins-Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-poppins-src",
  display: "swap",
});

const libra = localFont({
  src: "../public/fonts/libra/FontsFree-Net-libra-mn.ttf",
  variable: "--font-libra-src",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Happy Hoppers Books | The Happy Hoppers Adventures",
    template: "%s | Happy Hoppers Books",
  },
  description: "The Happy Hoppers Books AKA The Happy Hoppers Adventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${libra.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          {children}
          <Footnote />
        </CartProvider>
      </body>
    </html>
  );
}
