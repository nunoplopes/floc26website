const IJCAR = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-indigo-700 text-white py-10 text-center shadow-md">
        <h1 className="text-4xl font-bold">IJCAR 2026</h1>
        <h2 className="text-xl mt-2">International Joint Conference on Automated Reasoning</h2>
        <h3 className="text-lg mt-1">Part of FLoC 2026</h3>
        <p className="mt-4 text-gray-200">
          Dates: <strong>July 26-29, 2026</strong>
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Important Dates</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Abstract submission: <strong>xx, 2026</strong>
            </li>
            <li>
              Paper submission: <strong>xx, 2026</strong>
            </li>
            <li>
              Notification: <strong>xx, 2026</strong>
            </li>
            <li>
              Camera-ready <strong>xx, 2026</strong>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Program Committee</h2>
          <ul className="space-y-2">
            <li>TBA</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Paper Submission</h2>
          <a
            href="https://submissions.floc26.org/ijcar/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Submit via HotCrp
          </a>
        </section>
      </main>
    </div>
  );
};

export default IJCAR;
