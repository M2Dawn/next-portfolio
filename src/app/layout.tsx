import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import { Figtree, Bricolage_Grotesque } from "next/font/google";
import { cn } from "@/lib/utils";

const bodyFont = Figtree({ subsets: ['latin'], variable: '--font-figtree' });
const headingFont = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage', weight: ['400', '500', '600', '700', '800'] });

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
    <html lang="en" className={cn(bodyFont.variable, headingFont.variable)}>
      <body className={bodyFont.className}>
        <div className="bg-noise"></div>
        {children}
        
        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId="G-MWW9X0CJQF" />
      </body>
    </html>
  );
}
