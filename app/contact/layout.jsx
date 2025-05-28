export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the FLoC 2026 team. Contact us for any inquiries about the conference, registration, or general information.',
  keywords: ['FLoC 2026', 'contact', 'conference contact', 'logic conference', 'computer science conference', 'academic conference contact', 'Lisbon conference'],
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
    title: 'Contact FLoC 2026',
    description: 'Get in touch with the FLoC 2026 team. Contact us for any inquiries about the conference, registration, or general information.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FLoC 2026',
    images: [
      {
        url: '/images/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact FLoC 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact FLoC 2026',
    description: 'Get in touch with the FLoC 2026 team. Contact us for any inquiries about the conference, registration, or general information.',
    images: ['/images/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://floc2026.org/contact',
  },
};

export default function ContactLayout({ children }) {
  return children;
} 