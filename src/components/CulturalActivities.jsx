import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendarAlt, faClock, faMapMarkerAlt, faUsers, 
  faTimes, faMasksTheater, faMusic, faPalette,
  faChevronRight, faStar
} from "@fortawesome/free-solid-svg-icons";

const CulturalActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const activities = [
    { 
      id: 1, 
      title: "Annual Cultural Festival", 
      category: "festival", 
      date: "March 15, 2026", 
      time: "9:00 AM", 
      venue: "Main Campus Grounds", 
      participants: "500+", 
      description: "A fun day filled with music, dance, and food for all primary students.",
      icon: faMasksTheater 
    },
    { 
      id: 2, 
      title: "International Day", 
      category: "celebration", 
      date: "Feb 20, 2026", 
      time: "10:00 AM", 
      venue: "School Auditorium", 
      participants: "300+", 
      description: "Celebrate different cultures with traditional dresses and yummy food stalls.",
      icon: faPalette 
    },
    { 
      id: 3, 
      title: "Theater Production", 
      category: "performance", 
      date: "March 22, 2026", 
      time: "7:00 PM", 
      venue: "Main Auditorium", 
      participants: "60", 
      description: "Watch our talented students perform a play about kindness and magic.",
      icon: faMusic 
    }
  ];

  const categories = [
    { id: "all", name: "All Events" },
    { id: "festival", name: "Festivals" },
    { id: "performance", name: "Performances" },
    { id: "celebration", name: "Celebrations" }
  ];

  const filtered = activeCategory === "all" ? activities : activities.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* SIMPLE HEADER */}
      <header className="bg-white border-b border-slate-200 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-extrabold text-primary-dark flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full hidden sm:block"></span>
            Campus Events
          </h1>
          <p className="mt-2 text-slate-500 font-medium">Find out what's happening at school this term.</p>
        </div>
      </header>

      {/* CATEGORY TABS */}
      <div className="max-w-5xl mx-auto px-6 mt-8">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                activeCategory === cat.id 
                ? "bg-primary border-primary text-white" 
                : "bg-white border-slate-200 text-slate-500 hover:border-primary/30"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* EVENT LIST: Vertical Stack for Simplicity */}
      <main className="max-w-5xl mx-auto px-6 mt-8 space-y-4">
        {filtered.map(activity => (
          <div
            key={activity.id}
            onClick={() => setSelectedActivity(activity)}
            className="group bg-white border border-slate-200 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:shadow-lg hover:border-primary/20 transition-all cursor-pointer"
          >
            {/* Date Box */}
            <div className="flex flex-col items-center justify-center w-16 h-16 bg-primary-light rounded-xl text-primary shrink-0">
              <span className="text-[10px] font-black uppercase tracking-tighter opacity-70">
                {activity.date.split(' ')[0]}
              </span>
              <span className="text-xl font-black">
                {activity.date.split(' ')[1].replace(',', '')}
              </span>
            </div>

            {/* Info */}
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{activity.category}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">{activity.time}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">{activity.title}</h3>
              <p className="text-sm text-slate-500 line-clamp-1 mt-1">{activity.description}</p>
            </div>

            {/* Action Icon */}
            <div className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-slate-50 text-slate-300 group-hover:bg-primary group-hover:text-white transition-all">
              <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
            </div>
          </div>
        ))}
      </main>

      {/* MINIMAL MODAL */}
      {selectedActivity && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedActivity(null)} />
          
          <div className="relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden animate-zoom-in">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-primary/30">
                  <FontAwesomeIcon icon={selectedActivity.icon} />
                </div>
                <button onClick={() => setSelectedActivity(null)} className="text-slate-300 hover:text-slate-900 transition-colors">
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-2">{selectedActivity.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{selectedActivity.description}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-primary w-4" />
                  <span className="text-sm font-bold text-slate-700">{selectedActivity.date}</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary w-4" />
                  <span className="text-sm font-bold text-slate-700">{selectedActivity.venue}</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                  <FontAwesomeIcon icon={faUsers} className="text-primary w-4" />
                  <span className="text-sm font-bold text-slate-700">{selectedActivity.participants} Attending</span>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 active:scale-95">
                Join Event
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes zoom-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-zoom-in { animation: zoom-in 0.2s ease-out; }
      `}</style>
    </div>
  );
};

export default CulturalActivities;