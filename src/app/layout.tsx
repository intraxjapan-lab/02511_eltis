import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Gnavi } from "@/components/Gnavi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELTiS｜アユサ高校交換留学",
  description:
    "アメリカ高校留学に必要なELTiS試験について、対策、受験申込、費用までをまとめたアユサ日本事務局のご案内ページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-zinc-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Gnavi />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
