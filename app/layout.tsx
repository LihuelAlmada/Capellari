import "./globals.css";
import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import { CartProvider } from "@/app/store/CartContext";
import { AuthProvider } from "@/app/store/AuthContext";

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
            {children}
            <footer className="bg-gray-200 w-full flex flex-row justify-between">
              <div className="container m-auto py-4 flex items-center gap-4">
                <h4 className="text-2xl">Follow us</h4>
                <a>Instagram</a>
                <a>Linkedin</a>
                <a>X</a>
              </div>
              <p className="p-4 flex items-end">by Lihuel Almada</p>
            </footer>
      </body>
    </html>
  );
}
