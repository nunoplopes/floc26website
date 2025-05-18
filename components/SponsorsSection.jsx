'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Import sponsor logos
import awsLogo from '@/assets/images/sponsors/aws.png'
import intelLogo from '@/assets/images/sponsors/intel.png'
import metaLogo from '@/assets/images/sponsors/meta.png'
import googleLogo from '@/assets/images/sponsors/google.png'
import nvidiaLogo from '@/assets/images/sponsors/nvidia.png'
import microsoftLogo from '@/assets/images/sponsors/microsoft.png'
import synopsysLogo from '@/assets/images/sponsors/synopsys.png'
import cadenceLogo from '@/assets/images/sponsors/cadence.png'
import janeLogo from '@/assets/images/sponsors/jane.png'

const SponsorLogo = ({ src, alt, tier }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="relative group"
    >
        <div className="relative w-48 h-32 bg-white rounded-lg shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:shadow-xl">
            <Image
                src={src}
                alt={alt}
                className="object-contain max-h-20 w-auto hover:grayscale-0 transition-all duration-300"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tier} Sponsor
        </div>
    </motion.div>
)

const SponsorsSection = () => {
    const sponsors = {
        diamond: [
            { src: awsLogo, alt: 'AWS', name: 'Amazon Web Services' },
            { src: intelLogo, alt: 'Intel', name: 'Intel Corporation' },
            { src: metaLogo, alt: 'Meta', name: 'Meta Platforms' }
        ],
        gold: [
            { src: googleLogo, alt: 'Google', name: 'Google' },
            { src: nvidiaLogo, alt: 'NVIDIA', name: 'NVIDIA' },
            { src: microsoftLogo, alt: 'Microsoft', name: 'Microsoft' },
            { src: synopsysLogo, alt: 'Synopsys', name: 'Synopsys' }
        ],
        silver: [
            { src: cadenceLogo, alt: 'Cadence', name: 'Cadence Design Systems' },
            { src: janeLogo, alt: 'Jane Street', name: 'Jane Street' }
        ]
    }

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

                {/* Diamond Sponsors */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-blue-200 mb-8 text-center">Diamond Sponsors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
                        {sponsors.diamond.map((sponsor, index) => (
                            <SponsorLogo
                                key={index}
                                src={sponsor.src}
                                alt={sponsor.alt}
                                tier="Diamond"
                            />
                        ))}
                    </div>
                </div>

                {/* Gold Sponsors */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-blue-200 mb-8 text-center">Gold Sponsors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center">
                        {sponsors.gold.map((sponsor, index) => (
                            <SponsorLogo
                                key={index}
                                src={sponsor.src}
                                alt={sponsor.alt}
                                tier="Gold"
                            />
                        ))}
                    </div>
                </div>

                {/* Silver Sponsors */}
                <div>
                    <h3 className="text-2xl font-semibold text-blue-200 mb-8 text-center">Silver Sponsors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center max-w-2xl mx-auto">
                        {sponsors.silver.map((sponsor, index) => (
                            <SponsorLogo
                                key={index}
                                src={sponsor.src}
                                alt={sponsor.alt}
                                tier="Silver"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SponsorsSection