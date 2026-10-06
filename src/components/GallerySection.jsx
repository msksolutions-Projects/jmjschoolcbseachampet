import React, { useState } from "react";
import img22 from "/gallery22.webp";
import img23 from "/gallery23.webp";
import img24 from "/gallery24.webp";
import img25 from "/gallery25.webp";
import img26 from "/gallery26.webp";
import img27 from "/gallery27.webp";
import img28 from "/gallery28.webp";
import img29 from "/gallery29.webp";
import img30 from "/gallery30.webp";
import img31 from "/gallery31.webp";
import img32 from "/gallery32.webp";
import img33 from "/gallery33.webp";
import img34 from "/gallery34.webp";
import img35 from "/gallery35.webp";
import img36 from "/gallery36.webp";
import img37 from "/gallery37.webp";
import img38 from "/gallery38.webp";
import img39 from "/gallery39.webp";
import img40 from "/gallery40.webp";
import img41 from "/gallery41.webp";
import img42 from "/gallery42.webp";
import img43 from "/gallery43.webp";
import img44 from "/gallery44.webp";
import img45 from "/gallery45.webp";
import img46 from "/gallery46.webp";
import img47 from "/gallery47.webp";
import img48 from "/gallery48.webp";
import img49 from "/gallery49.webp";
import img50 from "/gallery50.webp";
import img51 from "/gallery51.webp";
import img52 from "/gallery52.webp";
import img53 from "/gallery53.webp";
import img54 from "/gallery54.webp";
import img55 from "/gallery55.webp";
import img56 from "/gallery56.webp";
import img57 from "/gallery57.webp";
import img58 from "/gallery58.webp";
import img59 from "/gallery59.webp";
import img60 from "/gallery60.webp";
import img61 from "/gallery61.webp";
import img62 from "/gallery62.webp";
import img63 from "/gallery63.webp";
import img64 from "/gallery64.webp";
import img65 from "/gallery65.webp";
import img66 from "/gallery66.webp";
import img67 from "/gallery67.webp";
import img68 from "/gallery68.webp";
import img69 from "/gallery69.webp";
import img70 from "/gallery70.webp";
import img71 from "/gallery71.webp";
import img72 from "/gallery72.webp";
import img73 from "/gallery73.webp";
import img74 from "/gallery74.webp";
import img75 from "/gallery75.webp";
import img76 from "/gallery76.webp";
import img77 from "/gallery77.webp";
import img78 from "/gallery78.webp";
import img79 from "/gallery79.webp";
import img80 from "/gallery80.webp";
import img81 from "/gallery81.webp";
import img82 from "/gallery82.webp";
import img83 from "/gallery83.webp";
import img84 from "/gallery84.webp";
import img85 from "/gallery85.webp";
import img86 from "/gallery86.webp";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedEvent, setSelectedEvent] = useState("all");

  const events = [
    { id: "all", name: "All Events", icon: "📸", count: 65 },
    { id: "canonical", name: "Canonical Visitation", icon: "👥", count: 24 },
    { id: "fieldtrip", name: "Education Field Trip", icon: "🚌", count: 8 },
    { id: "hostel", name: "Hostel", icon: "🏠", count: 11 },
    { id: "school", name: "School", icon: "🏫", count: 7 },
    { id: "sports", name: "Sports", icon: "⚽", count: 12 },
    { id: "training", name: "Teachers Training", icon: "👨‍🏫", count: 3 }
  ];

  const allPhotos = [
    { id: 22, title: "Canonical 1", src: img22, event: "canonical" },
    { id: 23, title: "Canonical 2", src: img23, event: "canonical" },
    { id: 24, title: "Canonical 3", src: img24, event: "canonical" },
    { id: 25, title: "Canonical 4", src: img25, event: "canonical" },
    { id: 26, title: "Canonical 5", src: img26, event: "canonical" },
    { id: 27, title: "Canonical 6", src: img27, event: "canonical" },
    { id: 28, title: "Canonical 7", src: img28, event: "canonical" },
    { id: 29, title: "Canonical 8", src: img29, event: "canonical" },
    { id: 30, title: "Canonical 9", src: img30, event: "canonical" },
    { id: 31, title: "Canonical 10", src: img31, event: "canonical" },
    { id: 32, title: "Canonical 11", src: img32, event: "canonical" },
    { id: 33, title: "Canonical 12", src: img33, event: "canonical" },
    { id: 34, title: "Canonical 13", src: img34, event: "canonical" },
    { id: 35, title: "Canonical 14", src: img35, event: "canonical" },
    { id: 36, title: "Canonical 15", src: img36, event: "canonical" },
    { id: 37, title: "Canonical 16", src: img37, event: "canonical" },
    { id: 38, title: "Canonical 17", src: img38, event: "canonical" },
    { id: 39, title: "Canonical 18", src: img39, event: "canonical" },
    { id: 40, title: "Canonical 19", src: img40, event: "canonical" },
    { id: 41, title: "Canonical 20", src: img41, event: "canonical" },
    { id: 42, title: "Canonical 21", src: img42, event: "canonical" },
    { id: 43, title: "Canonical 22", src: img43, event: "canonical" },
    { id: 44, title: "Canonical 23", src: img44, event: "canonical" },
    { id: 45, title: "Canonical 24", src: img45, event: "canonical" },
    { id: 46, title: "Field Trip 1", src: img46, event: "fieldtrip" },
    { id: 47, title: "Field Trip 2", src: img47, event: "fieldtrip" },
    { id: 48, title: "Field Trip 3", src: img48, event: "fieldtrip" },
    { id: 49, title: "Field Trip 4", src: img49, event: "fieldtrip" },
    { id: 50, title: "Field Trip 5", src: img50, event: "fieldtrip" },
    { id: 51, title: "Field Trip 6", src: img51, event: "fieldtrip" },
    { id: 52, title: "Field Trip 7", src: img52, event: "fieldtrip" },
    { id: 53, title: "Field Trip 8", src: img53, event: "fieldtrip" },
    { id: 54, title: "Hostel 1", src: img54, event: "hostel" },
    { id: 55, title: "Hostel 2", src: img55, event: "hostel" },
    { id: 56, title: "Hostel 3", src: img56, event: "hostel" },
    { id: 57, title: "Hostel 4", src: img57, event: "hostel" },
    { id: 58, title: "Hostel 5", src: img58, event: "hostel" },
    { id: 59, title: "Hostel 6", src: img59, event: "hostel" },
    { id: 60, title: "Hostel 7", src: img60, event: "hostel" },
    { id: 61, title: "Hostel 8", src: img61, event: "hostel" },
    { id: 62, title: "Hostel 9", src: img62, event: "hostel" },
    { id: 63, title: "Hostel 10", src: img63, event: "hostel" },
    { id: 64, title: "Hostel 11", src: img64, event: "hostel" },
    { id: 65, title: "School 1", src: img65, event: "school" },
    { id: 66, title: "School 2", src: img66, event: "school" },
    { id: 67, title: "School 3", src: img67, event: "school" },
    { id: 68, title: "School 4", src: img68, event: "school" },
    { id: 69, title: "School 5", src: img69, event: "school" },
    { id: 70, title: "School 6", src: img70, event: "school" },
    { id: 71, title: "School 7", src: img71, event: "school" },
    { id: 72, title: "Sports 1", src: img72, event: "sports" },
    { id: 73, title: "Sports 2", src: img73, event: "sports" },
    { id: 74, title: "Sports 3", src: img74, event: "sports" },
    { id: 75, title: "Sports 4", src: img75, event: "sports" },
    { id: 76, title: "Sports 5", src: img76, event: "sports" },
    { id: 77, title: "Sports 6", src: img77, event: "sports" },
    { id: 78, title: "Sports 7", src: img78, event: "sports" },
    { id: 79, title: "Sports 8", src: img79, event: "sports" },
    { id: 80, title: "Sports 9", src: img80, event: "sports" },
    { id: 81, title: "Sports 10", src: img81, event: "sports" },
    { id: 82, title: "Sports 11", src: img82, event: "sports" },
    { id: 83, title: "Sports 12", src: img83, event: "sports" },
    { id: 84, title: "Training 1", src: img84, event: "training" },
    { id: 85, title: "Training 2", src: img85, event: "training" },
    { id: 86, title: "Training 3", src: img86, event: "training" }
  ];

  const videos = [
    { id: 1, title: "Canonical Video 1", src: "/CV25.mp4" },
    { id: 2, title: "Canonical Video 2", src: "/CV26.mp4" },
    { id: 3, title: "Canonical Video 3", src: "/CV27.mp4" },
    { id: 4, title: "Canonical Video 4", src: "/CV28.mp4" },
    { id: 5, title: "School Video 1", src: "/VID-20261006-WA0018.mp4" },
    { id: 6, title: "School Video 2", src: "/VID-20261006-WA0019.mp4" },
    { id: 7, title: "School Video 3", src: "/VID-20261006-WA0020.mp4" }
  ];

  const filteredPhotos = selectedEvent === "all" ? allPhotos : allPhotos.filter((photo) => photo.event === selectedEvent);

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our School Gallery</h2>
          <div className="w-40 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-500 text-sm md:text-base">A glimpse into our vibrant campus life, achievements, and activities.</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-6 py-2 rounded-lg font-medium transition ${activeTab === "photos" ? "bg-primary text-white" : "bg-white text-slate-700 border border-slate-300"}`}
          >
            📷 Photos ({filteredPhotos.length})
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-2 rounded-lg font-medium transition ${activeTab === "videos" ? "bg-primary text-white" : "bg-white text-slate-700 border border-slate-300"}`}
          >
            🎬 Videos ({videos.length})
          </button>
        </div>

        {activeTab === "photos" && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Select Event:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {events.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event.id)}
                  className={`p-4 rounded-xl font-medium transition text-left ${selectedEvent === event.id ? "bg-primary text-white shadow-lg" : "bg-white text-slate-700 border border-slate-300"}`}
                >
                  <div className="text-2xl mb-1">{event.icon}</div>
                  <div className="font-semibold text-sm">{event.name}</div>
                  <div className="text-xs opacity-75">{event.count} photos</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === "photos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPhotos.map((img) => (
              <div key={img.id} className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all">
                <img src={img.src} alt={img.title} loading="lazy" className="w-full h-64 object-cover group-hover:scale-110 transition" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-sm font-semibold text-center">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((video) => (
              <div key={video.id} className="group relative rounded-2xl overflow-hidden bg-white shadow-md">
                <video controls className="w-full h-64 object-cover">
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="bg-white p-4">
                  <h3 className="text-sm font-semibold text-center">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
