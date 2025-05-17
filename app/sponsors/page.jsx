// This component assumes you have Next.js and Tailwind CSS set up in your project.

import React from 'react';
import Head from 'next/head';
import {HiX} from 'react-icons/hi'

const SponsorshipDetailsPage = () => {
    // Define the sponsorship data based on the PDF content
    const sponsorshipData = [
        { benefit: 'Logo on the FLoC 2026 website', bronze: true, silver: true, gold: true, platinum: true, diamond: true },
        { benefit: 'Complementary registration (2 weeks)', bronze: false, silver: '1', gold: '2', platinum: '5', diamond: '10' },
        { benefit: 'Sponsor Booth', bronze: false, silver: false, gold: true, platinum: true, diamond: true },
        { benefit: 'Logo on all signage', bronze: false, silver: false, gold: true, platinum: true, diamond: true },
        { benefit: 'Logo on staff’s T-shirts', bronze: false, silver: false, gold: true, platinum: true, diamond: true },
        { benefit: 'Logo on Attendees Lanyard', bronze: false, silver: false, gold: true, platinum: true, diamond: true },
        { benefit: 'Logo on keynote recording video (youtube)', bronze: false, silver: false, gold: false, platinum: true, diamond: true },
        { benefit: 'Naming of 1 dinner/reception', bronze: false, silver: false, gold: false, platinum: false, diamond: true },
        { benefit: 'Highlight during all keynotes', bronze: false, silver: false, gold: false, platinum: false, diamond: true },
        { benefit: 'Naming on social hours', bronze: false, silver: false, gold: false, platinum: false, diamond: true },
        { benefit: 'Opportunity for a brief speech before 2 keynotes', bronze: false, silver: false, gold: false, platinum: false, diamond: true },
    ];

    const sponsorshipCosts = {
        bronze: '€5K',
        silver: '€10K',
        gold: '€25K',
        platinum: '€50K',
        diamond: '€100K',
    };

    // Helper function to render checkmark or value
    const renderBenefit = (value) => {
        if (value === true) {
            return <span className="text-green-600 font-bold">&#10003;</span>; // Checkmark
        } else if (value === false) {
            return ''; // Empty for no benefit
        } else {
            return value; // Render the value (e.g., number of registrations)
        }
    };

    return (
        // Background uses the light blue shade
        <div className=" min-h-screen text-gray-800">
            <Head>
                <title>FLOC 2026 - Sponsorship</title>
                <meta name="description" content="Sponsorship opportunities for FLoC 2026" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto px-4 py-12 md:py-16">

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12 mt-10">Sponsorship Opportunities</h1>

                {/* Sponsorship Details Section */}
                <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">

                    {/* Sponsorship Table/Grid */}
                    {/* Added overflow-x-auto for horizontal scrolling on small screens */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-blue-700 text-white text-left">
                                    <th className="p-3 rounded-tl-lg">BENEFITS</th>
                                    <th className="p-3 text-center bg-brown-600">Bronze</th>
                                    <th className="p-3 text-center bg-neutral-200 text-neutral-800">Silver</th>
                                    <th className="p-3 text-center bg-yellow-600 text-neutral-50">Gold</th>
                                    <th className="p-3 text-center bg-gray-400">Platinum</th>
                                    <th className="p-3 text-center rounded-tr-lg bg-teal-700 text-neutral-50">Diamond</th>
                                </tr>

                                {/* Row for Sponsorship Cost */}
                                <tr className="bg-blue-700 text-white font-bold">
                                    <td className="p-3 rounded-bl-lg">COST</td>
                                    <td className="p-3 text-center">{sponsorshipCosts.bronze}</td>
                                    <td className="p-3 text-center bg-neutral-200 text-neutral-800">{sponsorshipCosts.silver}</td>
                                    <td className="p-3 text-center bg-yellow-600 text-neutral-50">{sponsorshipCosts.gold}</td>
                                    <td className="p-3 text-center bg-gray-400">{sponsorshipCosts.platinum}</td>
                                    <td className="p-3 text-center rounded-br-lg bg-teal-700 text-neutral-50">{sponsorshipCosts.diamond}</td>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Map through sponsorship data to create table rows */}
                                {sponsorshipData.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-blue-50">
                                        <td className="p-3 font-medium text-blue-800">{item.benefit}</td>
                                        <td className="p-3 text-center">{renderBenefit(item.bronze)}</td>
                                        <td className="p-3 text-center">{renderBenefit(item.silver)}</td>
                                        <td className="p-3 text-center">{renderBenefit(item.gold)}</td>
                                        <td className="p-3 text-center">{renderBenefit(item.platinum)}</td>
                                        <td className="p-3 text-center">{renderBenefit(item.diamond)}</td>
                                    </tr>
                                ))}

                                

                            </tbody>
                        </table>
                    </div>

                </section>
            </main>
        </div>
    );
};

export default SponsorshipDetailsPage;
