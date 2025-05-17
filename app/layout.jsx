import { Montserrat } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: 'FLoC 2026: The 9th Federated Logic Conference',
  description: 'FLoC 2026 brings together several leading international conferences related to mathematical logic and computer science. Join us for conferences and workshops on topics of software/hardware verification and logic for computer science.',
  keywords: 'FLoC, Federated Logic Conference, computer science, logic, verification, software verification, hardware verification, mathematical logic',
  authors: [{ name: 'FLoC 2026 Organizing Committee' }],
  openGraph: {
    title: 'FLoC 2026: The 9th Federated Logic Conference',
    description: 'Join the 9th Federated Logic Conference, bringing together leading international conferences on mathematical logic and computer science.',
    url: 'https://floc2026.org',
    siteName: 'FLoC 2026',
    images: [
      {
        url: '/floc-logo.png',
        width: 1200,
        height: 630,
        alt: 'FLoC 2026 Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLoC 2026: The 9th Federated Logic Conference',
    description: 'Join the 9th Federated Logic Conference, bringing together leading international conferences on mathematical logic and computer science.',
    images: ['/floc-logo.png'],
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
  },
  alternates: {
    canonical: 'https://floc2026.org',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 