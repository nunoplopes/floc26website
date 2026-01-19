import STRIP from "../assets/images/strip-small.webp";
import { keyNoteSpeakers } from "./event data/speakers";
import { Link } from "react-router";

const SpeakerCard = ({ name, image, position, title, date }) => {
  return (
    <div className=" overflow-hidden w-full max-w-[240px] mx-auto">
      <div className="flex flex-col">
        <div className="relative w-full aspect-square rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 33vw"
          />
        </div>
        <div className="p-3 sm:p-4">
          <h2 className=" mb-1 text-left text-4xl text-blue-900 font-bold">{name}</h2>
          <p className="text-sm sm:text-base text-neutral-600 text-left mt-2">{position}</p>
          <p className="mt-3 text-sm sm:text-base font-semibold text-blue-800 leading-tight">
            {title}
          </p>
          <p className="mt-1 text-sm text-neutral-500">{date}</p>
        </div>
      </div>
    </div>
  );
};

const Speakers = () => {
  return (
    <section className="pb-[5rem] relative bg-white pt-10">
      <div className="text-center pt-5">
        <h2 className="text-blue-900 font-bold text-3xl md:text-6xl">Keynote Speakers</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-7 px-4 md:px-8 place-items-center mb-26 md:mb-24">
        {keyNoteSpeakers.map((speaker) => (
          <div key={speaker.id}>
            <Link to={`/speakers/${speaker.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <SpeakerCard
                name={speaker.name}
                image={speaker.image}
                position={speaker.position}
                title={speaker.title}
                date={speaker.date}
              />
            </Link>
          </div>
        ))}
      </div>

      <div
        className="absolute w-full h-25 bg-repeat-x"
        style={{ backgroundImage: `url(${STRIP})`, backgroundSize: "auto 100%" }}
      ></div>
    </section>
  );
};

export default Speakers;
