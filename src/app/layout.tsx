import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motonize.com"),
  title: {
    default: "Motonize — Where motto meets method.",
    template: "%s · Motonize",
  },
  description:
    "Motonize is a mobile games studio crafting strategic experiences with intent and rigor. Our first title, Lex Conquer, launches in 2026.",
  openGraph: {
    title: "Motonize — Where motto meets method.",
    description:
      "A mobile games studio crafting strategic experiences with intent and rigor.",
    url: "https://motonize.com",
    siteName: "Motonize",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
