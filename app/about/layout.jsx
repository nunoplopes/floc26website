export const metadata = {
  title: 'About',
  description: 'Learn about FLoC 2026 - The Federation of Logic Conference. Discover our mission, history, and the intersection of logic and computer science.',
  keywords: ['FLoC 2026', 'about', 'logic conference', 'computer science conference', 'federation of logic', 'academic conference', 'Lisbon conference', 'logic and computer science'],
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
  openGraph: {
    title: 'About FLoC 2026',
    description: 'Learn about FLoC 2026 - The Federation of Logic Conference. Discover our mission, history, and the intersection of logic and computer science.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FLoC 2026',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About FLoC 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FLoC 2026',
    description: 'Learn about FLoC 2026 - The Federation of Logic Conference. Discover our mission, history, and the intersection of logic and computer science.',
    images: ['/images/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://floc2026.org/about',
  },
};

export default function AboutLayout({ children }) {
  return children;
} 