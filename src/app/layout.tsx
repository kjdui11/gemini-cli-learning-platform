import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { generateMetadata as generateSEOMetadata, structuredData, organizationStructuredData } from "@/lib/seo";
import LanguageDetector from '@/components/LanguageDetector';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateSEOMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) - 按照官方要求添加 */}
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-NEQETT0ENG"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-NEQETT0ENG');
              `,
            }}
          />
        </>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <LanguageDetector>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageDetector>
      </body>
    </html>
  );
}
