import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Program - FLoC 2026',
    description: 'View the program schedule and details for FLoC 2026.',
    keywords: 'FLoC 2026, program schedule, conferences, workshops, logic programming, computer science, automated reasoning, verification',
    openGraph: {
        title: 'FLoC 2026 - Program Overview',
        description: 'Explore the comprehensive schedule of conferences and workshops for FLoC 2026, featuring Week 1 and Week 2 programs with leading conferences in logic, verification, and automated reasoning.',
        type: 'website',
        locale: 'en_US',
        siteName: 'FLoC 2026',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FLoC 2026 - Program Overview',
        description: 'Explore the comprehensive schedule of conferences and workshops for FLoC 2026.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function ProgramLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            {children}
        </main>
    )
} 