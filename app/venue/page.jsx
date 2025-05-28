'use client'
import { motion } from 'framer-motion';
import { MapPin, Clock, Utensils, Building2, Calendar, Download } from 'lucide-react';


const VenueSection = ({ title, description, icon: Icon, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
    >
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

const EventCard = ({ title, location }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
        <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
            <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
            </div>
        </div>
    </motion.div>
);

const MapSection = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Location</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="relative w-full h-[450px] bg-gray-100 rounded-lg overflow-hidden">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.908180061644!2d-9.153731411706127!3d38.74918960722886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933f31d4349d3%3A0x3b01f701d0c1e3e6!2sEdif%C3%ADcio%20II%20-%20ISCTE!5e0!3m2!1sen!2spt!4v1747835755126!5m2!1sen!2spt" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-2">Address</h3>
                        <p className="text-gray-600">
                            Edifício II - ISCTE<br />
                            Avenida das Forças Armadas<br />
                            1649-026 Lisboa, Portugal
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Getting Here</h3>
                        <p className="text-gray-600 text-sm">
                            The ISCTE campus is easily accessible by public transportation.
                            Use the metro (yellow line) to Entrecampos station or take a bus to the ISCTE stop.
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
                        All conferences and workshops will be held at our main venue(ISCTE LISBON), providing an excellent environment for learning and collaboration.
                    </motion.p>
                </div>

                {/* Main Venue Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <VenueSection
                        icon={Building2}
                        title="Main Venue"
                        description="FLoC Conferences and Workshops will take place at our main campus. The lecture halls are conveniently located within a 5-10 minute walk from each other and from the accommodation facilities."
                    />
                    <VenueSection
                        icon={MapPin}
                        title="Lecture Halls"
                        description="The lecture halls will be located in multiple buildings across the campus, including Taub, Amado-Segoe, Ullmann, and Churchill buildings. Detailed room assignments will be available on EasyChair."
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
                        />
                        <VenueSection
                            icon={Clock}
                            title="Workshop Dinners"
                            description="Workshop dinners will be held at Taub Terrace Floor 2, providing a perfect setting for networking and discussions."
                        />
                        <VenueSection
                            icon={Calendar}
                            title="Special Events"
                            description="The FLoC Reception will take place at Churchill and Taub buildings, while the Banquet dinner will be held at Bikta Bayar- Beit Oren."
                        />
                    </div>
                </div>

                {/* Important Events Timeline */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Events Schedule</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <EventCard
                            title="Workshop Dinners"
                            location="Taub Terrace Floor 2"
                        />
                        <EventCard
                            title="FLoC Reception"
                            location="Churchill Building"
                        />
                        <EventCard
                            title="FLoC Reception"
                            location="Taub Building"
                        />
                        <EventCard
                            title="FLoC Banquet Dinner"
                            location="Bikta Bayar- Beit Oren"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
