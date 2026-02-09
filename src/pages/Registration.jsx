// https://pixabay.com/photos/ocean-sea-beach-waves-water-sand-6737634/
import IMG from "../assets/images/ocean-6737634_1280.jpg";

const Registration = () => {
  return (
    <div className="min-h-screen text-gray-800">
      <main className="w-full">
        <div
          className="relative w-full h-64 md:h-90 flex items-center justify-center"
          style={{
            backgroundImage: `url(${IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white opacity-20"></div>
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg text-white">Registration</h1>
        </div>

        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-8">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-2">Conferences</h2>
          <table className="text-sm md:text-base border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th
                  rowSpan={2}
                  className="px-4 py-3 text-left font-semibold border-b border-gray-300"
                >
                  Category
                </th>
                <th
                  colSpan={2}
                  className="px-4 py-3 text-center font-semibold border-b border-l-2 border-gray-400"
                >
                  Early (until 15/May)
                </th>
                <th
                  colSpan={2}
                  className="px-4 py-3 text-center font-semibold border-b border-l-2 border-gray-400"
                >
                  Late (until 13/July)
                </th>
                <th
                  rowSpan={2}
                  className="px-4 py-3 text-center font-semibold border-b border-l-2 border-gray-400"
                >
                  Onsite
                </th>
              </tr>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-center font-medium border-b border-l-2 border-gray-400">
                  Student
                </th>
                <th className="px-4 py-2 text-center font-medium border-b border-gray-400 border-l border-gray-200">
                  Regular
                </th>
                <th className="px-4 py-2 text-center font-medium border-b border-l-2 border-gray-400">
                  Student
                </th>
                <th className="px-4 py-2 text-center font-medium border-b border-gray-400 border-l border-gray-200">
                  Regular
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  label: "Conference (except CSF)",
                  earlyStudent: "€525",
                  earlyRegular: "€750",
                  regStudent: "€630",
                  regRegular: "€900",
                  onsite: "€1,100",
                },
                {
                  label: "CSF IEEE member",
                  earlyStudent: "€525",
                  earlyRegular: "€750",
                  regStudent: "€630",
                  regRegular: "€900",
                  onsite: "€1,100",
                },
                {
                  label: "CSF IEEE life member",
                  earlyStudent: "—",
                  earlyRegular: "€415",
                  regStudent: "—",
                  regRegular: "€495",
                  onsite: "€1,100",
                },
                {
                  label: "CSF non-IEEE member",
                  earlyStudent: "€630",
                  earlyRegular: "€900",
                  regStudent: "€760",
                  regRegular: "€1,080",
                  onsite: "€1,320",
                },
              ].map((row, idx) => (
                <tr key={row.label} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  <th className="px-4 py-3 text-left font-medium border-t border-gray-300">
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">
                    {row.earlyStudent}
                  </td>
                  <td className="px-4 py-3 text-center border-t border-gray-400 border-l border-gray-200">
                    {row.earlyRegular}
                  </td>
                  <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">
                    {row.regStudent}
                  </td>
                  <td className="px-4 py-3 text-center border-t border-gray-400 border-l border-gray-200">
                    {row.regRegular}
                  </td>
                  <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">
                    {row.onsite}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold text-blue-800 mt-16 mb-2">Workshops</h2>
          <table className="text-sm md:text-base border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th
                  rowSpan={2}
                  className="px-4 py-3 text-left font-semibold border-b border-gray-300"
                >
                  Category
                </th>
                <th
                  colSpan={2}
                  className="px-4 py-3 text-center font-semibold border-b border-l-2 border-gray-400"
                >
                  Early (until 1/June)
                </th>
                <th
                  colSpan={2}
                  className="px-4 py-3 text-center font-semibold border-b border-l-2 border-gray-400"
                >
                  Late (until 13/July)
                </th>
                <th
                  rowSpan={2}
                  className="px-4 py-3 text-center font-semibold border-b border-l-2 border-gray-400"
                >
                  Onsite
                </th>
              </tr>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-center font-medium border-b border-l-2 border-gray-400">
                  Student
                </th>
                <th className="px-4 py-2 text-center font-medium border-b border-gray-400 border-l border-gray-200">
                  Regular
                </th>
                <th className="px-4 py-2 text-center font-medium border-b border-l-2 border-gray-400">
                  Student
                </th>
                <th className="px-4 py-2 text-center font-medium border-b border-gray-400 border-l border-gray-200">
                  Regular
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "DL & NMR (includes the dinner below)",
                  earlyStudent: "€285",
                  earlyRegular: "€390",
                  regStudent: "€345",
                  regRegular: "€480",
                  onsite: "€575",
                },
                {
                  label: "2-day workshop",
                  earlyStudent: "€150",
                  earlyRegular: "€220",
                  regStudent: "€180",
                  regRegular: "€270",
                  onsite: "€330",
                },
                {
                  label: "1-day workshop/tutorial",
                  earlyStudent: "€75",
                  earlyRegular: "€110",
                  regStudent: "€90",
                  regRegular: "€135",
                  onsite: "€165",
                },
                {
                  label: "Dinner",
                  earlyStudent: "€60",
                  earlyRegular: "€60",
                  regStudent: "€75",
                  regRegular: "€75",
                  onsite: "€80",
                },
              ].map((row, idx) => (
                <tr key={row.label} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  <th className="px-4 py-3 text-left font-medium border-t border-gray-300">
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">
                    {row.earlyStudent}
                  </td>
                  <td className="px-4 py-3 text-center border-t border-gray-400 border-l border-gray-200">
                    {row.earlyRegular}
                  </td>
                  <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">
                    {row.regStudent}
                  </td>
                  <td className="px-4 py-3 text-center border-t border-gray-400 border-l border-gray-200">
                    {row.regRegular}
                  </td>
                  <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">
                    {row.onsite}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2">
            Note: The dinner takes place on day 1 of each workshop week, i.e., on 18 & 24 of July.
            Dinners are held at restaurants with limited capacity, and tickets are sold on a
            first-come, first-served basis until full.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-16 mb-2">Summer Schools</h2>
          <table className="text-sm md:text-base border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold border-b border-gray-300">
                  Category
                </th>
                <th className="px-4 py-3 text-center font-semibold border-b border-l-2 border-gray-400">
                  Early (until 1/June)
                </th>
                <th className="px-4 py-3 text-center font-semibold border-b border-l-2 border-gray-400">
                  Late (until 6/July)
                </th>
                <th className="px-4 py-3 text-center font-semibold border-b border-l-2 border-gray-400">
                  Onsite
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="px-4 py-3 text-left font-medium border-t border-gray-300">
                  All summer schools
                </th>
                <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">€200</td>
                <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">€250</td>
                <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">€300</td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-700">
            The summer school registration fee includes dinner on Wednesday, 22/July.
          </p>

          <p className="text-gray-700">All prices are inclusive of Portuguese 23% VAT.</p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-16 mb-2">
            Cancellation & Refund Policy
          </h2>
          <div className="text-gray-700 space-y-2 max-w-3xl">
            <p>
              <strong>Until 30 April 2026:</strong> Full refund of registration fees, minus
              administrative costs (€50).
            </p>
            <p>
              <strong>From 1 May to 15 June 2026:</strong> 50% refund of the registration fee, minus
              administrative costs (€50).
            </p>
            <p>
              <strong>After 15 June 2026:</strong> No refunds will be issued.
            </p>
          </div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Transfer of Registration</h2>
          <p>
            Registration may be transferred to another participant from the same institution or
            organization, subject to approval by the Organizing Committee. Transfer requests must be
            submitted in writing no later than <strong>30 June 2026</strong>.
          </p>

          {/*
          <div className="pt-4">
            <a
              href="TBD"
              className="inline-block px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Go to registration website →
            </a>
          </div>
*/}
        </section>

        <section
          className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          aria-labelledby="inquiries-heading"
        >
          <h2 id="inquiries-heading" className="text-2xl font-semibold text-blue-800 mb-4">
            Inquiries
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For any questions regarding registration, please contact the secretariat at{" "}
            <a
              href="mailto:floc26@the.pt"
              className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              aria-label="Email secretariat at floc26@the.pt"
            >
              floc26@the.pt
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default Registration;
