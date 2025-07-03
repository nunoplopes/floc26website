const Registration = () => {
  return (
    <div className="min-h-screen text-gray-800">
      <main className=" md:py-16 w-full">
        {/* Main Heading */}
        <div className="flex items-center justify-center text-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16">
            Registration
          </h1>
        </div>

        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <p>The registration fees will be announced in early 2026.</p>
        </section>

        {/* Registration Fees Section 
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 md:mb-16 mx-2 mt-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Conference and Workshop Fees (in Euros)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white text-left">
                  <th className="p-3 rounded-tl-lg">Category</th>
                  <th className="p-3 text-center">Early Bird (until June 20)</th>
                  <th className="p-3 text-center">Regular (until July 20)</th>
                  <th className="p-3 text-center rounded-tr-lg">Walk-in (after July 20)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-blue-50">
                  <td className="p-3 font-medium text-blue-800">Regular</td>
                  <td className="p-3 text-center">{registrationFees[0].earlyBirdRegular}</td>
                  <td className="p-3 text-center">{registrationFees[0].regularRegular}</td>
                  <td className="p-3 text-center">{registrationFees[0].walkInRegular}</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50">
                  <td className="p-3 font-medium text-blue-800"> Regular Student</td>
                  <td className="p-3 text-center">{registrationFees[0].earlyBirdStudent}</td>
                  <td className="p-3 text-center">{registrationFees[0].regularStudent}</td>
                  <td className="p-3 text-center">{registrationFees[0].walkInStudent}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl shadow-lg p-6 md:p-8 mb-12 md:mb-16 bg-amber-500 mx-2">
          <h2 className="text-3xl font-bold text-neutral-50 mb-8 text-center">Workshop</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white text-left">
                  <th className="p-3 rounded-tl-lg">Category</th>
                  <th className="p-3 text-center">Early Bird (until June 20)</th>
                  <th className="p-3 text-center">Regular (until July 20)</th>
                  <th className="p-3 text-center rounded-tr-lg">Walk-in (after July 20)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-blue-500/30">
                  <td className="p-3 font-medium text-white">Regular</td>
                  <td className="p-3 text-center font-semibold text-neutral-700">
                    {registrationFees[0].earlyBirdRegular}
                  </td>
                  <td className="p-3 text-center font-semibold text-neutral-700">
                    {registrationFees[0].regularRegular}
                  </td>
                  <td className="p-3 text-center font-semibold text-neutral-700">
                    {registrationFees[0].walkInRegular}
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-500/30">
                  <td className="p-3 font-medium text-white">Regular Student</td>
                  <td className="p-3 text-center font-semibold text-neutral-700">
                    {registrationFees[1].earlyBirdRegularStudent}
                  </td>
                  <td className="p-3 text-center font-semibold text-neutral-700">
                    {registrationFees[1].regularRegularStudent}
                  </td>
                  <td className="p-3 text-center font-semibold text-neutral-700">
                    {registrationFees[1].walkInRegularStudent}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> *}

        {/* Contact Information Section */}
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
