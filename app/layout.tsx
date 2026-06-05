import type { Metadata } from "next";
import { Raleway, Fjalla_One } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/constants";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const fjallaOne = Fjalla_One({ weight: "400", subsets: ["latin"], variable: "--font-fjalla" });

export const metadata: Metadata = {
  title: `Tiger365 Pro ID – Ultimate Guide to Online Betting | ${SITE_CONFIG.brand.name}`,
  description: SITE_CONFIG.description,
  keywords: ["Tiger365 Pro ID", "Genuine Betting IDs", "Tiger365 Pro ID registration", "Tiger365 Pro", "Online Betting India", "Cricket Betting ID"],
  openGraph: {
    title: `Tiger365 Pro ID – Ultimate Guide to Online Betting`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.brand.name,
    images: [
      {
        url: "https://genuinebettingids.com/wp-content/uploads/2025/11/Tiger365-Pro-ID-.webp",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brand.name} Official`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${raleway.variable} ${fjallaOne.variable}`}
        style={{
          '--primary': SITE_CONFIG.theme.primary,
          '--primary-hover': SITE_CONFIG.theme.primaryHover,
          '--primary-rgb': SITE_CONFIG.theme.primaryRgb,
          '--background': SITE_CONFIG.theme.background,
          '--secondary': SITE_CONFIG.theme.secondary,
          '--foreground': SITE_CONFIG.theme.foreground,
          '--text-primary': SITE_CONFIG.theme.textPrimary,
          '--text-secondary': SITE_CONFIG.theme.textSecondary,
          '--text-muted': SITE_CONFIG.theme.textMuted,
          '--border': SITE_CONFIG.theme.border,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
