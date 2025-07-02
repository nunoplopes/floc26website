import React from "react";
import HERO from "../assets/images/hero.webp";
import FLOC from "../assets/images/floc.png";

const Hero = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section className="relative w-full bg-neutral-100 h-auto ">
      {/* for medium and large screen device */}
      <img src={HERO} alt="hero content" className="hidden md:block w-full h-auto object-cover" />

      {/* floc image for mobile */}
      <div className="md:hidden w-full flex justify-center items-center">
        <img
          src={FLOC}
          alt="floc2026"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
