import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const displayFont = Fraunces({
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ChuckPerformance",
    template: "%s | ChuckPerformance",
  },
  description: "Portfolio and blog.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <svg width="0" height="0" aria-hidden className="absolute">
          <filter id="photo-duotone" colorInterpolationFilters="sRGB">
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.1294 0.9490" />
              <feFuncG type="table" tableValues="0.1137 0.9294" />
              <feFuncB type="table" tableValues="0.0941 0.8941" />
            </feComponentTransfer>
          </filter>
        </svg>
        <NavBar />
        <main className="w-full flex-1 px-6 py-16 sm:px-12 lg:px-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
