import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";

export const metadata = {
  title: 'Home',
  description: 'Welcome to FLoC 2026 - The Federation of Logic Conference. Join us in Lisbon, Portugal for a premier event in logic and computer science.',
  keywords: ['FLoC 2026', 'Federation of Logic Conference', 'logic conference', 'computer science conference', 'Lisbon conference', 'academic conference', 'logic and computer science', 'research conference'],
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
    title: 'FLoC 2026 - Home',
    description: 'Welcome to FLoC 2026 - The Federation of Logic Conference. Join us in Lisbon, Portugal for a premier event in logic and computer science.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FLoC 2026',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'FLoC 2026 Conference',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLoC 2026 - Home',
    description: 'Welcome to FLoC 2026 - The Federation of Logic Conference. Join us in Lisbon, Portugal for a premier event in logic and computer science.',
    images: ['/images/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://floc2026.org',
  },
};

export default function Home() {
  return (
    <main>
      <Hero/>
      <Events/>
      <Speakers />
    </main>
  );
}
