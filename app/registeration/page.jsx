'use client'
import React, { useState } from 'react';

const Registration = () => {
    // Define the registration fee data based on the browse result summary
    const registrationFees = [
        // Add other categories if they exist and have different fee structures
        {
            category: 'Conference Day',
            earlyBirdRegular: '680', // Replace with actual fees
            earlyBirdStudent: '530',
            earlyBirdRegularStudent: '530', // Replace with actual fees
            earlyBirdCSFMember: '680', // Replace with actual fees
            regularRegular: '750',
            regularStudent: '750', // Replace with actual fees
            regularRegularStudent: '590', // Replace with actual fees
            regularCSFMember: '750', // Replace with actual fees
            regularCSFNonMember: '760', 
            walkInRegular: '850', 
            walkInStudent: '690', 
            walkInCSFMember: '850', 
            walkInCSFNonMember: '900', 
        },
        {
            category: 'Workshop',
            earlyBirdRegular: '100',
            earlyBirdRegularStudent: '80',
            earlyBirdWorkShopDinner: '75',
            regularStudent: '120',
            regularRegularStudent: '100',
            regularWorkShopDinner: '75',
            walkInRegular: '140',
            walkInRegularStudent: '120',
            walkInWorkShopDinner: '75'
        }
    ];



    return (
        // Background uses the light blue shade
        <div className="min-h-screen text-gray-800">
            <main className=" md:py-16 w-full">
                {/* Main Heading */}
                <div
                style={{
                    background: `url('https://static.wixstatic.com/media/bd25dc_ae0ac4284c924e6d9381f9c76565a612~mv2.jpg/v1/fill/w_1351,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/B.jpg')`,
                    backgroundSize: 'cover',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backgroundBlendMode: 'overlay'
                }}
                className='h-[60dvh] flex items-center justify-center text-center text-neutral-50 w-full'
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16">Registration</h1>
                </div>

                {/* Registration Fees Section */}
                <section className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 md:mb-16 mx-2 mt-4">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Conference and Workshop Fees (in USD)</h2>

                    {/* Registration Table */}
                    {/* Added overflow-x-auto for horizontal scrolling on small screens */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-blue-900 text-white text-left">
                                    <th className="p-3 rounded-tl-lg">Category</th>
                                    <th className="p-3 text-center">Early Bird (until June 20)</th>
                                    <th className="p-3 text-center">Regular (until July 20)</th>
                                    <th className="p-3 text-center rounded-tr-lg">Walk-in (after July 20)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Row for Regular Attendees */}
                                <tr className="border-b border-gray-200 hover:bg-blue-50">
                                    <td className="p-3 font-medium text-blue-800">Regular</td>
                                    <td className="p-3 text-center">{registrationFees[0].earlyBirdRegular}</td>
                                    <td className="p-3 text-center">{registrationFees[0].regularRegular}</td>
                                    <td className="p-3 text-center">{registrationFees[0].walkInRegular}</td>
                                </tr>
                                {/* Row for Students */}
                                <tr className="border-b border-gray-200 hover:bg-blue-50">
                                    <td className="p-3 font-medium text-blue-800"> Regular Student</td>
                                    <td className="p-3 text-center">{registrationFees[0].earlyBirdStudent}</td>
                                    <td className="p-3 text-center">{registrationFees[0].regularStudent}</td>
                                    <td className="p-3 text-center">{registrationFees[0].walkInStudent}</td>
                                </tr>
                                {/* Row for CSF Members */}
                                <tr className="border-b border-gray-200 hover:bg-blue-50">
                                    <td className="p-3 font-medium text-blue-800">CSF Member</td>
                                    <td className="p-3 text-center">{registrationFees[0].earlyBirdCSFMember}</td>
                                    <td className="p-3 text-center">{registrationFees[0].regularCSFMember}</td>
                                    <td className="p-3 text-center">{registrationFees[0].walkInCSFMember}</td>
                                </tr>
                                {/* Row for CSF Non-Members */}
                                <tr className="border-b border-gray-200 hover:bg-blue-50">
                                    <td className="p-3 font-medium text-blue-800">CSF Non-Member</td>
                                    <td className="p-3 text-center">{registrationFees[0].earlyBirdCSFNonMember}</td>
                                    <td className="p-3 text-center">{registrationFees[0].regularCSFNonMember}</td>
                                    <td className="p-3 text-center">{registrationFees[0].walkInCSFNonMember}</td>
                                </tr>
                                {/* Add other rows for different categories if applicable */}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Workshop */}
                <section className="rounded-xl shadow-lg p-6 md:p-8 mb-12 md:mb-16 bg-amber-500 mx-2">
                     <h2 className="text-3xl font-bold text-neutral-50 mb-8 text-center">Workshop</h2>

                     {/* Event Fees Table */}
                     <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-blue-900 text-white text-left">
                                    <th className="p-3 rounded-tl-lg">Category</th>
                                    <th className="p-3 text-center">Early Bird (until June 20)</th>
                                    <th className="p-3 text-center">Regular (until July 20)</th>
                                    <th className="p-3 text-center rounded-tr-lg">Walk-in (after July 20)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Row for Regular Attendees */}
                                <tr className="border-b border-gray-200 hover:bg-blue-500/30">
                                    <td className="p-3 font-medium text-white">Regular</td>
                                    <td className="p-3 text-center font-semibold text-neutral-700">{registrationFees[0].earlyBirdRegular}</td>
                                    <td className="p-3 text-center font-semibold text-neutral-700">{registrationFees[0].regularRegular}</td>
                                    <td className="p-3 text-center font-semibold text-neutral-700">{registrationFees[0].walkInRegular}</td>
                                </tr>
                                {/* Row for Students */}
                                <tr className="border-b border-gray-200 hover:bg-blue-500/30">
                                    <td className="p-3 font-medium text-white">Regular Student</td>
                                    <td className="p-3 text-center font-semibold text-neutral-700">{registrationFees[1].earlyBirdRegularStudent}</td>
                                    <td className="p-3 text-center font-semibold text-neutral-700">{registrationFees[1].regularRegularStudent}</td>
                                    <td className="p-3 text-center font-semibold text-neutral-700">{registrationFees[1].walkInRegularStudent}</td>
                                </tr>
                                {/* Row for CSF Members */}
                                <tr className="border-b border-gray-200 hover:bg-blue-500/30">
                                    <td className="p-3 font-medium text-white">Workshop Dinner</td>
                                    <td className="p-3 text-center font-semibold text-neutral-700">{registrationFees[1].earlyBirdWorkShopDinner}</td>
                                    <td className="p-3 text-center font-semibold text-neutral-700">{registrationFees[1].regularWorkShopDinner}</td>
                                    <td className="p-3 text-center font-semibold text-neutral-700">{registrationFees[1].walkInWorkShopDinner}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </section>


                {/* Contact Information Section */}
                <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                     <h2 className="text-2xl font-semibold text-blue-800 mb-4">Inquiries</h2>
                     <p className="text-gray-700 leading-relaxed mb-4">
                         If you have any questions regarding registration, please contact us.
                     </p>
                     {/* Replace with actual contact details */}
                     <p className="text-gray-700 font-medium">
                         Email: <a href="mailto:webmaster@floc26.org" className="text-blue-600 hover:underline">webmaster@floc26.org</a> {/* Placeholder email */}
                     </p>
                     {/* Add other contact info if available */}
                </section>

            </main>
        </div>
    );
};

export default Registration;
