'use client'
import { motion } from 'framer-motion';
import { MdLocationOn, MdAccessTime, MdWarning } from 'react-icons/md';
import TRAIN from '../src/assets/images/lisbontram.jpg'
import TAXI from '../src/assets/images/transport/taxi.jpg'
import BUS from '../src/assets/images/transport/bus.jpg'
import CAR from '../src/assets/images/cars.jpg'

const InfoBox = ({ icon: Icon, text, className = "" }) => (
    <div className={`flex items-center gap-2 p-3 bg-blue-50 rounded-lg ${className}`}>
        <Icon className="w-5 h-5 text-blue-900" />
        <p className="text-blue-900">{text}</p>
    </div>
);

export default function Transportation() {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 md:pt-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Transportation Information
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Find the best way to reach the conference venue from Ben Gurion Airport and navigate around Haifa
                    </motion.p>
                </div>

                {/* Important Notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-12"
                >
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                            <MdWarning className="w-6 h-6 text-yellow-600" />
                            <p className="text-yellow-800">
                                Note: Some airport and public transportation services are limited on the Sabbath (Friday afternoon until Saturday evening). 
                                If you arrive during these times, consider renting a car or taking a taxi.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Transportation Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Train Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="relative h-32 w-full">
                            <img
                                src={TRAIN}
                                alt="Train transportation"
                                className="object-cover h-52 w-full"
                            />
                        </div>
                        <div className="p-6 mt-20">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Train Service</h3>
                            <p className="text-gray-600 mb-4">
                                From the Ben Gurion Airport train station, located near the arrivals hall, take a direct train to Hof HaCarmel station in Haifa.
                            </p>
                            <InfoBox 
                                icon={MdAccessTime} 
                                text="Not available on Fridays and Saturdays"
                            />
                            <a 
                                href="https://www.rail.co.il/en" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Plan Your Trip Using Israel Railways →
                            </a>
                        </div>
                    </motion.div>

                    {/* Bus Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="relative h-48 w-full">
                            <img
                                src={BUS}
                                alt="Bus transportation"
                                className="object-cover w-full h-52"
                            />
                        </div>
                        <div className="p-6 ">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bus Service</h3>
                            <p className="text-gray-600 mb-4">
                                Take the 905 bus to Hof HaCarmel station in Haifa. From there, take a city bus or taxi to your destination.
                            </p>
                            <InfoBox 
                                icon={MdAccessTime} 
                                text="Limited service on Friday afternoon until Saturday evening"
                            />
                            <a 
                                href="https://www.egged.co.il/en" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Check Egged Bus Schedule →
                            </a>
                        </div>
                    </motion.div>

                    {/* Taxi Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="relative h-48 w-full">
                            <img
                                src={TAXI}
                                alt="Taxi transportation"
                                className="object-cover w-full h-52"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Taxi & Sherut</h3>
                            <p className="text-gray-600 mb-4">
                                Sherut (shared taxis) are available from the airport to all destinations. They're about half the price of private taxis.
                            </p>
                            <div className="space-y-2">
                                <InfoBox 
                                    icon={MdAccessTime} 
                                    text="Amal Taxi Company operates on weekends"
                                />
                                <InfoBox 
                                    icon={MdLocationOn} 
                                    text="Approximately 120 NIS per person for shared taxi"
                                />
                            </div>
                            <p className="text-gray-600 mt-4">
                                For private taxis, we recommend using GETT or YANGO mobile apps.
                            </p>
                        </div>
                    </motion.div>

                    {/* Rental Cars Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="relative h-48 w-full bg-gray-100">
                            <div className="relative h-48 w-full">
                                <img
                                    src={CAR}
                                    alt="Taxi transportation"
                                    className="object-cover h-52 w-full"
                                />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rental Cars</h3>
                            <p className="text-gray-600 mb-4">
                                Several car rental companies are available at the airport:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                                <li>Avis</li>
                                <li>Budget</li>
                                <li>Europcar</li>
                                <li>Hertz</li>
                                <li>SIXT</li>
                            </ul>
                            <InfoBox 
                                icon={MdLocationOn} 
                                text="Free parking available on campus for FLoC participants"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Local Transportation */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Local Transportation in Haifa</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">Public Transportation</h3>
                            <p className="text-gray-600">
                                Public transportation in Israel uses the Rav-Kav card system. Cards can be obtained at major train and bus stations.
                            </p>
                            <div className="space-y-2">
                                <InfoBox 
                                    icon={MdLocationOn} 
                                    text="Available at airport train station"
                                />
                                <InfoBox 
                                    icon={MdAccessTime} 
                                    text="Can be charged online via official mobile app"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">Conference Shuttles</h3>
                            <p className="text-gray-600">
                                Free shuttles will be provided from Haifa hotels to the conference venue and back.
                            </p>
                            <div className="space-y-2">
                                <InfoBox 
                                    icon={MdAccessTime} 
                                    text="Regular service during conference hours"
                                />
                                <InfoBox 
                                    icon={MdLocationOn} 
                                    text="Available from designated hotel locations"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Apps Section */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Apps</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="https://moovit.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Moovit
                        </a>
                        <a 
                            href="https://gett.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            GETT
                        </a>
                        <a 
                            href="https://yango.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            YANGO
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
