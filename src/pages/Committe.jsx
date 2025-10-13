import { committeeData } from "../components/event data/data";
import MONUMENT from "../assets/images/skylinetram.png";

const MemberImage = ({ member }) => {
  const imageSource = member.image;

  if (!imageSource) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        <svg className="w-14 h-14 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={imageSource}
        alt={member.name}
        sizes="(max-width: 768px) 112px, 112px"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const Committe = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="w-full h-[50dvh] py-32 relative flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-40 z-0"
          style={{
            backgroundImage: `url(${MONUMENT})`,
          }}
        />
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#00008B] mb-6">
              FLoC 2026 Committees
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen w-full">
        <div className="w-full">
          {/* Organizers Section */}
          <section className="my-5 py-7 overflow-hidden">
            {" "}
            {/* Added overflow-hidden for safety with x-axis animations if used */}
            <h2 className=" text-3xl font-bold text-blue-900 mb-8 text-center">
              FLoC&apos;26 Organizers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-5 gap-x-4">
              {" "}
              {/* Added gap-x */}
              {committeeData.organizers.map((member, index) => (
                <div
                  key={`${member.name}-${index}-org`}
                  className="w-full max-w-md" // Added max-width for better responsiveness in grid
                >
                  <div className="flex items-center py-5 px-3 gap-4 bg-white shadow-lg rounded-lg">
                    {" "}
                    {/* Card styling */}
                    <div
                      className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-amber-400 
                                    rounded-tl-[3rem] rounded-br-[3rem] 
                                    rounded-tr-lg rounded-bl-lg 
                                    overflow-hidden shadow-md"
                    >
                      <MemberImage member={member} />
                    </div>
                    <div className="space-y-1 flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold text-blue-600">
                        <a
                          href={member.webpage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {member.name}
                        </a>
                      </h3>
                      <p className="text-amber-600 text-sm sm:text-base font-medium">
                        {member.affiliation}
                      </p>
                      <p className="text-neutral-500 font-normal text-xs sm:text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conference Committees Section */}
          <section className="bg-blue-900 w-full py-10 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-neutral-50">
              Conference Committees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-5 gap-x-4 w-full">
              {committeeData.conferenceCommittees.map((member, index) => (
                <div key={`${member.name}-${index}-conf`} className="w-full max-w-md">
                  <div className="flex items-center p-5 gap-4 bg-blue-800 shadow-lg rounded-lg">
                    {" "}
                    {/* Card styling */}
                    <div
                      className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-amber-400 
                                    rounded-tl-[3rem] rounded-br-[3rem] 
                                    rounded-tr-lg rounded-bl-lg 
                                    overflow-hidden shadow-md"
                    >
                      <MemberImage member={member} />
                    </div>
                    <div className="space-y-1 flex-grow">
                      <a
                        href={member.webpage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-white font-bold text-2xl"
                      >
                        {member.name}
                      </a>
                      <p className="text-neutral-200 text-sm sm:text-base">{member.affiliation}</p>
                      <p className="text-neutral-400 font-normal text-xs sm:text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Program Committees Section */}
          <section className="bg-yellow-500 py-10 overflow-hidden">
            <h2
              className="text-3xl md:text-4xl text-center font-bold text-blue-900 py-5 mb-5" // Adjusted mb
            >
              Program Committees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-5 gap-x-4 w-full">
              {committeeData.programCommittees.map((member, index) => (
                <div key={`${member.name}-${index}-prog`} className="w-full max-w-md">
                  <div className="flex items-center p-5 gap-4 bg-yellow-400 shadow-lg rounded-lg">
                    {" "}
                    {/* Card styling */}
                    <div
                      className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-blue-900
                                    rounded-tl-[3rem] rounded-br-[3rem] 
                                    rounded-tr-lg rounded-bl-lg 
                                    overflow-hidden shadow-md"
                    >
                      <MemberImage member={member} />
                    </div>
                    <div className="space-y-1 flex-grow">
                      <p className="text-blue-800 font-bold text-xs sm:text-sm">{member.role}</p>
                      <a
                        href={member.webpage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-900 font-bold text-lg"
                      >
                        {member.name}
                      </a>
                      <p className="text-blue-900/80 text-sm sm:text-base">{member.affiliation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Steering Committee Section */}
          <section className="py-10 bg-blue-900 overflow-hidden">
            {" "}
            <h2 className="text-3xl md:text-4xl text-center font-bold text-neutral-50 mb-10 py-5">
              FLoC&apos;26 Steering Committee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-5 gap-x-4 w-full">
              {committeeData.steeringCommittee.map((member, index) => (
                <div key={`${member.name}-${index}-steer`} className="w-full max-w-md">
                  <div className="flex items-center p-5 gap-4 bg-blue-800 shadow-lg rounded-lg">
                    {" "}
                    {/* Card styling */}
                    <div
                      className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-amber-400 
                                    rounded-tl-[3rem] rounded-br-[3rem] 
                                    rounded-tr-lg rounded-bl-lg 
                                    overflow-hidden shadow-md"
                    >
                      <MemberImage member={member} />
                    </div>
                    <div className="space-y-1 flex-grow">
                      <a
                        href={member.webpage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-neutral-50 font-bold text-lg"
                      >
                        {member.name}
                      </a>
                      <p className="text-neutral-200 text-sm sm:text-base">{member.affiliation}</p>
                      <p className="text-neutral-400 font-normal text-xs sm:text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Committe;
