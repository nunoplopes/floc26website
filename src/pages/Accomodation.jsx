import { motion } from "framer-motion";
import { FaHotel, FaBus, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa";

const HotelCard = memo(({ name, address, price, features, isHighlighted, imageUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${isHighlighted ? "ring-2 ring-blue-500" : ""}`}
  >
    <div className="relative h-48 w-full">
      <img
        src={imageUrl}
        alt={name}
        fill="true"
        className="object-cover h-48 w-full"
        loading="lazy"
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPj4+OD5AQEBAR0hHSEdISEtISEhISEhISEj/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
    <div className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{address}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-blue-600">From {price}</p>
          <p className="text-sm text-gray-500">per night</p>
        </div>
      </div>
      {features && (
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
));

HotelCard.displayName = "HotelCard";

const hotels = [
  {
    name: "Leonardo Plaza Haifa",
    address: "David Elazar Street 10, Haifa, Israel",
    price: "600 NIS",
    features: ["Bed & Breakfast", "Central location", "Spectacular views"],
    imageUrl: "todo",
  },
];

const AccomodationSection = memo(() => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 pt-20"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Accommodation Information</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The following hotels are conveniently located in the Central Carmel area, close to
            shopping, restaurants, and cultural centers. All offer spectacular views of Haifa Bay
            and the coastline.
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-12"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <FaExclamationTriangle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Accommodation in JULY is at a premium in Haifa. We recommend booking your rooms as
                  early as possible. Room availability is on a first-come-first-served basis.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {hotels.map((hotel, index) => (
            <HotelCard key={hotel.name} {...hotel} isHighlighted={index === 0} />
          ))}
        </div>

        {/* Transportation Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center mb-4">
            <FaBus className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900">
              Transportation to Conference Venue
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            During the conference and workshop days, a free shuttle bus will be offered to guests
            from the hotels to the conference venue and back, in the morning and at the end of the
            day.
          </p>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <FaInfoCircle className="inline-block mr-2" />
              Shuttle service will be available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

const Accomodation = () => {
  return (
    <main>
      <AccomodationSection />
    </main>
  );
};

export default Accomodation;
