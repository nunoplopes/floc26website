import { motion } from 'framer-motion';
import { HiLocationMarker } from "react-icons/hi";
import { MdSubway } from "react-icons/md";
import campopequeno from '../assets/images/campo-pequeno.jpg';
import pavportugal from '../assets/images/pav-portugal.jpg';
import patiogale from '../assets/images/patio-gale.jpg';
import carloslopes from '../assets/images/carlos-lopes.webp';

const VenueSection = ({ venue }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-xl shadow-lg overflow-hidden`}
    >
    <div className="p-4">
      <h4 className="text-lg text-gray-500 font-semibold mb-1">
        {venue.title}
      </h4>

      <h3 className="text-xl font-bold mb-4">
        {venue.name}
      </h3>
    </div>

    <img
      src={venue.image}
      alt={venue.name}
      className="w-full h-80 object-contain"
    />

    <div className="p-4">
        <div className="flex items-center text-gray-600 mb-2">
            <HiLocationMarker className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
            <p>{venue.address}</p>
        </div>

    <div className="flex items-center text-gray-600 mb-4">
      <MdSubway className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
      <p>{venue.metro}</p>
    </div>

      <a
        href={venue.mapsLink}
        className="text-blue-600 hover:underline"
      >
        View on Google Maps
      </a>
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
                            Use the metro (yellow line) to the "Cidade Universitária" station or one of the several bus stops nearby.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Venue = () => {
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
                        All conferences and workshops will be held at ISCTE, a university located in Lisbon.
                    </motion.p>
                </div>

                {/* Map Section */}
                <div className="mb-16">
                    <MapSection />
                </div>

                {/* Dining Information */}
<div className="mb-16">
  <h2 className="text-3xl font-semibold text-center mb-12">Receptions & Banquets</h2>

  {/* Week 1 Section */}
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-300">Week 1</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {[
        {
          title: "Week 1 Reception",
          name: "Pala do Pavilhão de Portugal",
          image: pavportugal,
          address: "Pavilhão de Portugal, 1990-221 Lisboa",
          mapsLink: "https://maps.app.goo.gl/ny9iQeSK8Z8qGtTr5",
          metro: "Oriente (Red Line)"
        },
        {
          title: "Week 1 Banquet",
          name: "Praça de Touros do Campo Pequeno",
          image: campopequeno,
          address: "Av. da República, 1000-082 Lisboa",
          mapsLink: "https://maps.app.goo.gl/Vv4pjxr1PNH4LXGQ8",
          metro: "Campo Pequeno (Yellow Line)"
        }
      ].map((venue, index) => (
        <VenueSection venue={venue} />
      ))}
    </div>
  </div>

  {/* Week 2 Section */}
  <div>
    <h3 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-300">Week 2</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {[
        {
          title: "Week 2 Reception",
          name: "Pátio da Galé",
          image: patiogale,
          address: "Praça do Comércio 10, 1100-148 Lisboa",
          mapsLink: "https://maps.app.goo.gl/ZZmyXQeFxH765TL39",
          metro: "Terreiro do Paço (Blue Line) or Baixa-Chiado (Blue and Green Lines)"
        },
        {
          title: "Week 2 Banquet",
          name: "Pavilhão Carlos Lopes",
          image: carloslopes,
          address: "Av. Sidónio Pais 16, 1070-051 Lisboa",
          mapsLink: "https://maps.app.goo.gl/Lh74ptikTBJq7ws18",
          metro: "Marquês de Pombal (Yellow and Blue Lines) or Parque (Blue Line, closer to the venue)"
        }
      ].map((venue, index) => (
        <VenueSection venue={venue} />
      ))}
    </div>
  </div>
</div>

            </div>
        </div>
  )
}

export default Venue
