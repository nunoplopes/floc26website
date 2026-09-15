import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const photoModules = import.meta.glob("../assets/photos/*.avif", {
  eager: true,
  import: "default",
});

const photos = Object.keys(photoModules)
  .sort()
  .map((path) => photoModules[path]);

const Photos = () => {
  const [selected, setSelected] = useState(null);

  const showPrev = useCallback(() => {
    setSelected((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, []);

  const showNext = useCallback(() => {
    setSelected((i) => (i === null ? null : (i + 1) % photos.length));
  }, []);

  useEffect(() => {
    if (selected === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selected, showPrev, showNext]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-indigo-700 text-white py-16 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-tight">Photos</h1>
        <h3 className="text-lg mt-1 font-light">Moments from FLoC 2026</h3>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-10">
        <section className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 space-y-4">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/wF5J6QdluOM`}
              title="FLoC 2026 Promo Video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="text-center text-gray-700">
            Watch recordings of the keynotes and award ceremonies on our{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLHMwZg1REUik"
              className="text-indigo-600 hover:underline font-semibold"
            >
              YouTube playlist
            </a>
            .
          </p>
        </section>

        <section>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {photos.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelected(i)}
                className="block aspect-square overflow-hidden rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <img
                  src={src}
                  alt={`FLoC 2026, photo ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </button>
            ))}
          </div>
        </section>
      </main>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          tabIndex={-1}
          onClick={() => setSelected(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setSelected(null);
          }}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <IoClose size={32} />
          </button>

          <button
            type="button"
            className="absolute left-2 md:left-6 text-white/80 hover:text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
          >
            <FaChevronLeft size={28} />
          </button>

          <img
            src={photos[selected]}
            alt={`FLoC 2026, photo ${selected + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="absolute right-2 md:right-6 text-white/80 hover:text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <FaChevronRight size={28} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {selected + 1} / {photos.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
