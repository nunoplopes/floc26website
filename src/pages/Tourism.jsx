import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaInfoCircle, FaUtensils, FaLeaf } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// https://pixabay.com/photos/lisbon-monument-to-the-discoveries-927669/
import LISBON from "../assets/images/lisbon-927669_1920.jpg";
// https://pixabay.com/photos/tower-belem-portugal-lisbon-lisboa-3867791/
import BELEM_TOWER from "../assets/images/tower-3867791_1280.jpg";
// https://pixabay.com/photos/jeronimos-monastery-jeronimos-1739271/
import JERONIMOS_MONASTERY from "../assets/images/jeronimos-monastery-1739271_1280.jpg";
// https://pixabay.com/photos/sao-jorges-castle-castle-saint-jorge-1733139/
import SAO_JORGE_CASTLE from "../assets/images/sao-jorges-castle-1733139_1280.jpg";
// https://pixabay.com/photos/portugal-lisbon-window-tiles-4065069/
import ALFAMA from "../assets/images/portugal-4065069_1280.jpg";
// https://pixabay.com/photos/pra%c3%a7a-do-com%c3%a9rcio-terreiro-do-pa%c3%a7o-1186240/
import PRACA_COMERCIO from "../assets/images/praca-do-comercio-1186240_1280.jpg";
// https://pixabay.com/photos/see-from-lisbon-viewpoint-lisbon-2825282/
import MIRADOURO from "../assets/images/see-from-lisbon-2825282_1280.jpg";

const Section = ({ title, icon: Icon, children }) => (
  <div className="mb-10">
    <div className="flex items-center mb-3">
      <Icon className="h-6 w-6 text-blue-600 mr-2" />
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-700 text-lg leading-relaxed">{children}</p>
  </div>
);

export default function TourismPage() {
  const [popupImage, setPopupImage] = useState(null);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPopupImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <div
        className="relative w-full h-64 md:h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${LISBON})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-60"></div>
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg text-cyan-900">
          Discover Lisbon & Portugal
        </h1>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        <p className="text-lg mb-6">
          While you’re here, take some time to explore Lisbon and the rest of Portugal. Below are
          highlights and tips to help you plan your visit.
        </p>

        <Section title="Key Monuments to Visit in Lisbon" icon={FaMapMarkerAlt}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                label: "Belém Tower",
                image: BELEM_TOWER,
                description: "Iconic riverside fortress from the Age of Discoveries.",
              },
              {
                label: "Jerónimos Monastery",
                image: JERONIMOS_MONASTERY,
                description:
                  "Masterpiece of Manueline architecture (a late Gothic style) in Belém.",
              },
              {
                label: "São Jorge Castle",
                image: SAO_JORGE_CASTLE,
                description: "Hilltop castle offering panoramic views of Lisbon.",
              },
              {
                label: "Alfama District",
                image: ALFAMA,
                description:
                  "Lisbon’s oldest neighborhood; a maze of streets, viewpoints, and Fado music.",
              },
              {
                label: "Praça do Comércio",
                image: PRACA_COMERCIO,
                description:
                  "Grand square facing the Tagus River. Rebuilt after the 1755 earthquake.",
              },
              {
                label: "Miradouros",
                image: MIRADOURO,
                description:
                  "Scenic viewpoints scattered across Lisbon offer stunning city views. Look out for Miradouro de Santa Catarina, Miradouro da Senhora do Monte, and Miradouro de São Pedro de Alcântara.",
              },
            ].map((item, i) => (
              <div key={i} className="border rounded-xl p-4 shadow-sm bg-white">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-44 object-cover rounded mb-2 cursor-pointer"
                  onClick={() => setPopupImage(item.image)}
                />
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>
        {popupImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            onClick={() => setPopupImage(null)}
          >
            <div
              className="relative bg-white p-4 rounded shadow-lg max-w-3xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <button
                className="absolute -top-3 -right-3 bg-white/80 backdrop-blur p-2 rounded-full shadow-md hover:bg-white transition"
                onClick={() => setPopupImage(null)}
              >
                <IoClose size={24} className="text-gray-700 hover:text-black" />
              </button>
              <img
                src={popupImage}
                alt="Large view"
                className="max-h-[80vh] max-w-full object-contain rounded"
              />
            </div>
          </div>
        )}

        <Section title="Traditional Portuguese Foods" icon={FaUtensils}>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Bacalhau</strong>: Portugal’s iconic salted cod, famously prepared in more
              than a hundred different ways.
            </li>
            <li>
              <strong>Pastel de Nata</strong>: The famous custard tarts. The original version is
              called <strong>Pastel de Belém</strong> and is sold exclusively at one pastry shop in
              Belém, but you can find many great pastéis de nata all over Lisbon.
            </li>
            <li>
              <strong>Grilled Sardines</strong>: June is traditionally the month of sardines in
              Lisbon, but they are still widely available throughout July.
            </li>
            <li>
              <strong>Polvo à Lagareiro</strong>: Roasted octopus with &ldquo;punched&rdquo;
              potatoes, garlic, and olive oil.
            </li>
            <li>
              <strong>Arroz de Marisco (Seafood Rice)</strong>: Rich, tomato-based rice packed with
              prawns, mussels, clams, and sometimes lobster. Unlike risotto, it’s meant to be brothy
              and soupy.
            </li>
            <li>
              <strong>Amêijoas à Bulhão Pato</strong>: Clams cooked in garlic, olive oil, white
              wine, and cilantro.
            </li>
            <li>
              <strong>Caldo Verde</strong>: Traditional kale and potato soup. Very popular in Lisbon
              and a staple during the city’s June celebrations.
            </li>
            <li>
              <strong>Alheira</strong>: Smoked sausage originally created by Portuguese Jews; today
              it’s a beloved comfort food.
            </li>
            <li>
              <strong>Cozido à Portuguesa</strong>: A hearty Portuguese stew of mixed meats,
              sausages, vegetables, potatoes, and rice. Not commonly eaten in the summer.
            </li>
          </ul>
        </Section>

        <Section title="For the Courageous Eaters" icon={() => <span className="text-xl">🦑</span>}>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Percebes</strong>: Gooseneck barnacles from the Atlantic coast.
            </li>
            <li>
              <strong>Morcela</strong>: Traditional Portuguese blood sausage (often included in
              Cozido à Portuguesa).
            </li>
            <li>
              <strong>Iscas</strong>: Pork liver, typically served with boiled potatoes.
            </li>
            <li>
              <strong>Caracóis</strong>: Small simmered snails, a beloved summer snack in Lisbon
              taverns, typically enjoyed with a cold beer.
            </li>
            <li>
              <strong>Dobrada</strong>: White bean stew with beef tripe, a Porto classic for the
              brave.
            </li>
          </ul>
        </Section>

        <Section title="Nature & Outdoor Spots Around Lisbon" icon={FaLeaf}>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Sintra</strong>: Palaces, lush gardens, and mystical forests.
            </li>
            <li>
              <strong>Arrábida Natural Park</strong>: Turquoise waters, dramatic cliffs, and quiet
              beaches.
            </li>
            <li>
              <strong>Cascais & Guincho Coast</strong>: Rugged coastline, surfing spots, and scenic
              bike paths.
            </li>
            <li>
              <strong>Cabo da Roca</strong>: The westernmost point of mainland Europe, with sweeping
              ocean views.
            </li>
            <li>
              <strong>Monsanto Forest Park</strong>: Lisbon’s “urban forest” with trails,
              viewpoints, and picnic spots.
            </li>
            <li>
              <strong>Costa da Caparica</strong>: Long sandy beaches, beach bars, and great sunsets.
            </li>
            <li>
              <strong>Tagus Estuary Natural Reserve</strong>: Bird-watching, wetlands, and peaceful
              riverside walks.
            </li>
          </ul>
        </Section>

        <Section title="Useful Travel Tips" icon={FaInfoCircle}>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>ATMs</strong>: Portugal has several ATM networks. The private ones charge
              extra fees. We recommend you{" "}
              <strong>use only the blue &ldquo;MB&rdquo; (Multibanco) machines</strong>. They do not
              add any fees beyond what your home bank charges.
            </li>
            <li>
              <strong>Power Plugs</strong>: Portugal uses Type C & F (&ldquo;German-style&rdquo;)
              plugs at <strong>230V / 50Hz</strong>.
            </li>
            <li>
              <strong>Weather in July</strong>: Expect warm, sunny days, typically{" "}
              <strong>26-32°C</strong> (79-90°F). Evenings are mild. Heatwaves can push temperatures
              higher (40°C / 100°F).
            </li>
            <li>
              <strong>Sun</strong>: July is very sunny; bring <strong>sunscreen</strong>,
              sunglasses, and a hat.
            </li>
            <li>
              <strong>Rain</strong>: July is one of the driest months; <strong>rain is rare</strong>
              .
            </li>
            <li>
              <strong>Currency</strong>: Portugal uses the <strong>Euro (€)</strong>. Cards are
              widely accepted, but small cafés and shops may impose a minimum for card payments (€5
              usually). Amex is rarely accepted.
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}
