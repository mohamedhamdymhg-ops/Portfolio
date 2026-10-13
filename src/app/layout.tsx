import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mohamed-hamdy-portfolio.placeholder.domain";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Mohamed Hamdy Sayed Gouda — Digital Marketer Portfolio",
  description:
    "Portfolio of Mohamed Hamdy Sayed Gouda, a digital marketer in Giza, Egypt specializing in paid advertising, social media strategy, and content creation.",
  keywords: [
    "Mohamed Hamdy Sayed Gouda",
    "Digital Marketer",
    "Marketing Portfolio",
    "Paid Advertising",
    "Meta Ads",
    "Google Ads",
    "Content Strategy",
    "Social Media Design",
    "DEPI",
    "Egypt Marketer",
  ],
  authors: [{ name: "Mohamed Hamdy Sayed Gouda" }],
  creator: "Mohamed Hamdy Sayed Gouda",
  publisher: "Mohamed Hamdy Sayed Gouda",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mohamed Hamdy Sayed Gouda — Digital Marketer Portfolio",
    description:
      "Digital Marketer specializing in social media, paid advertising, and content creation based in Giza, Egypt.",
    url: baseUrl,
    siteName: "Mohamed Hamdy Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/mohamed-hamdy.jpeg",
        width: 800,
        height: 1000,
        alt: "Mohamed Hamdy Sayed Gouda - Digital Marketer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Hamdy Sayed Gouda — Digital Marketer Portfolio",
    description:
      "Digital Marketer specializing in social media, paid advertising, and content creation.",
    images: ["/images/mohamed-hamdy.jpeg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdfd" },
    { media: "(prefers-color-scheme: dark)", color: "#090a0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen flex flex-col bg-brand-lightBg dark:bg-brand-darkBg text-neutral-900 dark:text-neutral-100 selection:bg-amber-500 selection:text-black">
        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
