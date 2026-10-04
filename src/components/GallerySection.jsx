import React from "react";

import img1 from "/celebrations1.webp";
import img2 from "/celebrations2.webp";
import img3 from "/celebrations3.webp";
import img4 from "/celebrations4.webp";
import img5 from "/celebrations5.webp";
import img6 from "/celebrations6.webp";

const images = [
  { id: 1, title: "Annual Day Celebration", src: img1 },
  { id: 2, title: " Independence Day", src: img2 },
  { id: 3, title: "Republic Day", src: img3 },
  { id: 4, title: "Children's Day", src: img4 },
  { id: 5, title: "Sports Day", src: img5 },
  { id: 6, title: "Cultural Activities", src: img6 },
];

const GallerySection = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* ===== Section Header ===== */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our School Gallery
          </h2>
          <div className="w-40 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-500 text-sm md:text-base">
            A glimpse into our vibrant campus life, achievements, and activities.
          </p>
        </div>

        {/* ===== Gallery Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img) => (
            <div
              key={img.id}
              className="
                group relative
                rounded-2xl overflow-hidden
                bg-white
                shadow-md
                hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                loading="eager"
  fetchpriority="high"
  decoding="async"
                className="
                  w-full h-64
                  object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-sm font-semibold text-slate-900 text-center">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
