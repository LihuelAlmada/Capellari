import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Electrodomesticos Capellari',
  description: 'Los mejores electrodomesticos del mercado',
  keywords: ['e-commerce', 'appliances'],
  openGraph: {
    title: 'Electrodomésticos Capellari',
    description: 'Un viaje hacia la transformación',
    type: 'website',
  },
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
  themeColor: "#000000"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}