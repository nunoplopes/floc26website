import { useMemo } from "react";
import { FaEnvelope, FaExclamationTriangle, FaQuoteLeft } from "react-icons/fa";

export default function FlocPolicies2026() {
  const contacts = useMemo(
    () => [
      {
        name: "Alexandra Silva",
        email: "alexandra.silva@cornell.edu",
      },
      {
        name: "Rajeev Alur",
        email: "alur@seas.upenn.edu",
      },
    ],
    [],
  );

  return (
    <div className="px-4 md:px-16 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">FLoC 2026 Policies</h1>

      <section className="grid gap-6">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <FaQuoteLeft className="h-5 w-5" aria-hidden />
            Code of Conduct (based on ACM’s code of conduct)
          </h2>
          <p className="leading-relaxed">
            The open exchange of ideas and the freedom of thought and expression are central to the
            values and goals of FLoC. They require an environment that recognizes the inherent worth
            of every person and group. They flourish in communities that foster mutual understanding
            and embrace diversity. For these reasons, FLoC is committed to providing a
            harassment-free conference experience.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <FaExclamationTriangle className="h-5 w-5" aria-hidden />
            Reporting & Remedy
          </h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Participants violating the standard above may be sanctioned or expelled from the
              meeting at the discretion of the conference organizers.
            </p>
            <p>
              If you believe that you or any FLoC Attendee has been subjected to any conduct of the
              type prohibited by this Policy by another Member or FLoC Attendee, you are urged to
              report the relevant facts promptly.
            </p>
            <p>
              Prompt reporting is very important so that FLoC can take action to stop the conduct
              before it is repeated. All reports will be followed up promptly, with further
              investigation conducted where needed to confirm facts or resolve disputed facts. In
              conducting its investigations, FLoC will strive to keep the identity of individuals
              making reports as confidential as possible.
            </p>

            <div className="rounded-xl border p-4">
              <h3 className="mb-2 text-base font-semibold">Who to Contact at FLoC</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {contacts.map((c) => (
                  <li key={c.email} className="flex items-center gap-3">
                    <p className="font-medium">{c.name}</p>
                    <a
                      href={`mailto:${c.email}?subject=FLoC%202026%20Policy%20Report`}
                      aria-label={`Email ${c.name}`}
                      className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 underline"
                    >
                      <FaEnvelope className="h-4 w-4" /> {c.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border p-4">
              <h3 className="mb-2 text-base font-semibold">For ACM Conferences (LICS)</h3>
              <p className="mb-3 text-sm text-slate-700">
                The reporting method for ACM conferences and ACM in-cooperation conferences is part
                of the{" "}
                <a
                  href="https://www.acm.org/special-interest-groups/volunteer-resources/officers-manual/policy-against-discrimination-and-harassment"
                  className="underline text-blue-700 hover:text-blue-900"
                >
                  ACM Policy
                </a>
                . Participants can report incidents to the conference organizers or{" "}
                <a
                  href="https://www.acm.org/about-acm/reporting-unacceptable-behavior"
                  className="underline text-blue-700 hover:text-blue-900"
                >
                  report to ACM directly
                </a>
                . Any remediation will ordinarily be at the discretion of and under the guidance of
                the relevant ACM officers, in accordance with the ACM policy. If you feel you have
                been falsely or unfairly accused of violating ACM’s Policy Against Harassment you
                should notify{" "}
                <a
                  href="mailto:advocate@acm.org"
                  className="underline text-blue-700 hover:text-blue-900"
                >
                  advocate@acm.org
                </a>{" "}
                with a concise description of your grievance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
