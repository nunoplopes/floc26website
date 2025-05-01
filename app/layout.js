import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  metadataBase: new URL('https://floc2026.org'),
  title: {
    default: 'FLoC 2026 - Federation of Logic Conference',
    template: '%s | FLoC 2026'
  },
  description: 'The 2026 Federated Logic Conference (FLoC) will be held in Lisbon, Portugal. Join us for a premier event in logic and computer science.',
  keywords: ['FLoC 2026', 'Logic Conference', 'Computer Science', 'Lisbon', 'Portugal', 'Summer School', 'Workshop'],
  authors: [{ name: 'FLoC 2026 Committee' }],
  creator: 'FLoC 2026',
  publisher: 'FLoC 2026',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://floc2026.org',
    siteName: 'FLoC 2026',
    title: 'FLoC 2026 - Federation of Logic Conference',
    description: 'The 2026 Federated Logic Conference (FLoC) will be held in Lisbon, Portugal. Join us for a premier event in logic and computer science.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FLoC 2026 Conference',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLoC 2026 - Federation of Logic Conference',
    description: 'The 2026 Federated Logic Conference (FLoC) will be held in Lisbon, Portugal. Join us for a premier event in logic and computer science.',
    images: ['/og-image.jpg'],
    creator: '@floc2026',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    bing: 'your-bing-verification',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
