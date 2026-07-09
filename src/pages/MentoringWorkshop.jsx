import { useState } from "react";
import AWS from "../assets/images/sponsors/aws.png";
import JANESTREET from "../assets/images/mwsponsors/janestreet.png";
import SIGLOG from "../assets/images/mwsponsors/siglog.png";

const MentoringWorkshop = () => {
  const week1 = [
    {
      time: "09:00",
      speaker: "Informal Meet & Greet",
      title: "",
      details: "",
      type: "break",
    },
    {
      time: "09:30",
      speaker: "Kickoff",
      title: "",
      details: "",
      type: "panel",
    },
    {
      time: "09:40",
      speaker: "Ichiro Hasuo",
      affiliation: "NII Tokyo",
      homepage: "https://group-mmm.org/~ichiro/",
      title: "Finding Mathematical Problems in the Jungle of Automated Driving",
      details:
        "Logical analysis in formal methods (FM) require mathematically rigorous modeling of the target system. This may be easy for conventional software (where programs can serve as models), but not so for emerging ICT systems such as cyber-physical and statistical ML systems. When faced with a novel application domain such as automated driving (AD)—it is a jungle with all the hard-to-model nuisances such as physical components, ML-based E2E controllers, human drivers and pedestrians, and regulations—cutting out an 'FM angle' from it is therefore challenging yet important. I will share my experience of doing so in this talk. I will also make a (perhaps biased) case on the roles of category theory, a subfield of FM that seems quite the opposite of practical application, in this “reality-math matching” problem.",
      type: "talk",
    },
    {
      time: "10:10",
      speaker: "Ice Breakers",
      title: "",
      details: "",
    },
    {
      time: "10:30",
      speaker: "Coffee break",
      title: "",
      details: "",
      type: "break",
    },
    {
      time: "11:00",
      speaker: "Jakub Gajarský",
      affiliation: "Masaryk University and University of Warsaw, Poland",
      homepage: "https://sites.google.com/view/jakubgajarsky/",
      title: "How to Present Your Work Without Losing the Audience",
      details:
        "As researchers presenting our work at conferences and workshops, we routinely face the challenge of condensing complex ideas into a short presentation. Unfortunately, this often leads to dense slides and too many new notions introduced in rapid succession. Consequently, listeners can become quickly overwhelmed, losing focus within the first few minutes. I will discuss how to properly prepare a talk so that it is accessible to a large part of the audience while still effectively getting your message across.",
      type: "talk",
    },
    {
      time: "11:30",
      speaker: "Anela Lolić",
      affiliation: "TU Wien, Austria",
      homepage: "https://www.anelalolic.com/",
      title: "Rethinking Soundness: From Local Rules to Global Correctness",
      details:
        "This talk explores how proof systems are formed, and how intermediate inference steps that are not sound in isolation can still contribute to correct reasoning when embedded in an appropriate structure. We also briefly reflect on how similar patterns appear in the development of ideas in research, where intermediate reasoning is often only validated within a broader structural context.",
      type: "talk",
    },
    {
      time: "12:00",
      speaker: "Tommie Meyer",
      affiliation: "University of Cape Town, South Africa",
      homepage: "https://tommiemeyer.org.za/",
      title: "How to Manage Your Supervisor",
      details:
        "In this talk I will argue that, contrary to popular belief, PhD supervisors are human too. I will then proceed to provide some pointers on how to manipulate them to enable you to complete your PhD thesis in time. ",
      type: "talk",
    },
    {
      time: "12:30",
      speaker: "Lunch",
      title: "",
      details: "",
      type: "break",
    },
    {
      time: "14:00",
      speaker: "Sandra Kiefer",
      affiliation: "University of Oxford, UK",
      homepage: "https://www.cs.ox.ac.uk/people/sandra.kiefer/",
      title: "On the Relativity of Expertise",
      details:
        "Topics in our research field are inherently complex, and staying up to date with progress is a constant challenge. Crucially, research environments are also shaped by a wealth of tacit knowledge and implicit standards. In my talk, I will argue that it is important to reflect on and communicate about learning journeys—what we have learnt, how we have learnt it, and what we should perhaps unlearn. I will explore how we can have these conversations in a way that builds a sense of belonging to the community. Along the way, I will share my thoughts on the role of relativity and subjectivity in the process. The talk builds on my Women in Logic 2024 presentation 'Constructive Interactions' and integrates the results from a subsequent survey I conducted.",
      type: "talk",
    },
    {
      time: "14:30",
      speaker: "PhD Student Panel",
      title: "Ask a question!",
      details: (
        <p>
          Panelists: Neha Rino (University of Warwick), Vincent Moreau (Tallinn University of
          Technology), Yoàv Montacute (NII Tokyo).
          <br />
          Submit your questions anonymously via{" "}
          <a href="https://onlinequestions.org/" className="text-indigo-600 hover:underline">
            {"https://onlinequestions.org/"}
          </a>
          , event number 119250726.
        </p>
      ),
      type: "panel",
    },
    {
      time: "15:30",
      speaker: "Coffee break",
      title: "",
      details: "",
      type: "break",
    },
    {
      time: "16:00",
      speaker: "Nada Amin",
      affiliation: "Harvard University, USA",
      homepage: "https://namin.seas.harvard.edu/",
      title: "Follow the Fun",
      details:
        "I always achieve more in my work when I give myself freedom to play and explore. When the process is fun, it is its own reward, regardless of the outcome. In research, play is how projects get started, and (fun-induced) persistence is how they are brought to fruition.",
      type: "talk",
    },
    {
      time: "16:30",
      speaker: "Researchers Panel",
      title: "Ask a question!",
      details: (
        <p>
          Panelists: Nada Amin, Tommie Meyer, Ichiro Hasuo, Sandra Kiefer.
          <br />
          Submit your questions anonymously via{" "}
          <a href="https://onlinequestions.org/" className="text-indigo-600 hover:underline">
            {"https://onlinequestions.org/"}
          </a>
          , event number 219250726.
        </p>
      ),
      type: "panel",
    },
  ];

  const week2 = [
    {
      time: "09:00",
      speaker: "Informal Meet & Greet",
      title: "",
      details: "",
      type: "break",
    },
    {
      time: "09:30",
      speaker: "Kickoff",
      title: "",
      details: "",
      type: "panel",
    },
    {
      time: "09:40",
      speaker: "Orna Grumberg",
      affiliation: "Technion, Israel",
      homepage: "https://orna.cswp.cs.technion.ac.il/",
      title: "Symbolic Model Checking: From Program Verification to Constrained Horn Clauses",
      details:
        "Program verification emerged in the late 1960s as a way to determine whether a program satisfies a given specification by translating the problem into a logical question. A decade later, model checking introduced the possibility of automating this verification process. Since the general verification problem is undecidable, early model-checking techniques focused on finite-state systems and propositional temporal properties, where automatic analysis is feasible. Despite its remarkable success, extending model checking to realistic software systems and richer classes of properties remains an active area of research. Recently, Constrained Horn Clauses (CHCs) have emerged as a powerful framework for reasoning about program correctness, particularly with respect to safety properties. In this presentation, we introduce CHCs and illustrate how they can be applied for proving safety properties and beyond.",
      type: "talk",
    },
    {
      time: "10:10",
      speaker: "Ice Breakers",
      title: "",
      details: "",
    },
    {
      time: "10:30",
      speaker: "Coffee break",
      title: "",
      details: "",
      type: "break",
    },
    {
      time: "11:00",
      speaker: "Sebastian Siebertz",
      affiliation: "University of Bremen, Germany",
      homepage: "https://www.uni-bremen.de/en/theorie/team/profiles/prof-dr-sebastian-siebertz",
      title: "A Day in the Life of a Faculty Diversity Manager",
      details:
        "For the past two years, I have been the Diversity Manager of the Faculty of Mathematics and Computer Science at the University of Bremen. In this talk, I will give an insight into my everyday work: supporting students in difficult situations, identifying barriers faced by people from diverse backgrounds, and developing measures to make faculty life more inclusive. I will also speak about our outreach activities, current challenges, and the small and large steps we take to improve participation, belonging, and equal opportunities in our faculty.",
      type: "talk",
    },
    {
      time: "11:30",
      speaker: "Yannick Forster",
      affiliation: "Inria Paris, France",
      homepage: "https://yforster.de/",
      title: "Using Proof Assistants as More Than Checkers, and How to Write Papers About It",
      details:
        "I will give a personally biased overview of projects in the space of interest for FLoC where proof assistants were used as more than proof checkers, covering amongst others results around Hilbert's tenth problem, the fifth busy beaver value, and computability. I will complement this by some general observations how to write up results of research projects involving proof assistants, trying to start an interactive discussion on how this differs to writing papers in general. I hope that the discussions scales to other tool use such as SAT or SMT solvers, and that the talk also sheds light on the question what makes a good research paper.",
      type: "talk",
    },
    {
      time: "12:00",
      speaker: "Claudia Cauli",
      affiliation: "Huawei R&D, UK",
      homepage: "https://claudiacauli.com/",
      title:
        "Taming State-Space Explosion in Cloud Accounts: Finding Privilege Escalation at Scale",
      details:
        "Privilege escalations are complex attack paths through which a user gains unintended access to a resource. The user chains together multiple operations—each one legitimate and authorized in isolation, such as creating new users; updating, attaching, or detaching policies; or assuming roles—until these assemble into a path that reaches a privilege they were never meant to have. At Huawei Cloud, we developed an SMT-based bounded model checking procedure that detects escalation paths of up to 5 steps, directly from a customer's account. Unsurprisingly, for large customers with thousands of deeply intertwined entities, the state space explodes as the search goes deeper. To make this scale, we applied sound state-space reductions. The soundness proof comes down to simulation, a well-known abstract technique I never expected to use at industrial scale. Thanks to this work, Huawei Cloud customers can now find 5-step privilege escalations in sub-second runtimes.",
      type: "talk",
    },
    {
      time: "12:30",
      speaker: "Lunch",
      title: "",
      details: "",
      type: "break",
    },
    {
      time: "14:00",
      speaker: "Loris D'Antoni",
      affiliation: "UCSD & Code Metal, USA",
      homepage: "https://cseweb.ucsd.edu/~ldantoni/",
      title: "Your Next Big Idea Is Just a Few Small Ideas Away",
      details:
        "A lot of researchers struggle with finding their “next big idea,” and can get stuck waiting around until they see the whole path before starting anything new. In this talk, I’ll reflect on my own research journey (which started with automata theory and ended up spanning synthesis, networks, personalized education, and LLMs) and how many of the directions that shaped my work emerged not from following a fixed master plan, but from pursuing small ideas that gradually changed where I thought I was going. My goal is to share a perspective on how research directions actually develop in practice—and why consistently exploring and working through interesting questions often matters more than trying to predict the final destination from the start.",
      type: "talk",
    },
    {
      time: "14:30",
      speaker: "PhD Student Panel",
      title: "Ask a question!",
      details: (
        <p>
          Panelists: Sarah Salinger (TU Wien), Elisaveta Pertseva (Stanford University), Arthur
          Correnson (CISPA).
          <br />
          Submit your questions anonymously via{" "}
          <a href="https://onlinequestions.org/" className="text-indigo-600 hover:underline">
            {"https://onlinequestions.org/"}
          </a>
          , event number 119250726.
        </p>
      ),
      type: "panel",
    },
    {
      time: "15:30",
      speaker: "Coffee break",
      title: "",
      details: "",
      type: "break",
    },
    {
      time: "16:00",
      speaker: "Caterina Urban",
      affiliation: "Inria & ENS, France",
      homepage: "https://caterinaurban.github.io/",
      title: "What I Got Right, What I Got Wrong, and What Happened Anyway: Lessons from My Path",
      details:
        "Career paths are shaped by a mix of deliberate choices, mistakes, and events beyond our control. In this talk, I reflect on decisions I believe I got right, choices I would make differently, and outcomes that unfolded regardless of intent — sometimes due to luck, sometimes to bad timing. Rather than presenting a recipe for success, the goal is to share concrete lessons about uncertainty, timing, and resilience, and to highlight what can (and cannot) be influenced along the way. I hope these reflections will help others navigate their own paths with more clarity, patience, and perspective.Career paths are shaped by a mix of deliberate choices, mistakes, and events beyond our control. In this talk, I reflect on decisions I believe I got right, choices I would make differently, and outcomes that unfolded regardless of intent — sometimes due to luck, sometimes to bad timing. Rather than presenting a recipe for success, the goal is to share concrete lessons about uncertainty, timing, and resilience, and to highlight what can (and cannot) be influenced along the way. I hope these reflections will help others navigate their own paths with more clarity, patience, and perspective.",
      type: "talk",
    },
    {
      time: "16:30",
      speaker: "Researchers Panel",
      title: "Ask a question!",
      details: (
        <p>
          Panelists: Claudia Cauli, Caterina Urban, Loris D'Antoni, Orna Grumberg, Christine
          Rizkallah.
          <br />
          Submit your questions anonymously via{" "}
          <a href="https://onlinequestions.org/" className="text-indigo-600 hover:underline">
            {"https://onlinequestions.org/"}
          </a>
          , event number 219250726.
        </p>
      ),
      type: "panel",
    },
  ];

  const [expandedRows, setExpandedRows] = useState(new Set());

  const toggleRow = (index) => {
    const next = new Set(expandedRows);

    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }

    setExpandedRows(next);
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-indigo-700 text-white py-16 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-tight">FLoC&apos;26 MW</h1>
        <h2 className="text-2xl mt-2 font-medium">FLoC 2026 Mentoring Workshop</h2>
        <h3 className="text-lg mt-1 font-light">Part of FLoC 2026</h3>
        <p className="mt-4 text-gray-200 text-lg">
          Dates: <strong>19 July and 25 July 2026</strong>
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <section>
          <div className="space-y-6 text-xl text-neutral-600 leading-relaxed">
            <p>
              The purpose of the FLoC 2026 Mentoring Workshop (FLoC&apos;26 MW) is to provide
              mentoring and career advice to senior undergraduate and junior researchers at all
              stages, to attract them to pursue research careers in various logic-related areas. The
              workshop will particularly encourage the participation of women and underrepresented
              minorities.
            </p>
            <p>
              There will be two workshop days, one for each FLoC conference block, to target more
              specifically students going to the first or the second conference week, and allow
              every student to be mentored before attending the conferences. The workshop program
              will include several talks and interactive sessions. Following the tradition of
              mentoring workshops, the talks will introduce a number of soft skills essential to the
              PhD and post-doc years, as well as brief introductions to the varied topics
              highlighted at FLoC. Each workshop day will feature an interactive panel, where
              students can ask questions to academics with a variety of seniority.
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b border-indigo-200 pb-2">
            Programme Day 1 (19 July 2026)
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg">
                <tbody>
                  {week1.map((item, index) => (
                    <>
                      <tr
                        key={`row-${index}`}
                        className={item.type === "break" ? "bg-gray-200" : "bg-white"}
                      >
                        <td className="border px-4 py-2 w-15">{item.time}</td>

                        {item.type === "talk" || item.type == "panel" ? (
                          <td className="border px-4 py-2 w-50">
                            <a href={item.homepage} className="hover:underline font-semibold">
                              {item.speaker}
                            </a>
                          </td>
                        ) : (
                          <td className="border px-4 py-2 w-50">{item.speaker}</td>
                        )}

                        <td className="border px-4 py-2">
                          <button
                            type="button"
                            onClick={() => toggleRow(index)}
                            className="text-left text-indigo-600 font-semibold hover:underline w-full"
                          >
                            {item.title}
                          </button>
                        </td>
                      </tr>

                      {expandedRows.has(index) && (
                        <tr key={`details-${index}`}>
                          <td colSpan={3} className="text-left border px-4 py-4 bg-indigo-50">
                            {item.details}
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b border-indigo-200 pb-2">
            Programme Day 2 (25 July 2026)
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg">
                <tbody>
                  {week2.map((item, index) => (
                    <>
                      <tr
                        key={`row-${index}`}
                        className={item.type === "break" ? "bg-gray-200" : "bg-white"}
                      >
                        <td className="border px-4 py-2 w-15">{item.time}</td>

                        {item.type === "talk" || item.type == "panel" ? (
                          <td className="border px-4 py-2 w-50">
                            <a href={item.homepage} className="hover:underline font-semibold">
                              {item.speaker}
                            </a>
                          </td>
                        ) : (
                          <td className="border px-4 py-2 w-50">{item.speaker}</td>
                        )}

                        <td className="border px-4 py-2">
                          <button
                            type="button"
                            onClick={() => toggleRow(index)}
                            className="text-left font-semibold text-indigo-600 hover:underline w-full"
                          >
                            {item.title}
                          </button>
                          <br />
                        </td>
                      </tr>

                      {expandedRows.has(index) && (
                        <tr key={`details-${index}`}>
                          <td colSpan={3} className="text-left border px-4 py-4 bg-indigo-50">
                            {item.details}
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold">All invited speakers</h3>
            <ul>
              {week1.map((item, index) =>
                item.type === "talk" ? (
                  <li>
                    <a href={item.homepage} className="text-indigo-600 hover:underline">
                      {item.speaker}
                    </a>
                    {", "}
                    {item.affiliation}
                  </li>
                ) : (
                  <></>
                ),
              )}
              {week2.map((item, index) =>
                item.type === "talk" ? (
                  <li>
                    <a href={item.homepage} className="text-indigo-600 hover:underline">
                      {item.speaker}
                    </a>
                    {", "}
                    {item.affiliation}
                  </li>
                ) : (
                  <></>
                ),
              )}
            </ul>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b border-indigo-200 pb-2">
            Student Sponsorship
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Students (undergrad, master&apos;s, and PhD alike) can apply to have their costs (some
              or all) covered by our sponsors.
            </p>
            <ul>
              <li>Deadline for applications: 13 April. We no longer accept applications.</li>
              <li>
                Apply at:{" "}
                <a
                  href="https://forms.gle/89q9AaNfZV3fkMzD7"
                  className="text-indigo-600 hover:underline"
                >
                  {"https://forms.gle/89q9AaNfZV3fkMzD7"}
                </a>
              </li>
              <li>Notification: 20 April</li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b border-indigo-200 pb-2">
            FLoC Buddy
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Is this the first conference you will attend in person? We have all been there. You
              might not feel comfortable if you don&apos;t know anyone. We will have a Buddy
              Programme, where we will help you to get in touch with another mentoring-workshop
              attendee. Every newcomer will be assigned either a more experienced peer or another
              newcomer, so you are not alone. For those who are not attending a conference for the
              first time, being a buddy is a way for you to help the community to grow and introduce
              less experienced students to the field. If you are interested, please sign up for the
              Buddy Programme via the following form:{" "}
              <a
                href="https://forms.gle/Gjy4jejM9GinP2897"
                className="text-indigo-600 hover:underline"
              >
                {"https://forms.gle/Gjy4jejM9GinP2897"}
              </a>
              .
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b border-indigo-200 pb-2">
            Organisers
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="https://svbergerem.de" className="text-indigo-600 hover:underline">
                Steffen van Bergerem
              </a>
              , Humboldt-Universität zu Berlin
            </li>
            <li>
              <a href="https://joaoff.com" className="text-indigo-600 hover:underline">
                João F. Ferreira
              </a>
              , INESC-ID &amp; IST, University of Lisbon
            </li>
            <li>
              <a href="https://aisychev.github.io" className="text-indigo-600 hover:underline">
                Anastasia Isychev
              </a>
              , TU Wien
            </li>
            <li>
              <a
                href="https://lipn.univ-paris13.fr/~kerjean/"
                className="text-indigo-600 hover:underline"
              >
                Marie Kerjean
              </a>
              , CNRS, Université Sorbonne Paris Nord
            </li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b border-indigo-200 pb-2">
            Anti-harassment Policy
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We follow the{" "}
              <a
                href="https://www.acm.org/about-acm/policy-against-harassment"
                className="text-indigo-600 hover:underline"
              >
                guidance of ACM
              </a>{" "}
              in our policy against harassment and unacceptable behaviour. If you experience any
              such behaviour, please report it to the organisers.
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b border-indigo-200 pb-2">
            Past Events
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              FLoC&apos;26 MW will build on the success of the{" "}
              <a
                href="https://www.floc2022.org/flocmentoringworkshop"
                className="text-indigo-600 hover:underline"
              >
                FLoC 2022 Mentoring Workshop (FLoC&apos;22 MW)
              </a>{" "}
              and of similar workshops such as the{" "}
              <a
                href="https://logic-mentoring-workshop.github.io"
                className="text-indigo-600 hover:underline"
              >
                Logic Mentoring Workshop (LMW)
              </a>{" "}
              at LICS and CSL, the{" "}
              <a
                href="https://conferences.i-cav.org/2025/mentoring/"
                className="text-indigo-600 hover:underline"
              >
                Verification Mentoring Workshop (VMW)
              </a>{" "}
              at CAV, and the{" "}
              <a
                href="https://pldi25.sigplan.org/series/PLMW"
                className="text-indigo-600 hover:underline"
              >
                Programming Languages Mentoring Workshops (PLMWs)
              </a>
              .
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b border-indigo-200 pb-2">
            Sponsors
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="mb-12">
              <h2 className="text-center text-3xl font-bold">Gold Sponsors</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://aws.amazon.com"
                  className="px-3 inline-flex items-center justify-center"
                >
                  <img
                    src={AWS}
                    alt="AWS"
                    className="block max-w-52 h-auto w-auto min-w-[80px] min-h-[30px]"
                  />
                </a>
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-center text-2xl font-bold">Bronze Sponsors</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://www.janestreet.com"
                  className="p-3 inline-flex items-center justify-center"
                >
                  <img
                    src={JANESTREET}
                    alt="Jane Street"
                    className="block max-w-52 h-auto w-auto min-w-[80px] min-h-[30px]"
                  />
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-center text-xl font-bold">Institutional Sponsors</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://siglog.org"
                  className="p-3 inline-flex items-center justify-center"
                >
                  <img
                    src={SIGLOG}
                    alt="SIGLOG"
                    className="block max-w-52 h-auto w-auto min-w-[80px] min-h-[30px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MentoringWorkshop;
