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
          <table className="min-w-full text-sm md:text-base border border-gray-300 rounded-lg">
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
                  earlyStudent: "TBA",
                  earlyRegular: "TBA",
                  regStudent: "TBA",
                  regRegular: "TBA",
                  onsite: "TBA",
                },
                {
                  label: "CSF IEEE member",
                  earlyStudent: "TBA",
                  earlyRegular: "TBA",
                  regStudent: "TBA",
                  regRegular: "TBA",
                  onsite: "TBA",
                },
                {
                  label: "CSF IEEE life member",
                  earlyStudent: "—",
                  earlyRegular: "TBA",
                  regStudent: "—",
                  regRegular: "TBA",
                  onsite: "TBA",
                },
                {
                  label: "CSF non-IEEE member",
                  earlyStudent: "TBA",
                  earlyRegular: "TBA",
                  regStudent: "TBA",
                  regRegular: "TBA",
                  onsite: "TBA",
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
          <table className="min-w-full text-sm md:text-base border border-gray-300 rounded-lg">
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
                  label: "DL",
                  earlyStudent: "TBA",
                  earlyRegular: "TBA",
                  regStudent: "TBA",
                  regRegular: "TBA",
                  onsite: "TBA",
                },
                {
                  label: "NMR (includes dinner)",
                  earlyStudent: "TBA",
                  earlyRegular: "TBA",
                  regStudent: "TBA",
                  regRegular: "TBA",
                  onsite: "TBA",
                },
                {
                  label: "2-day workshop",
                  earlyStudent: "TBA",
                  earlyRegular: "TBA",
                  regStudent: "TBA",
                  regRegular: "TBA",
                  onsite: "TBA",
                },
                {
                  label: "1-day workshop/tutorial",
                  earlyStudent: "TBA",
                  earlyRegular: "TBA",
                  regStudent: "TBA",
                  regRegular: "TBA",
                  onsite: "TBA",
                },
                {
                  label: "Dinner",
                  earlyStudent: "TBA",
                  earlyRegular: "TBA",
                  regStudent: "TBA",
                  regRegular: "TBA",
                  onsite: "TBA",
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

          <h2 className="text-2xl font-semibold text-blue-800 mt-16 mb-2">Summer Schools</h2>
          <table className="min-w-full text-sm md:text-base border border-gray-300 rounded-lg">
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
                <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">TBA</td>
                <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">TBA</td>
                <td className="px-4 py-3 text-center border-t border-l-2 border-gray-400">TBA</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-700">All prices are inclusive of Portuguese 23% VAT.</p>

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
