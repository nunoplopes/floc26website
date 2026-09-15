import { Link } from "react-router";
import FLOC from "../assets/images/floc.png";
import HERO from "../assets/images/hero.webp";

const Hero = () => {
  return (
    <section className="relative w-full bg-neutral-100 h-auto ">
      {/* for medium and large screen device */}
      <img src={HERO} alt="FLoC 2026" className="hidden md:block w-full h-auto object-cover" />

      {/* floc image for mobile */}
      <div className="md:hidden w-full flex justify-center items-center">
        <img
          src={FLOC}
          alt="FLoC 2026"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-full bg-indigo-700 text-white text-center py-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold">FLoC 2026 is Over</h2>
        <p className="mt-2 text-indigo-100 max-w-2xl mx-auto">
          Thank you to everyone who joined us in Lisbon! Remember the event in our{" "}
          <Link to="/photos" className="underline font-semibold hover:text-white">
            photo gallery
          </Link>
          .
        </p>
        <p className="mt-2 text-indigo-100">The location of FLoC 2030 will be announced soon.</p>
      </div>
    </section>
  );
};

export default Hero;
