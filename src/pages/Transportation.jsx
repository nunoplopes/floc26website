import { motion } from "framer-motion";

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
            Find the best way to reach the conference venue.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
