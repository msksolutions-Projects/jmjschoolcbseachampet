import React from "react";

import img1 from "/gallery1.webp";
import img2 from "/gallery2.webp";
import img3 from "/gallery3.webp";
import img4 from "/gallery4.webp";
import img5 from "/gallery5.webp";
import img6 from "/gallery6.webp";
import img7 from "/gallery7.webp";
import img8 from "/gallery8.webp";
import img9 from "/gallery9.webp";
import img10 from "/gallery10.webp";
import img11 from "/gallery11.webp";
import img12 from "/gallery12.webp";
import img13 from "/gallery13.webp";
import img14 from "/gallery14.webp";
import img15 from "/gallery15.webp";
import img16 from "/gallery16.webp";
import img17 from "/gallery17.webp";
import img18 from "/gallery18.webp";
import img19 from "/gallery19.webp";
import img20 from "/gallery20.webp";
import img21 from "/gallery21.webp";

const images = [
  { id: 1, title: "School Building", src: img1 },
  { id: 2, title: "Classroom Activities", src: img2 },
  { id: 3, title: "Sports Event", src: img3 },
  { id: 4, title: "Cultural Program", src: img4 },
  { id: 5, title: "School Assembly", src: img5 },
  { id: 6, title: "Library Section", src: img6 },
  { id: 7, title: "Science Lab", src: img7 },
  { id: 8, title: "Computer Lab", src: img8 },
  { id: 9, title: "Playground", src: img9 },
  { id: 10, title: "Auditorium", src: img10 },
  { id: 11, title: "Student Activity", src: img11 },
  { id: 12, title: "Annual Function", src: img12 },
  { id: 13, title: "Morning Assembly", src: img13 },
  { id: 14, title: "Group Activity", src: img14 },
  { id: 15, title: "School Event", src: img15 },
  { id: 16, title: "Annual Day", src: img16 },
  { id: 17, title: "Sports Day", src: img17 },
  { id: 18, title: "Cultural Activities", src: img18 },
  { id: 19, title: "Independence Day", src: img19 },
  { id: 20, title: "Republic Day", src: img20 },
  { id: 21, title: "School Program", src: img21 },
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
                loading="lazy"
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