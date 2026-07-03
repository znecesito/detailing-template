import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import client from "@/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${client.businessName} — ${client.tagline}`,
    template: `%s | ${client.businessName}`,
  },
  description: `${client.hero.subheadline} Serving the ${client.serviceArea}.`,
  applicationName: client.businessName,
  openGraph: {
    title: `${client.businessName} — ${client.tagline}`,
    description: `${client.hero.subheadline} Serving the ${client.serviceArea}.`,
    siteName: client.businessName,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      {client.ga4MeasurementId && !client.ga4MeasurementId.includes('XXXXXXXXXX') && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${client.ga4MeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${client.ga4MeasurementId}');
            `}
          </Script>
        </>
      )}
    </html>
  );
}
