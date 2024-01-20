import type { Metadata } from "next";
import { Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "Ambank KYC",
  description: "Ambank KYC",
};

const lato = Lato({
  weight: ["700"],
  variable: '--font-lato',
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
