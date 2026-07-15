import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GoCreative | We Build Creative Systems That Drive Profitable Growth",
  description:
    "GoCreative main colors are vibrant, modern, and tech-inspired, reflecting creativity, innovation, and trust. We build complete data-driven creative and paid media systems that scale ad spend profitably.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F3F0FF] text-[#0A1F44] selection:bg-[#FF1493] selection:text-white">
        {children}
      </body>
    </html>
  );
}

