import "./globals.css";
import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import Footer from "@/app/ui/Footer";
import { AuthProvider } from "@/app/context/AuthContext";
import { CartProvider } from "@/app/context/CartContext";

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
        <AuthProvider>
          <CartProvider>
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
