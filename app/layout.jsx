import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata = {
  metadataBase: new URL('https://floc2026.org'),
  title: {
    default: 'FLoC 2026: The 9th Federated Logic Conference',
    template: '%s | FLoC 2026'
  },
  description: 'FLoC 2026 brings together several leading international conferences related to mathematical logic and computer science.',
  keywords: ['FLoC', 'Federated Logic Conference', 'computer science', 'logic', 'verification'],
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
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 