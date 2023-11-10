import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { montserrat } from './ui/fonts'

export const metadata: Metadata = {
  title: "Electrodomesticos Capellari",
  description: "Los mejores electrodomesticos del mercado",
  keywords: ["e-commerce", "appliances"],
  openGraph: {
    title: "Electrodomésticos Capellari",
    description: "Un viaje hacia la transformación",
    type: "website",
  },
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <footer className="bg-gray-200 w-full">
          <div className="container m-auto py-4 flex items-center gap-4">
            <h4 className="text-2xl">Follow us</h4>
            <a>Instagram</a>
            <a>Linkedin</a>
            <a>X</a>
          </div>
        </footer>
      </body>
    </html>
  );
}