import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-neutrl-800 py-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/speakers" className="inline-block mb-8 mt-10 text-blue-600 hover:text-blue-500">
          ← Back to List of Keynote Speakers
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
            {/* Speaker Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=""
            >
              <img src={speaker.image} alt={speaker.name} width={500} height={500} className="" />
            </motion.div>

            {/* Speaker Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-3 md:col-span-2"
            >
              <h1 className="text-3xl font-bold text-neutral-800 mb-2">{speaker.name}</h1>
              <p className="text-blue-600 font-medium mb-4 text-xl">{speaker.position}</p>
              <p className="text-gray-600 mb-6 text-xl">{speaker.description}</p>

              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Website</h2>
                <a
                  href={speaker.link}
                  className="text-blue-600 hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {speaker.link}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SpeakersId;
