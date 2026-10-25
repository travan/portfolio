import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const deploymentUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (deploymentUrl ? `https://${deploymentUrl}` : "http://localhost:3000");

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tra Nguyen | Senior Software Engineer",
  description:
    "Backend-focused fullstack engineer with 7+ years building reliable systems, web applications, and developer tools. Explore my work and experience.",
  openGraph: {
    title: "Tra Nguyen | Senior Software Engineer",
    description:
      "Building reliable systems and thoughtful web experiences. Backend architecture, fullstack applications, and developer tooling.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tra Nguyen | Senior Software Engineer",
    description: "Building reliable systems and thoughtful web experiences.",
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
        id="top"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
