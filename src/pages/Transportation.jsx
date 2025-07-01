import { motion } from 'framer-motion';
import { MdLocationOn, MdAccessTime, MdWarning } from 'react-icons/md';

const InfoBox = ({ icon: Icon, text, className = "" }) => (
    <div className={`flex items-center gap-2 p-3 bg-blue-50 rounded-lg ${className}`}>
        <Icon className="w-5 h-5 text-blue-900" />
        <p className="text-blue-900">{text}</p>
    </div>
);

const LisbonMetroCard = () => {
  return (
    <motion.div
      className="metro-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="metro-title">Lisbon Metro Map</h2>
      <div className="map-container">
        <motion.img
          src="https://www.metrolisboa.pt/wp-content/uploads/Mapa-rede-ML-2021_EN-1.png"
          alt="Lisbon Metro Map"
          className="metro-map"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

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
                        Find the best way to reach the conference venue from 
                    </motion.p>
                </div>

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
                                src="train.jpg"
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
                                src="bus.png"
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
                </div>
            </div>
        </div>
    );
}
