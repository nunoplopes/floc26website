const Tourism = () => {
  const attractions = [
    {
      title: "Belém Tower",
      description: "A 16th-century fortification and UNESCO World Heritage site",
      image: "https://i.pinimg.com/736x/45/f4/95/45f4950708364534c9f78cc6ed51ba5e.jpg",
    },
    {
      title: "Jerónimos Monastery",
      description: "A stunning example of Portuguese Gothic architecture",
      image: "https://i.pinimg.com/736x/3f/9a/2f/3f9a2f3f8eb0f14b034234541b311970.jpg",
    },
    {
      title: "Alfama District",
      description: "Lisbon's oldest neighborhood with narrow streets and Fado music",
      image: "https://i.pinimg.com/736x/63/0b/92/630b9297afa8728f762cb88fbf1a19a6.jpg",
    },
  ];

  const practicalInfo = [
    {
      title: "Getting Around",
      content:
        "Lisbon has an excellent public transportation system including metro, trams, and buses. The iconic Tram 28 is a must-try experience.",
    },
    {
      title: "Best Time to Visit",
      content:
        "July is perfect for visiting Lisbon, with warm weather and plenty of sunshine. Average temperatures range from 20°C to 28°C.",
    },
    {
      title: "Local Cuisine",
      content:
        "Don't miss trying Pastéis de Nata, Bacalhau, and fresh seafood. Lisbon offers a vibrant food scene with many excellent restaurants.",
    },
  ];
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] w-full"
        style={{
          background: `url("https://i.pinimg.com/736x/d7/d7/1a/d7d71ab13a3a88fb0d3fda20f57bd53a.jpg")`,
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Discover Lisbon</h1>
            <p className="text-xl md:text-2xl">Experience the charm of Portugal's capital city</p>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-20 px-4 md:px-20">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Must-Visit Attractions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  fill="true"
                  className="object-cover h-60 w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Information */}
      <section className="bg-blue-900 text-white py-20 px-4 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Practical Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practicalInfo.map((info, index) => (
            <div key={index} className="bg-blue-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{info.title}</h3>
              <p className="text-blue-100">{info.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Ready to Explore Lisbon?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join us at FLOC 2026 and experience the perfect blend of academic excellence and cultural
          discovery.
        </p>
      </section>
    </div>
  );
};

export default Tourism;
