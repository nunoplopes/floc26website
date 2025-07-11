import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import STRIP from "../assets/images/strip-small.webp";
import { keyNoteSpeakers } from "./event data/speakers";
import { Link } from "react-router-dom";

const SpeakerCard = ({ name, image, position }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className=" overflow-hidden w-full max-w-[240px] mx-auto"
    >
      <div className="flex flex-col">
        {/* image card */}
        <div className="relative w-full aspect-square rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 33vw"
          />
        </div>
        {/* description */}
        <div className="p-3 sm:p-4">
          <h2 className=" mb-1 text-left text-4xl text-blue-900 font-bold">{name}</h2>
          <p className="text-sm sm:text-base text-neutral-600 text-left mt-2">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Speakers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="pb-[5rem] relative bg-white pt-10" ref={ref}>
      {/* Heading */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center pt-5"
      >
        <motion.h2 className="text-blue-900 font-bold text-3xl md:text-6xl" variants={itemVariants}>
          Keynote Speakers
        </motion.h2>
      </motion.div>

      {/* Speaker Cards */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-7 px-4 md:px-8 place-items-center mb-26 md:mb-24"
      >
        {keyNoteSpeakers.map((speaker) => (
          <motion.div key={speaker.id} variants={itemVariants}>
            <Link to={`/speakers/${speaker.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <SpeakerCard name={speaker.name} image={speaker.image} position={speaker.position} />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div
        className="absolute w-full h-25 bg-repeat-x"
        style={{ backgroundImage: `url(${STRIP})`, backgroundSize: "auto 100%" }}
      ></div>
    </section>
  );
};

export default Speakers;
