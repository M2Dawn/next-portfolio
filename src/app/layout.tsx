import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import { Syne } from "next/font/google";
import { Sora } from "next/font/google";
import { cn } from "@/lib/utils";

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['300', '400', '500', '600', '700', '800'] });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hossam-aec.vercel.app'),
  title: 'Hossam Sabry | BIM Automation Engineer',
  description: 'Portfolio of Hossam Sabry, a BIM Automation Engineer specializing in Revit API, Dynamo, and Construction Automation.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/favicon.svg', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: 'Hossam Sabry | BIM Automation Engineer',
    description: 'Portfolio of Hossam Sabry, a BIM Automation Engineer specializing in Revit API, Dynamo, and Construction Automation.',
    url: 'https://hossam-aec.vercel.app',
    siteName: 'Hossam Sabry Portfolio',
    images: [
      {
        url: '/images/social-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Hossam Sabry - BIM Automation Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hossam Sabry | BIM Automation Engineer',
    description: 'Portfolio of Hossam Sabry, a BIM Automation Engineer specializing in Revit API, Dynamo, and Construction Automation.',
    images: ['/images/social-preview.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", sora.variable, syne.variable)}>
      <body>
        <div className="bg-noise"></div>
        {children}
        
        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId="G-MWW9X0CJQF" />
      </body>
    </html>
  );
}
