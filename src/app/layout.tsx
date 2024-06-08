import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/organism/Header";

const kufi = Noto_Kufi_Arabic ({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "كارتى | كرت العمل الخاص بك",
  description: "احصل على كرت عمل رقمى خاص بك, وتواصل مع عملائك بشكل احترافى",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kufi.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
