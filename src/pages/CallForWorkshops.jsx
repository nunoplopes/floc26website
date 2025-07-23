import { Link } from "react-router-dom";

const CallForWorkshops = () => {
  return (
    <div className="px-4 md:px-16 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Call for Workshops</h1>

      <p className="mb-6 text-lg text-gray-700 leading-relaxed">
        Researchers and practitioners are invited to submit proposals for workshops on topics in the
        field of computer science, related to logic in the broad sense. Each workshop proposal may
        be affiliated with one of the FLoC 2026 conferences, or it may be submitted as a general
        FLoC 2026 workshop without reference to a specific conference.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Important Dates</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          <strong>Submission of workshop proposals deadline:</strong> September 17, 2025
        </li>
        <li>
          <strong>Notification of Acceptance:</strong> October 10, 2025
        </li>
        <li>
          <strong>Workshop Dates - first block:</strong> July 18-19, 2026
        </li>
        <li>
          <strong>Workshop Dates - second block:</strong> July 24-25, 2026
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Proposal Guidelines</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Each proposal should consist of the following two parts:
      </p>

      <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-4">
        <li>
          A short scientific justification of the proposed topic, its significance, and the
          particular benefits of the workshop to one of the scientific communities using logic in
          computer science, as well as a list of previous or related workshops (if relevant).
        </li>
        <li>
          An organisational part including:
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Contact information for the workshop organizers</li>
            <li>Proposed affiliated conference</li>
            <li>
              Estimate of the number of workshop participants
              <span className="italic">
                {" "}
                (please note that small workshops, i.e., fewer than ~13 participants, will likely be
                cancelled or merged)
              </span>
            </li>
            <li>
              Proposed format and agenda (e.g. paper presentations, tutorials, demo sessions, etc.)
            </li>
            <li>Potential invited speakers</li>
            <li>Procedures for selecting papers and participants</li>
            <li>
              Plans for dissemination, if any
              <span className="italic"> (e.g. a journal special issue)</span>
            </li>
            <li>Duration (one or two days)</li>
            <li>Preferred period: first block (July 18-19) or second block (July 24-25)</li>
          </ul>
        </li>
      </ol>

      <p className="text-gray-700 mb-6 leading-relaxed">
        The FLoC Workshops Committee, chaired by the FLoC 2026 Workshops Chairs and formed by one
        representative for each FLoC 2026 affiliated conference, will determine the final list of
        accepted workshops based on scientific relevance and the availability of space and
        facilities.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Submission Instructions</h2>
      <p className="text-gray-700 mb-6">TBA </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Contact</h2>
      <p className="text-gray-700 mb-6">
        Specific questions regarding proposals for workshops affiliated with a specific conference
        should be sent to the Workshops Chairs of the proposed affiliated conference. General
        questions should be sent to the FLoC 2026 Workshops Chairs:{" "}
        <a
          href="mailto:alessandro.gianola@tecnico.ulisboa.pt"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Alessandro Gianola
        </a>{" "}
        and{" "}
        <a
          href="mailto:finkbeiner@cispa.de"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Bernd Finkbeiner
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">FLoC 2026 Workshops Committee</h2>

      <ul className="list-none text-gray-700 mb-6 space-y-1">
        <li>
          <strong>Alessandro Gianola</strong> (FLoC 2026 Workshops Chair)
        </li>
        <li>
          <strong>Bernd Finkbeiner</strong> (FLoC 2026 Workshops Chair)
        </li>
        <li>
          <strong>Daniel Kroening</strong> (CAV representative)
        </li>
        <li>
          <strong>Cynthia Kop</strong> (FSCD representative)
        </li>
        <li>
          <strong>Miguel Areias</strong> (ICLP representative)
        </li>
        <li>
          <strong>Mathias Fleury</strong> (IJCAR representative)
        </li>
        <li>
          <strong>Stefan Borgwardt</strong> (KR representative)
        </li>
        <li>
          <strong>Valentin Blot</strong> (LICS representative)
        </li>
        <li>
          <strong>Matthias Thimm</strong> (NMR representative)
        </li>
        <li>
          <strong>Friedrich Slivovsky</strong> (SAT representative)
        </li>
      </ul>
    </div>
  );
};

export default CallForWorkshops;
