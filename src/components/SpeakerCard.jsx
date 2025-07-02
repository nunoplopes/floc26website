import { motion } from "framer-motion";

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
            fill="true"
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

export default SpeakerCard;
