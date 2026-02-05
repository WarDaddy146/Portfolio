import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: {
    default: "Ali Akbar | AI/ML Engineer",
    template: "%s | Ali Akbar",
  },
  description:
    "AI/ML Engineer specializing in quantum computing, machine learning, and web development.",
  keywords: ["AI Engineer", "ML Engineer", "Python Developer", "Qiskit", "Quantum Computing", "Ali Akbar"],
  authors: [{ name: "Ali Akbar" }],
  creator: "Ali Akbar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aliakbar146.com",
    title: "Ali Akbar | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in quantum computing, machine learning, and web development.",
    siteName: "Ali Akbar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Akbar | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in quantum computing, machine learning, and web development.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'
