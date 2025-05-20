'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Info } from 'lucide-react';
import Image from 'next/image';

const SponsorshipTier = ({ title, cost, color, benefits, isPopular }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${isPopular ? 'ring-2 ring-blue-500' : ''}`}
    >
        {isPopular && (
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                Most Popular
            </div>
        )}
        <div className={`p-6 ${color} text-white`}>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <div className="text-3xl font-bold mb-2">{cost}</div>
        </div>
        <div className="p-6">
            <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                        {benefit.included ? (
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                            <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className="text-gray-600">
                            {benefit.text}
                            {benefit.value && <span className="font-medium text-blue-600"> ({benefit.value})</span>}
                        </span>
                    </li>
                ))}
            </ul>
            <button className={`mt-6 w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                isPopular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}>
                Become a Sponsor
            </button>
        </div>
    </motion.div>
);

const InfoBox = ({ title, description }) => (
    <div className="bg-blue-50 rounded-lg p-4 flex gap-3">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
            <h4 className="font-medium text-blue-900 mb-1">{title}</h4>
            <p className="text-blue-700 text-sm">{description}</p>
        </div>
    </div>
);

const SponsorCard = ({ name, logo, tier, website }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
        <a href={website} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative h-48 w-full bg-gray-50">
                <Image
                    src={logo}
                    alt={name}
                    fill
                    className="object-contain p-4"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    tier === 'Diamond' ? 'bg-teal-100 text-teal-800' :
                    tier === 'Platinum' ? 'bg-gray-100 text-gray-800' :
                    tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                    tier === 'Silver' ? 'bg-gray-100 text-gray-800' :
                    'bg-amber-100 text-amber-800'
                }`}>
                    {tier} Sponsor
                </span>
            </div>
        </a>
    </motion.div>
);

const SponsorsSection = () => {
    const sponsors = [
        {
            name: "Technion",
            logo: "/sponsors/technion.png",
            tier: "Diamond",
            website: "https://www.technion.ac.il"
        },
        {
            name: "Google",
            logo: "/sponsors/google.png",
            tier: "Platinum",
            website: "https://www.google.com"
        },
        {
            name: "Microsoft",
            logo: "/sponsors/microsoft.png",
            tier: "Gold",
            website: "https://www.microsoft.com"
        },
        // Add more sponsors as they are confirmed
    ];

    return (
        <div className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We are grateful to our sponsors for their support in making FLoC 2026 possible.
                    Their contributions help us create an exceptional conference experience.
                </p>
            </div>

            {/* Diamond Sponsors */}
            {sponsors.filter(s => s.tier === 'Diamond').length > 0 && (
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Diamond Sponsors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sponsors.filter(s => s.tier === 'Diamond').map((sponsor, index) => (
                            <SponsorCard key={index} {...sponsor} />
                        ))}
                    </div>
                </div>
            )}

            {/* Platinum Sponsors */}
            {sponsors.filter(s => s.tier === 'Platinum').length > 0 && (
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Platinum Sponsors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sponsors.filter(s => s.tier === 'Platinum').map((sponsor, index) => (
                            <SponsorCard key={index} {...sponsor} />
                        ))}
                    </div>
                </div>
            )}

            {/* Gold Sponsors */}
            {sponsors.filter(s => s.tier === 'Gold').length > 0 && (
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Gold Sponsors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sponsors.filter(s => s.tier === 'Gold').map((sponsor, index) => (
                            <SponsorCard key={index} {...sponsor} />
                        ))}
                    </div>
                </div>
            )}

            {/* Silver & Bronze Sponsors */}
            {(sponsors.filter(s => s.tier === 'Silver' || s.tier === 'Bronze').length > 0) && (
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Silver & Bronze Sponsors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {sponsors.filter(s => s.tier === 'Silver' || s.tier === 'Bronze').map((sponsor, index) => (
                            <SponsorCard key={index} {...sponsor} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default function SponsorsPage() {
    const sponsorshipTiers = [
        {
            title: "Bronze",
            cost: "€5K",
            color: "bg-amber-700",
            isPopular: false,
            benefits: [
                { included: true, text: "Logo on the FLoC 2026 website" },
                { included: false, text: "Complementary registration" },
                { included: false, text: "Sponsor Booth" },
                { included: false, text: "Logo on all signage" },
                { included: false, text: "Logo on staff's T-shirts" },
            ]
        },
        {
            title: "Silver",
            cost: "€10K",
            color: "bg-gray-400",
            isPopular: false,
            benefits: [
                { included: true, text: "Logo on the FLoC 2026 website" },
                { included: true, text: "Complementary registration", value: "1" },
                { included: false, text: "Sponsor Booth" },
                { included: false, text: "Logo on all signage" },
                { included: false, text: "Logo on staff's T-shirts" },
            ]
        },
        {
            title: "Gold",
            cost: "€25K",
            color: "bg-yellow-500",
            isPopular: true,
            benefits: [
                { included: true, text: "Logo on the FLoC 2026 website" },
                { included: true, text: "Complementary registration", value: "2" },
                { included: true, text: "Sponsor Booth" },
                { included: true, text: "Logo on all signage" },
                { included: true, text: "Logo on staff's T-shirts" },
                { included: true, text: "Logo on Attendees Lanyard" },
            ]
        },
        {
            title: "Platinum",
            cost: "€50K",
            color: "bg-gray-500",
            isPopular: false,
            benefits: [
                { included: true, text: "Logo on the FLoC 2026 website" },
                { included: true, text: "Complementary registration", value: "5" },
                { included: true, text: "Sponsor Booth" },
                { included: true, text: "Logo on all signage" },
                { included: true, text: "Logo on staff's T-shirts" },
                { included: true, text: "Logo on Attendees Lanyard" },
                { included: true, text: "Logo on keynote recording video" },
            ]
        },
        {
            title: "Diamond",
            cost: "€100K",
            color: "bg-teal-700",
            isPopular: false,
            benefits: [
                { included: true, text: "Logo on the FLoC 2026 website" },
                { included: true, text: "Complementary registration", value: "10" },
                { included: true, text: "Sponsor Booth" },
                { included: true, text: "Logo on all signage" },
                { included: true, text: "Logo on staff's T-shirts" },
                { included: true, text: "Logo on Attendees Lanyard" },
                { included: true, text: "Logo on keynote recording video" },
                { included: true, text: "Naming of 1 dinner/reception" },
                { included: true, text: "Highlight during all keynotes" },
                { included: true, text: "Naming on social hours" },
                { included: true, text: "Opportunity for a brief speech before 2 keynotes" },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Sponsorship Opportunities
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Join us as a sponsor and be part of the premier event in logic and computer science
                    </motion.p>
                </div>

                {/* Current Sponsors Section */}
                <SponsorsSection />

                {/* Info Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <InfoBox
                        title="Why Sponsor FLoC 2026?"
                        description="Gain visibility among leading researchers and practitioners in logic and computer science, while supporting the advancement of these fields."
                    />
                    <InfoBox
                        title="Custom Sponsorship Options"
                        description="Contact us to discuss custom sponsorship packages tailored to your organization's goals and budget."
                    />
                </div>

                {/* Sponsorship Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {sponsorshipTiers.map((tier, index) => (
                        <SponsorshipTier key={index} {...tier} />
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Sponsoring?</h2>
                    <p className="text-gray-600 mb-6">
                        Contact our sponsorship team to discuss how we can work together
                    </p>
                    <a
                        href="mailto:sponsorship@floc2026.org"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}
