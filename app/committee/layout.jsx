export const metadata = {
  title: 'Committees | FLoC 2026',
  description: 'Meet the organizing committees of FLoC 2026, including conference chairs, program chairs, and steering committee members.',
  keywords: ['FLoC 2026', 'committees', 'conference chairs', 'program chairs', 'steering committee', 'logic conference', 'computer science conference', 'Lisbon conference'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Committees | FLoC 2026',
    description: 'Meet the organizing committees of FLoC 2026, including conference chairs, program chairs, and steering committee members.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FLoC 2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Committees | FLoC 2026',
    description: 'Meet the organizing committees of FLoC 2026, including conference chairs, program chairs, and steering committee members.',
  },
  alternates: {
    canonical: 'https://floc2026.org/committees',
  },
};

export default function CommitteesLayout({ children }) {
  return children;
} 