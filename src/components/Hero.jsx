import HERO from "../assets/images/hero.webp";
import FLOC from "../assets/images/floc.png";

const Hero = () => {
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
        />
      </div>
    </section>
  );
};

export default Hero;
