import LISBON from "../assets/images/lisbonsky.png";
import STRIP from "../assets/images/strip-small.webp";

const About = () => {
  return (
    <section className="w-full relative pb-20 pt-10 ">
      {/* secton title */}
      <div className="w-full text-center text-4xl font-bold text-blue-900">
        <h2>About FLoC</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-20 md:mb-32">
        {/* first col */}
        <div className="flex flex-col items-center justify-center text-left px-4 text-xl mt-5 space-y-2 text-neutral-500">
          <p>
            Over the past forty years, there has been extensive, continuous, and growing interaction
            between logic and computer science. In many ways, logic provides computer science with
            both a unifying foundational framework and a powerful tool for modeling.
          </p>
          <p>
            Logic is considered &ldquo;the calculus of computer science,&rdquo; playing a pivotal
            role in diverse fields such as artificial intelligence, computational complexity,
            distributed computing, database systems, hardware design, programming languages, and
            software engineering.
          </p>
        </div>

        {/* second col */}
        <div className="px-2 mt-3">
          <img src={LISBON} alt="lisbon sky" width={600} height={400} className="w-full h-auto" />
        </div>
      </div>

      <div
        className="absolute w-full h-25 bg-repeat-x"
        style={{ backgroundImage: `url(${STRIP})`, backgroundSize: "auto 100%" }}
      ></div>
    </section>
  );
};

export default About;
