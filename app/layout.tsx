import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const clash = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/ClashDisplay-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clash.variable} ${poppins.className}`}>{children}</body>
    </html>
  );
}
