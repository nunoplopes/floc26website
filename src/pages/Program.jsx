import { useState } from "react";
import { Link } from "react-router";
import { schedule } from "../components/event data/event";

const workshops_week1 = [
  {
    name: "IFIP Working Group 1.6",
    start: 18,
    end: 18,
    link: null,
  },
];

const workshops_week2 = [
  {
    name: "Computational Methods in Systems Biology (CMSB)",
    start: 24,
    end: 25,
    link: "https://arsr.inesc-id.pt/cmsb2026/",
  },
];

// Component to display a single conference
const ConferenceItem = ({ conf }) => {
  return (
    <li className="group relative p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <p className="text-gray-700 text-base pl-4">
        {conf.link ? (
          conf.link.startsWith("http") ? (
            <a href={conf.link}>{conf.name}</a>
          ) : (
            <Link to={conf.link}>{conf.name}</Link>
          )
        ) : (
          <>{conf.name}</>
        )}
      </p>
    </li>
  );
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
      <h4 className="font-semibold text-blue-900">{workshop.name}</h4>
      <p className="text-sm text-gray-500">
        July {workshop.start}
        {workshop.start !== workshop.end && `-${workshop.end}`}
      </p>
    </div>
  );
  return workshop.link ? <a href={workshop.link}>{content}</a> : content;
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
