import { Link, useParams } from "react-router";
import { keyNoteSpeakers } from "../components/event data/speakers";

const SpeakersId = () => {
  const params = useParams();
  const speaker = keyNoteSpeakers.find(
    (speaker) => speaker.name.toLowerCase().replace(/\s+/g, "-") === params.name.toLowerCase(),
  );

  if (!speaker) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Speaker Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutrl-800 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/speakers" className="inline-block mb-8 mt-10 text-blue-600 hover:text-blue-500">
          ← Back to List of Keynote Speakers
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img src={speaker.image} alt={speaker.name} className="w-full rounded-lg" />
          </div>

          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-neutral-800">{speaker.name}</h1>
              <p className="text-blue-600 font-medium text-xl">{speaker.position}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{speaker.title}</h2>
              <p className="mt-2 text-lg font-medium text-gray-500">{speaker.date}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Abstract</h3>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                {speaker.abstract}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Speaker Bio</h3>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">{speaker.bio}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Website</h3>
              <a href={speaker.link} className="text-blue-600 hover:text-blue-500">
                {speaker.link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersId;
