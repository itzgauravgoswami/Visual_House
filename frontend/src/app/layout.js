import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FloatingCTA from "@/components/FloatingCTA";
import IntroAnimation from "@/components/IntroAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});


export const metadata = {
  title: "Visual House — Creative Digital & Marketing Agency",
  description:
    "Visual House creates websites, videos, branding, thumbnails, and digital experiences that help ambitious brands stand out and grow.",
  keywords: [
    "creative agency",
    "digital marketing",
    "website design",
    "video production",
    "thumbnail design",
    "branding",
    "motion graphics",
    "UI UX design",
    "Visual House",
  ],
  authors: [{ name: "Visual House Creative Team" }],
  openGraph: {
    title: "Visual House — Creative Digital & Marketing Agency",
    description:
      "We build digital experiences that make brands stand out. Websites, videos, branding, thumbnails & motion graphics under one roof.",
    url: "https://visualhouse.agency",
    siteName: "Visual House",
    images: [
      {
        url: "/logo/logo.png",
        width: 800,
        height: 600,
        alt: "Visual House Agency Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual House — Creative Digital & Marketing Agency",
    description:
      "We build digital experiences that make brands stand out. Websites, videos, branding, thumbnails & motion graphics under one roof.",
    images: ["/logo/logo.png"],
  },
  icons: {
    icon: "/logo/logo.png",
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#000000] text-[#ffffff] selection:bg-[#c5a059] selection:text-black relative">
        <IntroAnimation />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 w-full relative z-10">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}

