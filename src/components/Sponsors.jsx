import { sponsors } from "./event data/sponsors";

const sponsorshipTiers = [
  { level: "Diamond", fontSize: "text-4xl", logoSize: "max-h-32" },
  { level: "Platinum", fontSize: "text-3xl", logoSize: "max-h-28" },
  { level: "Gold", fontSize: "text-3xl", logoSize: "max-h-28 min-h-[50px]" },
  { level: "Silver", fontSize: "text-2xl", logoSize: "max-h-24" },
  { level: "Bronze", fontSize: "text-2xl", logoSize: "max-h-14" },
  { level: "Institutional", fontSize: "text-xl", logoSize: "max-h-14" },
  { level: "Secretariat", fontSize: "text-xl", logoSize: "max-h-8", nosponsor: true },
];

const Sponsors = () => {
  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sponsorshipTiers.map((tier, idx) => {
          const tierSponsors = sponsors.filter((s) => s.type === tier.level);
          if (tierSponsors.length === 0) return null;

          return (
            <div key={idx} className="mb-12">
              {/* Tier Title */}
              <div className="mb-8">
                <h2 className={`text-center font-bold text-blue-50 ${tier.fontSize}`}>
                  {tier.level} {tier.nosponsor ? "" : "Sponsors"}
                </h2>
              </div>

              {/* Logos in flexible layout */}
              <div className="flex flex-wrap justify-center gap-6">
                {tierSponsors.map((sponsor, sponsorIdx) => (
                  <a
                    key={sponsorIdx}
                    href={sponsor.url}
                    className="bg-white rounded-lg p-3 shadow-md inline-flex items-center justify-center"
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className={`block ${tier.logoSize} h-auto w-auto min-w-[80px] min-h-[30px]`}
                    />
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
