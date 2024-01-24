import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "Ambank KYC",
  description: "Ambank KYC",
};

const lato = Lato({
  weight: ["400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
