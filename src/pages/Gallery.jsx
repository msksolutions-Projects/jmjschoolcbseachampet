import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faVideo,
  faThLarge,
  faTimes,
  faPlay,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const galleryItems = [
  { id: 1, type: "image", src: "/gallery5.webp", title: "Annual Day Celebration", category: "Events", featured: true },
  { id: 2, type: "image", src: "/gallery4.webp", title: "Science Exhibition", category: "Academic", featured: false },
  { id: 3, type: "video", src: "/video1.mp4", title: "Library", category: "Culture", featured: false },
  { id: 4, type: "image", src: "/gallery3.webp", title: "Sports Day Finals", category: "Sports", featured: true },
  { id: 5, type: "video", src: "/video4.mp4", title: "Campus", category: "Campus", featured: false },
  { id: 6, type: "image", src: "/gallery2.webp", title: "Graduation Ceremony", category: "Events", featured: false },
  { id: 7, type: "video", src: "/video2.mp4", title: "Transport", category: "Campus", featured: false },
  { id: 8, type: "video", src: "/video3.mp4", title: "Digital Classes", category: "Campus", featured: false },
  { id: 9, type: "video", src: "/video5.mp4", title: "Play Ground", category: "Campus", featured: false },
  { id: 10, type: "image", src: "/facility1.webp", title: "Lab", category: "Events", featured: false },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [liked, setLiked] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-primary-light to-gray-50 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-white border border-primary/20 text-primary text-[10px] font-black tracking-[0.3em] uppercase shadow-sm">
            Our Gallery
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary-dark leading-[1.1]">
            Capturing the <span className="text-primary">Moment</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the vibrant life and achievements of our school community.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <div className="sticky top-6 z-40 px-6 mb-12">
        <div className="max-w-fit mx-auto p-1.5 bg-white/90 backdrop-blur-md border border-primary/10 rounded-2xl shadow-xl flex gap-1">
          {[
            { id: "all", label: "All", icon: faThLarge },
            { id: "image", label: "Photos", icon: faCamera },
            { id: "video", label: "Videos", icon: faVideo },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === f.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "text-gray-600 hover:bg-primary-light hover:text-primary"
              }`}
            >
              <FontAwesomeIcon icon={f.icon} />
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative overflow-hidden rounded-3xl bg-white transition-all duration-700 hover:shadow-2xl border border-primary/5 cursor-pointer
              ${item.featured && activeFilter === "all" ? "md:col-span-2 md:row-span-2" : ""}
              ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* IMAGE / VIDEO */}
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={item.src}
                    muted
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/40 flex items-center justify-center">
                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-125 transition-all duration-500">
                      <FontAwesomeIcon icon={faPlay} className="ml-1" />
                    </div>
                  </div>
                </div>
              )}

              {/* LIKE BUTTON */}
              <button
                onClick={(e) => toggleLike(item.id, e)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-95"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`text-sm ${
                    liked[item.id] ? "text-red-500" : "text-slate-300"
                  }`}
                />
              </button>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <span className="mb-2 w-fit px-2 py-0.5 bg-primary text-white text-[8px] font-black uppercase tracking-widest rounded">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-gray-900/90 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          />

          <div className="relative w-full max-w-6xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]">

            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-30 w-10 h-10 bg-gray-50 text-primary rounded-full flex items-center justify-center hover:bg-primary-light"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="md:w-2/3 bg-black flex items-center justify-center">
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[80vh] w-full object-contain"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh]"
                />
              )}
            </div>

            {/* INFO SIDE */}
            <div className="md:w-1/3 p-8 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
                {selectedItem.category}
              </span>
              <h2 className="text-2xl font-bold mb-4">
                {selectedItem.title}
              </h2>
              <p className="text-gray-600 text-sm">
                Moments that reflect the spirit and excellence of our institution.
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;