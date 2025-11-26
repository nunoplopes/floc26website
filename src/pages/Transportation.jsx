import {
  FaMapMarkedAlt,
  FaBus,
  FaTrain,
  FaTaxi,
  FaPlane,
  FaSubway,
  FaGlobeEurope,
} from "react-icons/fa";
import METROMAP from "../assets/images/map_metro.png";

const Section = ({ title, icon: Icon, children }) => (
  <div className="mb-10">
    <div className="flex items-center mb-3">
      <Icon className="h-6 w-6 text-blue-600 mr-2" />
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-700 text-lg leading-relaxed">{children}</p>
  </div>
);

// Main transportation component
export default function Transportation() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transportation in Lisbon
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the best way to reach the conference venue.
          </p>
        </div>

        {/* Metro */}
        <Section title="Metro" icon={FaSubway}>
          The Metro is one of the fastest and most reliable ways to get around the city. You can tap
          in directly at the gates using a contactless debit or credit card. There is no need to buy
          a separate ticket. <br />
          <br />
          Alternatively, you can purchase a <strong>24-hour public transport ticket</strong>, valid
          on metro, buses, trams, and trains within Lisbon. These are available at ticket machines
          inside metro stations. <br />
          You can also use the{" "}
          <a
            className="text-blue-600 underline"
            href="https://navegante.pt/viajar/tarifario-navegante"
          >
            Navegante pre-paid travel card
          </a>
          , which works across the entire public transport system, including metro, buses, trams,
          ferries, and regional CP trains within the Lisbon area. <br />
          <br />
          The metro runs daily from <strong>6:30 AM to 1:00 AM</strong>.
        </Section>

        {/* Metro Map Image */}
        <Section
          title="Lisbon Metro Map with Conference Location Marked"
          icon={FaMapMarkedAlt}
          className="mt-12 mb-16"
        >
          <div className="rounded-lg overflow-hidden shadow-lg border">
            <img
              src={METROMAP}
              alt="Lisbon Metro Map with Conference Location Marked"
              className="w-full"
            />
          </div>
        </Section>

        {/* Bus & Tram */}
        <Section title="Bus & Tram" icon={FaBus}>
          Buses and historic trams in Lisbon are operated by{" "}
          <a className="text-blue-600 underline" href="https://carris.pt/en/">
            Carris
          </a>
          . You can pay using a contactless debit or credit card (on newer buses only!), or by using
          the{" "}
          <a
            className="text-blue-600 underline"
            href="https://navegante.pt/viajar/tarifario-navegante"
          >
            Navegante pre-paid travel card
          </a>
          . This card is valid across the metro, buses, trams, and some regional trains. <br />
          <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md text-yellow-800">
            ⚠️ <strong>Important:</strong> Buses and trams do <em>not</em> stop by default. To
            board, you must <strong>extend your arm</strong> clearly as the vehicle approaches —
            this signals your intention to get on. To get off, press the red{" "}
            <strong>“stop” button</strong> in advance.
          </div>
        </Section>

        {/* Train */}
        <Section title="Regional Trains" icon={FaTrain}>
          Trains connect Lisbon with nearby cities like Sintra and Cascais. Use a{" "}
          <a
            className="text-blue-600 underline"
            href="https://navegante.pt/viajar/tarifario-navegante"
          >
            Navegante pre-paid travel card
          </a>{" "}
          or buy a ticket online at{" "}
          <a className="text-blue-600 underline" href="https://www.cp.pt/passageiros/en">
            CP.pt
          </a>{" "}
          or at a station.
          <br />
          <br />
          <strong>Stations with trains to Sintra:</strong> Alcântara-Terra, Campolide, Entrecampos,
          Rossio. <br />
          <strong>Stations with trains to Cascais:</strong> Alcântara-Mar, Belém, Cais do Sodré.
        </Section>

        {/* Taxi / Ride-hailing */}
        <Section title="Taxis & Ride-Hailing" icon={FaTaxi}>
          Taxis are widely available. Many accept cards, but ask first to be sure. Uber and Bolt are
          also available.
        </Section>

        <Section title="Travel Apps for Public Transport" icon={FaGlobeEurope}>
          <p>
            Using travel apps is the easiest way to navigate Lisbon’s public transportation. Popular
            options that provide real-time transit info, trip planning, and live updates include:
            <a href="https://maps.google.com" className="text-blue-600 underline ml-1">
              Google Maps
            </a>
            ,
            <a href="https://moovitapp.com" className="text-blue-600 underline ml-1">
              Moovit
            </a>
            , and
            <a href="https://transitapp.com" className="text-blue-600 underline ml-1">
              Transit
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  );
}
