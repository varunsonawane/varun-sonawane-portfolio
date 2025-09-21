import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { CursorEffect } from "@/components/cursor-effect"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Varun Sonawane",
  description:
    "Master's student at Indiana University Bloomington, passionate about Data Engineering, Cloud Computing, and Machine Learning. Explore my projects, experience, and technical expertise.",
  keywords: [
    "Data Engineer",
    "Computer Science",
    "Cloud Computing",
    "Machine Learning",
    "AWS",
    "Python",
    "SQL",
    "Apache Airflow",
    "ETL",
    "Big Data",
  ],
  authors: [{ name: "Varun Sonawane", url: "https://linkedin.com/in/varun-sonawane" }],
  creator: "Varun Sonawane",
  icons: {
    icon: [
      { url: "/images/VS_logo.png", sizes: "64x64", type: "image/png" },
      { url: "/images/VS_logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/VS_logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/VS_logo.png",
    apple: "/images/VS_logo.png",
  },
  openGraph: {
    title: "Varun Sonawane",
    description:
      "Master's student at Indiana University Bloomington, passionate about Data Engineering, Cloud Computing, and Machine Learning.",
    url: "https://varun-sonawane.vercel.app",
    siteName: "Varun Sonawane Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/varun-portrait.png",
        width: 400,
        height: 400,
        alt: "Varun Sonawane - Data Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Sonawane",
    description:
      "Master's student at Indiana University Bloomington, passionate about Data Engineering, Cloud Computing, and Machine Learning.",
    images: ["/images/varun-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/VS_logo.png" />
        <link rel="apple-touch-icon" href="/images/VS_logo.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`} style={{ cursor: 'none' }}>
        <CursorEffect />
        <Suspense fallback={null}>
          {children}
          <Toaster />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
