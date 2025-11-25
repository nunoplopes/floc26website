import { FaHotel, FaPlane } from "react-icons/fa";
import Vueling from "../assets/images/vueling.svg";

const Section = ({ title, icon: Icon, children }) => (
  <div className="mb-10">
    <div className="flex items-center mb-3">
      <Icon className="h-6 w-6 text-blue-600 mr-2" />
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-700 text-lg leading-relaxed">{children}</p>
  </div>
);

export default function Accommodation() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Traveling to and Staying in Lisbon
          </h1>
        </div>

        <Section title="Getting to Lisbon" icon={FaPlane}>
          Lisbon’s only airport is <strong>Humberto Delgado Airport (LIS)</strong>, located inside
          the city. It’s connected via metro (Red Line). <br />
          <br />
          <strong>On a tight budget?</strong> It’s worth checking flights into{" "}
          <strong>Porto (OPO)</strong> or <strong>Faro (FAO)</strong>, as they often have lower-cost
          international connections. From either city, you can travel to Lisbon by:
          <ul className="list-disc pl-5 mt-2">
            <li>
              <strong>Train</strong> (
              <a className="text-blue-600 underline" href="https://www.cp.pt/passageiros/en">
                CP
              </a>
              ) : ~3 hours from Porto, ~3.5 hours from Faro
            </li>
            <li>
              <strong>Bus</strong> (
              <a className="text-blue-600 underline" href="https://rede-expressos.pt/en">
                Rede Expressos
              </a>{" "}
              or{" "}
              <a className="text-blue-600 underline" href="https://global.flixbus.com">
                Flixbus
              </a>
              ) : ~3–4 hours
            </li>
          </ul>
          <div className="mt-6">
            🚉 <strong>Train arrivals:</strong> Lisbon has two main train stations:
            <ul className="list-disc pl-5 mt-2">
              <li>
                <strong>Oriente</strong>: well-connected via metro (Red Line) and close to the
                airport
              </li>
              <li>
                <strong>Santa Apolónia</strong>: located closer to the historic city center (Blue
                Metro Line)
              </li>
            </ul>
          </div>
          <div className="mt-6">
            🚌 <strong>Bus terminals:</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>
                <strong>Oriente</strong>: shared with the train station and metro (Red Line)
              </li>
              <li>
                <strong>Sete Rios</strong>: accessible via metro (Blue Line, Jardim Zoológico
                station)
              </li>
            </ul>
          </div>
          <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md text-yellow-800">
            <p className="text-base leading-relaxed">
              ⚠️ <strong>Be especially cautious at the Oriente Bus Terminal.</strong> The platform
              area is open-air and not secured — there have been occasional reports of luggage
              theft. Keep your bags close and don’t leave items unattended.
            </p>
          </div>
        </Section>

        <Section title="New Border Rules" icon={() => <span className="text-2xl">🛂</span>}>
          <p>
            Starting in 2025, the European Union is implementing the new{" "}
            <strong>Entry/Exit System (EES)</strong>. This system applies to all non-EU nationals
            entering the Schengen Area for short stays and replaces the old passport stamping
            procedure.
          </p>
          <ul className="list-disc pl-5 mt-3">
            <li>
              <strong>Who is affected?</strong> Visitors from visa-exempt countries (US, UK, Canada,
              Australia, etc) and those requiring short-stay visas.
            </li>
            <li>
              <strong>What is collected?</strong> Facial image, fingerprints, and biographical
              passport data upon first entry.
            </li>
            <li>
              <strong>Where does it apply?</strong> All Schengen border crossing points, including
              Lisbon Airport.
            </li>
            <li>
              <strong>Do visa-exempt travellers need to fill in a form in advance?</strong> No. This
              will only be required once{" "}
              <a
                href="https://travel-europe.europa.eu/en/etias"
                className="text-blue-600 underline"
              >
                ETIAS
              </a>{" "}
              becomes operational, which will not happen before FLoC&apos;26.
            </li>
          </ul>
          <p className="mt-3">
            For official information, visit the{" "}
            <a href="https://travel-europe.europa.eu/en/ees" className="text-blue-600 underline">
              official EU website
            </a>
            .
          </p>
        </Section>

        <Section title="Hotels with Reduced Rates" icon={FaHotel}>
          <p>
            FLoC has negotiated reduced rates with several nearby hotels. Use the booking link or
            promo code provided by the hotel when booking.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold">Hotel 3K Europa (3*)</h3>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Rates:</span> €135 (Single room), €140
                (Double room)
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Address:</span> Av. da República 93,
                1050-190 Lisbon
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Distance:</span> 1.0 km from venue
              </p>
              <p className="mt-2 text-sm">
                <a href="https://bit.ly/4gDH1FE" className="text-blue-600 underline">
                  Book now
                </a>
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-bold">Hotel Roma (3*)</h3>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Rates:</span> 10% discount on best rate
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Address:</span> Av. de Roma 33, 1749-074
                Lisbon
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Distance:</span> 1.4 km from venue
              </p>
              <p className="mt-2 text-sm">
                <a href=": https://www.hotelroma.pt" className="text-blue-600 underline">
                  Book now
                </a>{" "}
                (use promo code &ldquo;FLOC&rdquo;)
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-bold">NH Lisboa Campo Grande (4*)</h3>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Rates:</span> €150 (Single room), €160
                (Double room)
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Address:</span> Campo Grande, 7,
                1700-087 Lisbon
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Distance:</span> 0.4 km from venue
              </p>
              <p className="mt-2 text-sm">
                <a
                  href="https://www.nh-hotels.com/en/event/federated-logistic-conference-2026"
                  className="text-blue-600 underline"
                >
                  Book now
                </a>
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-bold">VIP Executive Entrecampos Hotel (4*)</h3>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Rates:</span> €166 (Single room), €178
                (Double room)
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Address:</span> Av. 5 de Outubro, 295,
                1600-035 Lisbon
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Distance:</span> 0.4 km from venue
              </p>
              <p className="mt-2 text-sm">
                <a
                  href="https://www.viphotels.com/en/Menu/Hotels/Portugal/Vip-Executive-Entrecampos/About-Hotel.aspx?utm_source=affilired&utm_medium=cpa&_affclk=adn%3a3817%3a%3aCjwKCAjwn6LABhBSEiwAsNJrjmpXhkvIYJBgTDSi3Rjy13aq5Gb7D2R2NTZ_DFayiHX2WjUirCJkPBoCsLYQAvD_BwE%3a8002y1"
                  className="text-blue-600 underline"
                >
                  Book now
                </a>{" "}
                (use promo code &ldquo;FLOC26&rdquo;)
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-bold">SANA Metropolitan Hotel (4*)</h3>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Rates:</span> €130 (Single room), €150
                (Double room)
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Address:</span> Rua Soeiro Pereira Gomes
                2, 1600-198 Lisbon
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Distance:</span> 0.7 km from venue
              </p>
              <p className="mt-2 text-sm">
                Book by sending an email to{" "}
                <a
                  href="mailto:alexandra.ramalho@sanahotels.com"
                  className="text-blue-600 underline"
                >
                  alexandra.ramalho@sanahotels.com
                </a>{" "}
                with the code &ldquo;FLoC26&rdquo;
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-bold">Hotel Açores Lisboa (4*)</h3>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Rates:</span> €149 (Single room), €161
                (Double room)
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Address:</span> Av. Columbano Bordalo
                Pinheiro 3, 1070-060 Lisbon
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Distance:</span> 1.8 km from venue
              </p>
              <p className="mt-2 text-sm">
                Book by sending an email to{" "}
                <a href="mailto:grupos.hal@bhc.pt" className="text-blue-600 underline">
                  grupos.hal@bhc.pt
                </a>{" "}
                with the code &ldquo;FLoC&rdquo;
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-bold">Tivoli Oriente Lisboa Hotel (4*)</h3>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Rates:</span> €200 (Single room), €215
                (Double room)
              </p>
              <p className="text-sm">
                Address: Av. D. João II 27 - Parque das Nações, 1990-079 Lisbon
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Distance:</span> 6.4 km from venue
                (Metro: Red Line)
              </p>
              <p className="mt-2 text-sm">
                <a
                  href="https://www.nh-hotels.com/en/event/federated-logistic-conference-2026-tivoli-oriente"
                  className="text-blue-600 underline"
                >
                  Book now
                </a>
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-bold">Sheraton Lisboa Hotel &amp; Spa (5*)</h3>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Rates:</span> €220 (Single room), €250
                (Double room)
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Address:</span> Rua Latino Coelho 1,
                1050-234 Lisbon
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-700">Distance:</span> 2.1 km (Metro: Yellow
                Line)
              </p>
              <p className="mt-2 text-sm">
                Book by sending an email to{" "}
                <a href="mailto:groups.lisboa@sheraton.com" className="text-blue-600 underline">
                  groups.lisboa@sheraton.com
                </a>{" "}
                with the code &ldquo;FLoC&rdquo;
              </p>
            </div>
          </div>
        </Section>

        <Section title="Discounted Airfares" icon={FaPlane}>
          <p>
            FLoC attendees can access special discounted fares from our partner airlines. Use the
            links below to book.
          </p>
          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-6">
              <a href="https://www.dpbolvw.net/click-101479577-15736023" className="inline-block">
                <img
                  src="https://www.awltovhc.com/image-101479577-12119570"
                  width={150}
                  height={150}
                  alt="Iberia logo"
                />
              </a>

              <a
                href="https://www.jdoqocy.com/click-101479577-15733900"
                className="inline-block h-36 w-36"
              >
                <div className="h-full w-full bg-gray-100 flex items-center justify-center rounded-md border">
                  <img src={Vueling} alt="Vueling logo" className="max-h-full max-w-full" />
                </div>
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
