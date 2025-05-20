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
                width={352}
                height={203}
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
        ],
        Bronze: [
            { src: 'https://static.wixstatic.com/media/bd25dc_ed63b743383840a0aeb0154948c1220c~mv2.png/v1/fill/w_352,h_203,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DLV%20LOGO.png', alt: 'dlv system', name: 'Dlv System' },
            { src: 'https://static.wixstatic.com/media/bd25dc_f3baf9b2b239487baed68e06e02158ca~mv2.png/v1/fill/w_352,h_203,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Veridise%20LOGO.png', alt: 'Veridise', name: 'Veridise' }
        ],
        MentoringWorkshopSponsors: [
            { src: 'https://static.wixstatic.com/media/bd25dc_4e1172e1a5f040b7976c55abb6087040~mv2.png/v1/fill/w_190,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sponsors_FLoC_7.png', alt: 'Certora', name: ' Certora' },
            { src: 'https://static.wixstatic.com/media/bd25dc_0c378b3cffbe4dc486ae9215480ce40f~mv2.png/v1/fill/w_190,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sponsors_FLoC_4.png', alt: 'Informal System', name: 'Informal System' },
            { src: 'https://static.wixstatic.com/media/bd25dc_1ce493c1c5dd4e7595d459ff443a9b26~mv2.png/v1/fill/w_190,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sponsors_FLoC_8.png', alt: 'VMWare University', name: 'VMWare University' },
            { src: 'https://static.wixstatic.com/media/bd25dc_e62cc38dd8ce4806bdf58aa20202ebc8~mv2.png/v1/fill/w_190,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GALOIS%20Logo.png', alt: 'Galois', name: 'Galois' },
            { src: 'https://static.wixstatic.com/media/bd25dc_33a0e40e8f6d4111b6c4d3e98e375b7c~mv2.png/v1/fill/w_190,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GOOGLE%20LOGO.png', alt: 'Google', name: 'Google' },
        ],
        OtherSponsors: [
            { src: 'https://static.wixstatic.com/media/bd25dc_9be088064b284ff798d8c2ac0a77b83e~mv2.png/v1/fill/w_264,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TECHNION%202.png', alt: 'TECHNION', name: 'TECHNION' },
            { src: 'https://static.wixstatic.com/media/bd25dc_46e4b4d83fc644cb836add274598cb41~mv2.png/v1/fill/w_264,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TECHNION.png', alt: 'TECHNION', name: 'TECHNION' },
            { src: 'https://static.wixstatic.com/media/bd25dc_beee87448ecd42d2abfa8bf1516234ff~mv2.png/v1/fill/w_264,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsf.png', alt: 'NSF', name: 'NSF' },
            { src: 'https://static.wixstatic.com/media/bd25dc_58a718697a534a088aeae702f11c6c29~mv2.png/v1/fill/w_264,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sponsors_13.png', alt: 'SIGLOG', name: 'SIGLOG' },
        ],
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
                    <h3 className="text-2xl font-bold text-blue-200 mb-8 text-center">Diamond Sponsors</h3>
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
                    <h3 className="text-2xl font-bold text-blue-200 mb-8 text-center">Gold Sponsors</h3>
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
                    <h3 className="text-2xl font-bold text-blue-200 mb-8 text-center">Silver Sponsors</h3>
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

                {/* Bronze Sponsors */}
                <div>
                    <h3 className="text-2xl font-bold text-blue-200 mb-8 text-center mt-10">Bronze Sponsors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center max-w-2xl mx-auto">
                        {sponsors.Bronze.map((sponsor, index) => (
                            <SponsorLogo
                                key={index}
                                src={sponsor.src}
                                alt={sponsor.alt}
                                tier="Bronze"
                            />
                        ))}
                    </div>
                </div>

                {/* Mentoring WorkSHop */}
                <div>
                    <h3 className="text-2xl font-bold text-blue-200 mb-8 text-center mt-15">Mentoring Workshop Sponsors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center max-w-2xl mx-auto">
                        {sponsors.MentoringWorkshopSponsors.map((sponsor, index) => (
                            <SponsorLogo
                                key={index}
                                src={sponsor.src}
                                alt={sponsor.alt}
                                tier="Mentroing Workshop Sponsors"
                            />
                        ))}
                    </div>
                </div>

                {/* Other Sponsors */}
                <div>
                    <h3 className="text-2xl font-bold text-blue-200 mb-8 text-center mt-15">Other Sponsors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center max-w-2xl mx-auto">
                        {sponsors.OtherSponsors.map((sponsor, index) => (
                            <SponsorLogo
                                key={index}
                                src={sponsor.src}
                                alt={sponsor.alt}
                                tier="Mentroing Workshop Sponsors"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SponsorsSection