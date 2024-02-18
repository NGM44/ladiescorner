import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation/page";
import Footer from "./home/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ladies Corner",
  description: "one stop solution for all ladies",
};

const url = [
  "cart",
  "checkout",
  "front",
  "invoice",
  "navigaton",
  "notFound",
  "orderhistory",
  "ordersummary",
  "productfilter",
  "productgrid",
  "productlist",
  "productoverview",
  "specialproduct",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}

        <Footer />
      </body>
    </html>
  );
}
