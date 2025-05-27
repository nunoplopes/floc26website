'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const getImageUrl = (image) => {
  if (!image?.data?.attributes?.url) return '/placeholder.jpg';
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.data.attributes.url}`;
};

const SponsorLogo = ({ src, alt, tier }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="relative group"
    >
        <div className="relative w-64 h-40 bg-white rounded-lg shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:shadow-xl">
            <Image
                src={src}
                alt={alt}
                width={400}
                height={250}
                className="object-contain max-h-28 w-auto hover:grayscale-0 transition-all duration-300"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tier} Sponsor
        </div>
    </motion.div>
)

const SponsorsSection = ({ sponsors }) => {
    if (!sponsors || sponsors.length === 0) {
        return null;
    }

    // Group sponsors by level
    const groupedSponsors = sponsors.reduce((acc, sponsor) => {
        const level = sponsor.attributes.level.toLowerCase();
        if (!acc[level]) {
            acc[level] = [];
        }
        acc[level].push(sponsor);
        return acc;
    }, {});

    return (
        <section className="py-16 bg-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-blue-50 mb-4">Our Sponsors</h2>
                </motion.div>

                {/* Sponsor Levels */}
                {Object.entries(groupedSponsors).map(([level, levelSponsors]) => (
                    <div key={level} className="mb-16">
                        <h3 className="text-2xl font-bold text-blue-200 mb-12 text-center capitalize">
                            {level} Sponsors
                        </h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {levelSponsors.map((sponsor) => (
                                <SponsorLogo
                                    key={sponsor.id}
                                    src={getImageUrl(sponsor.attributes.logo)}
                                    alt={sponsor.attributes.name}
                                    tier={level}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SponsorsSection