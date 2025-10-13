import { Link } from "react-router";
import { schedule } from "./event data/event";

const Events = () => {
  return (
    <div className="bg-blue-900 text-white py-10 px-4 md:px-20">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Programme</h1>
      <p className="text-lg text-center text-blue-300 mb-10">
        July<sup>26</sup>
      </p>
      <div className="relative border-l-4 border-dotted border-blue-200 ml-6 md:ml-16">
        {schedule.map((item, index) => (
          <div key={index} className="mb-10 pl-6 relative flex flex-col md:flex-row md:items-start">
            <div className="absolute left-[-0.6rem] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-blue-500"></div>
            <div className="w-full md:w-1/4 text-2xl font-bold text-white">
              {item.date}
              {item.endDate && ` - ${item.endDate}`}
            </div>
            <div className="w-full md:w-3/4">
              <div className={`font-semibold text-xl mb-2 ${item.color || "text-white"}`}>
                {item.title}
              </div>
              {item.conferences && (
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-blue-100">
                  {item.conferences.map((conf, idx) => (
                    <li key={idx}>
                      {conf.link ? (
                        conf.link.startsWith("http") ? (
                          <a href={conf.link}>{conf.name}</a>
                        ) : (
                          <Link to={conf.link}>{conf.name}</Link>
                        )
                      ) : (
                        <>{conf.name}</>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
