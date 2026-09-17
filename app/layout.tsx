import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emotional Health for Longevity",
  description: "Explore four pillars of emotional health, practise everyday exercises and track what helps.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased">{children}</body>
    </html>
  );
}
