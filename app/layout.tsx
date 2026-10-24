import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import Cyber3DScene from "@/components/features/Cyber3DScene";
import SoundToggle from "@/components/features/SoundToggle";

// Modern tech heading font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

// Body font — gọn, đọc tốt
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.displayName} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.displayName}`,
  },
  description: `Portfolio cá nhân của ${siteConfig.displayName} — ${siteConfig.title}. Chuyên xây dựng các ứng dụng web hiện đại với Next.js, React và TypeScript.`,
  keywords: ["portfolio", "software engineer", "frontend developer", "nextjs", "react", "typescript", "web development", "nguyen duc thuy"],
  authors: [{ name: siteConfig.displayName, url: siteConfig.github }],
  creator: siteConfig.displayName,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    title: `${siteConfig.displayName} — ${siteConfig.title}`,
    description: `${siteConfig.bio} | ${siteConfig.title}`,
    siteName: siteConfig.displayName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.displayName} — ${siteConfig.title}`,
    description: siteConfig.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1519",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${jakarta.variable} ${inter.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        style={
          {
            fontFamily: "var(--font-body), system-ui, sans-serif",
          } as React.CSSProperties
        }
      >
        <Cyber3DScene />

        {children}

        <SoundToggle />
      </body>
    </html>
  );
}
