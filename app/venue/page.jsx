'use client'
import { motion } from 'framer-motion';
import { MapPin, Clock, Utensils, Building2, Calendar, Download } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import { Metadata } from 'next'

const VenueSection = ({ title, description, icon: Icon, image, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
    >
        <div className="relative h-48 w-full">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />
        </div>
        <div className="p-6">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

const EventCard = ({ date, title, location, image }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
        <div className="relative h-40 w-full">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />
        </div>
        <div className="p-4">
            <div className="flex items-center gap-2 text-blue-900 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{date}</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
            <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
            </div>
        </div>
    </motion.div>
);

const MapSection = () => {
    useEffect(() => {
        // Check if the script is already loaded
        if (window.google && window.google.maps) {
            initMap();
            return;
        }

        // Check if the script is already being loaded
        if (document.querySelector('script[src*="maps.googleapis.com"]')) {
            return;
        }

        // Load Google Maps script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.id = 'google-maps-script';
        document.head.appendChild(script);

        // Define the initMap function
        window.initMap = function() {
            const technion = { lat: 32.7775, lng: 35.0214 };
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: technion,
                styles: [
                    {
                        featureType: 'poi',
                        elementType: 'labels',
                        stylers: [{ visibility: 'off' }]
                    }
                ]
            });

            // Add markers for key locations
            const locations = [
                { position: { lat: 32.7775, lng: 35.0214 }, title: 'Taub Building' },
                { position: { lat: 32.7780, lng: 35.0220 }, title: 'Churchill Building' },
                { position: { lat: 32.7770, lng: 35.0208 }, title: 'Grand Water Research Institute' }
            ];

            locations.forEach(location => {
                new google.maps.Marker({
                    position: location.position,
                    map: map,
                    title: location.title
                });
            });
        };

        // Cleanup function
        return () => {
            const scriptElement = document.getElementById('google-maps-script');
            if (scriptElement) {
                scriptElement.remove();
            }
            delete window.initMap;
        };
    }, []); // Empty dependency array since we only want to run this once

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Campus Map</h2>
                <a
                    href="/campus-map.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Download className="w-5 h-5" />
                    <span>Download Map</span>
                </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                        <div id="map" className="w-full h-full rounded-lg"></div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-2">Key Locations</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span>Taub Building</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span>Churchill Building</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span>Grand Water Research Institute</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Getting Here</h3>
                        <p className="text-gray-600 text-sm">
                            The Technion campus is easily accessible by public transportation.
                            Use the campus shuttle service or follow the walking paths marked on the map.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Venue() {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 mt-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Venues of FLoC 2026
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        All conferences and workshops will be held at our main venue, providing an excellent environment for learning and collaboration.
                    </motion.p>
                </div>

                {/* Main Venue Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <VenueSection
                        icon={Building2}
                        title="Main Venue"
                        description="FLoC Conferences and Workshops will take place at our main campus. The lecture halls are conveniently located within a 5-10 minute walk from each other and from the accommodation facilities."
                        image="https://www.technion.ac.il/wp-content/uploads/2019/12/Technion-Campus-1.jpg"
                    />
                    <VenueSection
                        icon={MapPin}
                        title="Lecture Halls"
                        description="The lecture halls will be located in multiple buildings across the campus, including Taub, Amado-Segoe, Ullmann, and Churchill buildings. Detailed room assignments will be available on EasyChair."
                        image="https://www.technion.ac.il/wp-content/uploads/2019/12/Taub-Building.jpg"
                    />
                </div>

                {/* Map Section */}
                <div className="mb-16">
                    <MapSection />
                </div>

                {/* Dining Information */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dining & Social Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <VenueSection
                            icon={Utensils}
                            title="Lunch Venues"
                            description="Lunches will be held in Taub hall and in The Grand Water Research Institute. The distribution of conferences according to lunch locations will be updated on EasyChair."
                            image="https://www.technion.ac.il/wp-content/uploads/2019/12/Grand-Water-Research-Institute.jpg"
                        />
                        <VenueSection
                            icon={Clock}
                            title="Workshop Dinners"
                            description="Workshop dinners will be held at Taub Terrace Floor 2, providing a perfect setting for networking and discussions."
                            image="https://www.technion.ac.il/wp-content/uploads/2019/12/Taub-Terrace.jpg"
                        />
                        <VenueSection
                            icon={Calendar}
                            title="Special Events"
                            description="The FLoC Reception will take place at Churchill and Taub buildings, while the Banquet dinner will be held at Bikta Bayar- Beit Oren."
                            image="https://www.technion.ac.il/wp-content/uploads/2019/12/Churchill-Building.jpg"
                        />
                    </div>
                </div>

                {/* Important Events Timeline */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Events Schedule</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <EventCard
                            date="August 1-11"
                            title="Workshop Dinners"
                            location="Taub Terrace Floor 2"
                            image="https://www.technion.ac.il/wp-content/uploads/2019/12/Taub-Terrace-Dinner.jpg"
                        />
                        <EventCard
                            date="August 2"
                            title="FLoC Reception"
                            location="Churchill Building"
                            image="https://www.technion.ac.il/wp-content/uploads/2019/12/Churchill-Reception.jpg"
                        />
                        <EventCard
                            date="August 7"
                            title="FLoC Reception"
                            location="Taub Building"
                            image="https://www.technion.ac.il/wp-content/uploads/2019/12/Taub-Reception.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
