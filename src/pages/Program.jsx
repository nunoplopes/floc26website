import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { schedule } from "../components/event data/event";

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Custom hook to detect when an element is in view
const useInView = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    }, options);

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [options]);

  return { ref, inView };
};

// Component to display a single conference
const ConferenceItem = ({ conf, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

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

const Program = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 mt-7">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Program Overview</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Summer School */}
          <WeekProgram weekData={schedule.find((item) => item.title === "SUMMER SCHOOL")} />

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
      </div>
    </div>
  );
};

export default Program;
