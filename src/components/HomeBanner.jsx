import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const images = [
  "/banner1.webp",
  "/banner2.webp",
  "/banner3.webp",
 
];

const SLIDE_DURATION = 6000;

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full  mx-auto overflow-hidden bg-gray-100">
      <img
        key={current}
        src={images[current]}
        alt={`Banner ${current + 1}`}
        loading="eager"
        decoding="async"
        className="w-full h-full object-center transition-opacity duration-700"
      />

      <div className="absolute bottom-0 left-0 w-full z-20 px-4 py-4 flex justify-between items-center">
        <div className="flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className="h-1 w-8 sm:w-10 bg-white/30 rounded-full overflow-hidden"
            >
              {index === current && (
                <div
                  className="h-full bg-white"
                  style={{
                    animation: `progress ${SLIDE_DURATION}ms linear`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faArrowRight} className="text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}
