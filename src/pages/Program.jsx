import { useState } from "react";
import { Link } from "react-router";
import { schedule } from "../components/event data/event";

const workshops_week1 = [
  {
    name: "19th Workshop on Answer Set Programming and Other Programming Paradigms (ASPOCP)",
    aff: "ICLP",
    start: 18,
    end: 18,
    link: null,
  },
  {
    name: "2nd Workshop on Cognitive Architectures for Robotics: LLMs and Logic in Action (CARLA)",
    aff: "ICLP",
    start: 18,
    end: 18,
    link: null,
  },
  {
    name: "Workshop on End-user Logic Programming (EULP)",
    aff: "ICLP",
    start: 18,
    end: 18,
    link: null,
  },
  {
    name: "Formal Methods for Quantum Computing (FMQC)",
    aff: null,
    start: 18,
    end: 18,
    link: null,
  },
  {
    name: "IFIP Working Group 1.6 (IFIP16)",
    aff: "IJCAR & FSCD",
    start: 18,
    end: 18,
    link: null,
  },
  {
    name: "12th Workshop on Intersection Types and Related Systems (ITRS)",
    aff: "FSCD",
    start: 18,
    end: 18,
    link: null,
  },
  {
    name: "Logic and Computational Complexity (LCC)",
    aff: "LICS",
    start: 18,
    end: 19,
    link: null,
  },
  {
    name: "Joint Workshop on Next-Generation Language Models for KKR, Reasoning and Ethics in LLMs and on Statistics and Knowledge Integration for Logic and Learning (LLMs)",
    aff: "KR",
    start: 18,
    end: 18,
    link: null,
  },
  {
    name: "Logical and Semantic Frameworks with Applications (LSFA)",
    aff: "FSCD",
    start: 18,
    end: 18,
    link: null,
  },
  {
    name: "Proof Complexity (PC)",
    aff: "SAT",
    start: 18,
    end: 18,
    link: null,
  },
  {
    name: "International Workshop on Experimental Evaluation of Algorithms for Solving Problems with Combinatorial Explosion (RCRA)",
    aff: "ICLP",
    start: 18,
    end: 18,
    link: null,
  },
  {
    name: "Tribute to Gilles Dowek (TGD)",
    aff: "FSCD",
    start: 18,
    end: 18,
    link: null,
  },
  {
    name: "Diagrams in Logic and Computation (DIALOCO)",
    aff: "LICS",
    start: 19,
    end: 19,
    link: null,
  },
  {
    name: "Joint Workshop on LLMs meet Constraint Solving and on Logic for Explainable AI Systems (LLM-Solve)",
    aff: null,
    start: 19,
    end: 19,
    link: null,
  },
  {
    name: "Mentoring Workshop - 1st week (MW1)",
    aff: null,
    start: 19,
    end: 19,
    link: "/mentoring-workshop",
  },
  {
    name: "25th Workshop on Constraint Modelling and Reformulation (ModRef)",
    aff: "CP",
    start: 19,
    end: 19,
    link: null,
  },
  {
    name: "Prolog Education Workshop (PEG)",
    aff: "ICLP",
    start: 19,
    end: 19,
    link: null,
  },
  {
    name: "Pragmatics of SAT (PoS)",
    aff: "SAT & CP",
    start: 19,
    end: 19,
    link: null,
  },
  {
    name: "Theorem Proving Components for Educational Software (ThEdu)",
    aff: null,
    start: 19,
    end: 19,
    link: null,
  },
  {
    name: "3rd International Workshop on Highlights in Organizing and Optimizing Proof-logging Systems (WHOOPS)",
    aff: "CP & SAT",
    start: 19,
    end: 19,
    link: null,
  },
  {
    name: "12th International Workshop on Rewriting Techniques for Program Transformations and Evaluation (WPTE)",
    aff: "FSCD",
    start: 19,
    end: 19,
    link: "https://wpte2026.github.io",
  },
];

const workshops_week2 = [
  {
    name: "Workshop on Abstract and Concrete Techniques in Verification (ACV)",
    aff: "LICS & CAV",
    start: 24,
    end: 25,
    link: null,
  },
  {
    name: "Workshop on Craig Interpolation, Beth Definability, and Second-Order Quantifier Elimination (CI-BD-SOQE)",
    aff: null,
    start: 24,
    end: 25,
    link: null,
  },
  {
    name: "Computational Methods in Systems Biology (CMSB)",
    aff: null,
    start: 24,
    end: 25,
    link: "https://arsr.inesc-id.pt/cmsb2026/",
  },
  {
    name: "28th International Workshop on Configuration (ConfWS)",
    aff: "CP",
    start: 24,
    end: 25,
    link: null,
  },
  {
    name: "15th International Workshop on Confluence (IWC)",
    aff: "FSCD",
    start: 24,
    end: 24,
    link: null,
  },
  {
    name: "Isabelle Workshop (Isabelle)",
    aff: "ITP & IJCAR",
    start: 24,
    end: 25,
    link: null,
  },
  {
    name: "Logical frameworks and meta-languages: Theory and Practice (LFMTP)",
    aff: "FSCD",
    start: 24,
    end: 24,
    link: null,
  },
  {
    name: "RajeevFest: A Celebration of Rajeev Alur (RajeevFest)",
    aff: "CAV",
    start: 24,
    end: 24,
    link: null,
  },
  {
    name: "Symposium on AI Verification (SAIV)",
    aff: "CAV",
    start: 24,
    end: 25,
    link: null,
  },
  {
    name: "24th International Workshop on Satisfiability Modulo Theories (SMT)",
    aff: "IJCAR",
    start: 24,
    end: 25,
    link: "https://smt-workshop.cs.uiowa.edu/2026/",
  },
  {
    name: "15th TPTP Tea Party (TPTPTP)",
    aff: "IJCAR",
    start: 24,
    end: 24,
    link: null,
  },
  {
    name: "40th International Workshop on Unification (UNIF)",
    aff: "FSCD & IJCAR",
    start: 24,
    end: 24,
    link: null,
  },
  {
    name: "9th Vampire Workshop (Vampire)",
    aff: "IJCAR",
    start: 24,
    end: 24,
    link: null,
  },
  {
    name: "Women in Logic (WiL)",
    aff: "LICS",
    start: 24,
    end: 25,
    link: null,
  },
  {
    name: "Joint Workshop on  Competitions and other Problem Solving Challenges and on the Design and Evaluation of Benchmark Sets for Formal Methods (Bench-Evaluations)",
    aff: null,
    start: 25,
    end: 25,
    link: null,
  },
  {
    name: "Workshop on Horn Clauses for Verification and Synthesis (HCVS)",
    aff: null,
    start: 25,
    end: 25,
    link: null,
  },
  {
    name: "Workshop on Logical Methods for Neural Network Analysis (LOGICNN)",
    aff: "KR",
    start: 25,
    end: 25,
    link: null,
  },
  {
    name: "Workshop on Counting, Sampling, and Synthesis (MC)",
    aff: "SAT",
    start: 25,
    end: 25,
    link: null,
  },
  {
    name: "Mentoring Workshop - 2nd week (MW2)",
    aff: null,
    start: 25,
    end: 25,
    link: "/mentoring-workshop",
  },
  {
    name: "Practical Aspects of Automated Reasoning (PAAR)",
    aff: "IJCAR",
    start: 25,
    end: 25,
    link: null,
  },
  {
    name: "Workshop on Synthesis (SYNT)",
    aff: "CAV",
    start: 25,
    end: 25,
    link: null,
  },
  {
    name: "Workshop on Synthesis (SYNT)",
    aff: "CAV",
    start: 25,
    end: 25,
    link: null,
  },
  {
    name: "Workshop on Verification of Probabilistic Programs (VeriProP)",
    aff: "CAV",
    start: 25,
    end: 25,
    link: null,
  },
  {
    name: "21st International Workshop on Termination and Termination and Complexity Competition (WST)",
    aff: "IJCAR",
    start: 25,
    end: 25,
    link: null,
  },
];

const link = ({ url, children }) => {
  return url ? (
    url.startsWith("http") ? (
      <a href={url}>{children}</a>
    ) : (
      <Link to={url}>{children}</Link>
    )
  ) : (
    children
  );
};

// Component to display a single conference
const ConferenceItem = ({ conf }) => {
  const content = (
    <div className="group relative p-4 rounded-xl shadow-sm hover:shadow-md border border-gray-100">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
      <p className="text-gray-700 text-base pl-4">{conf.name}</p>
    </div>
  );
  return <li>{link({ url: conf.link, children: content })}</li>;
};

// Component to display the program for a single week
const WeekProgram = ({ weekData }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6">
        <div className="flex items-center gap-4">
          <div className={("w-3 h-12 rounded-full", weekData.barColor)} />
          <div>
            <h3 className="text-2xl font-semibold text-white mb-1">{weekData.title}</h3>
            <p className="text-blue-100 text-base">
              {weekData.date} - {weekData.endDate}
            </p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {weekData.conferences?.map((conference, index) => (
            <ConferenceItem key={conference} conf={conference} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const WorkshopDayFilter = ({ selectedDay, onChange }) => {
  return (
    <div className="mb-8 flex justify-center">
      <select
        value={selectedDay}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 shadow-sm"
      >
        <option value="all">All workshop days</option>

        <optgroup label="Week 1">
          <option value="18">July 18</option>
          <option value="19">July 19</option>
        </optgroup>

        <optgroup label="Week 2">
          <option value="24">July 24</option>
          <option value="25">July 25</option>
        </optgroup>
      </select>
    </div>
  );
};

const WorkshopItem = ({ workshop }) => {
  const content = (
    <div className="p-4 bg-white rounded-xl border border-gray-200 hover:shadow transition">
      <h4 className="font-semibold text-blue-900 mb-1">{workshop.name}</h4>
      {workshop.aff && <p className="text-sm text-gray-700">Affiliated with {workshop.aff}</p>}
      <p className="text-sm text-gray-500">
        July {workshop.start}
        {workshop.start !== workshop.end && `-${workshop.end}`}
      </p>
    </div>
  );
  return link({ url: workshop.link, children: content });
};

const WorkshopList = ({ week1, week2 }) => {
  const [selectedDay, setSelectedDay] = useState("all");

  const matchesDay = (workshop) =>
    selectedDay === "all"
      ? true
      : workshop.start === Number(selectedDay) || workshop.end === Number(selectedDay);

  const filteredWeek1 = week1.filter(matchesDay);
  const filteredWeek2 = week2.filter(matchesDay);

  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-blue-900 mb-10 text-center">List of Workshops</h2>

      <WorkshopDayFilter selectedDay={selectedDay} onChange={setSelectedDay} />

      {/* Week 1 */}
      {filteredWeek1.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Workshops Week 1</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
            {filteredWeek1.map((w) => (
              <WorkshopItem key={w.name} workshop={w} />
            ))}
          </div>
        </>
      )}

      {/* Week 2 */}
      {filteredWeek2.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Workshops Week 2</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredWeek2.map((w) => (
              <WorkshopItem key={w.name} workshop={w} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Program = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 mt-7">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Program Overview</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Summer Schools */}
          <WeekProgram weekData={schedule.find((item) => item.title === "SUMMER SCHOOLS")} />

          {/* Workshop Pre Week */}
          <WeekProgram weekData={schedule.find((item) => item.date === "17")} />

          {/* Workshop Week 1 */}
          <WeekProgram weekData={schedule.find((item) => item.date === "18")} />

          {/* Conference Week 1 */}
          <WeekProgram weekData={schedule.find((item) => item.title === "WEEK 1")} />

          {/* Workshop Week 2 */}
          <WeekProgram weekData={schedule.find((item) => item.date === "24")} />

          {/* Conference Week 2 */}
          <WeekProgram weekData={schedule.find((item) => item.title === "WEEK 2")} />
        </div>

        <WorkshopList week1={workshops_week1} week2={workshops_week2} />
      </div>
    </div>
  );
};

export default Program;
