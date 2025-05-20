import { Metadata } from 'next'

export const metadata = {
    title: 'FLoC 2026 - Venues',
    description: 'Information about FLoC 2026 venues, including conference locations, dining facilities, and special events. Find details about lecture halls, workshop venues, and social events.',
    keywords: 'FLoC 2026, venues, conference locations, lecture halls, dining facilities, workshop venues, social events, campus map',
    openGraph: {
        title: 'FLoC 2026 - Venues',
        description: 'Information about FLoC 2026 venues, including conference locations, dining facilities, and special events.',
        type: 'website',
        locale: 'en_US',
        siteName: 'FLoC 2026',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FLoC 2026 - Venues',
        description: 'Information about FLoC 2026 venues and facilities.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function VenueLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            {children}
        </div>
    )
} 