import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBookOpen,
  faCoffee,
  faSun,
  faBell,
  faCheckCircle,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

const primarySchedule = [
  { activity: "Morning Assembly", time: "08:00 AM", icon: faBell, tag: "Start" },
  { activity: "Academic Session I", time: "08:20 AM", icon: faBookOpen, tag: "Learning" },
  { activity: "Short Break", time: "10:20 AM", icon: faCoffee, tag: "Rest" },
  { activity: "Academic Session II", time: "10:40 AM", icon: faSun, tag: "Learning" },
  { activity: "Lunch Break", time: "12:00 PM", icon: faCoffee, tag: "Nutrition" },
  { activity: "Final Session", time: "12:40 PM", icon: faBookOpen, tag: "Learning" },
  { activity: "Dismissal", time: "01:30 PM", icon: faCheckCircle, tag: "Home" },
];

export default function PrimaryTimings() {
  return (
    <section className="w-full bg-[#f8fafc] py-20 px-6">
      <div className="max-w-xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full">
            Daily Log
          </span>
          <h2 className="text-4xl font-black text-slate-900 mt-4 tracking-tight">
            Primary <span className="text-primary">Schedule.</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">Classes 1 — 5 • Academic Year 2026-27</p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/20 via-primary/40 to-transparent hidden sm:block"></div>

          <div className="space-y-6">
            {primarySchedule.map((item, index) => (
              <div key={index} className="relative group flex items-start gap-6">
                
                {/* ICON NODE */}
                <div className="relative z-10 hidden sm:flex w-14 h-14 rounded-2xl bg-white border-2 border-slate-100 items-center justify-center text-slate-400 group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:-rotate-3">
                  <FontAwesomeIcon icon={item.icon} className="text-lg" />
                </div>

                {/* CONTENT CARD */}
                <div className="flex-1 bg-white border border-slate-100 p-5 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group-hover:translate-x-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                       <span className="text-[10px] font-bold text-primary uppercase tracking-tighter opacity-60 group-hover:opacity-100">
                         {item.tag}
                       </span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-lg tracking-tight">{item.activity}</h4>
                    <div className="flex items-center gap-1.5 text-slate-400 sm:hidden mt-1">
                       <FontAwesomeIcon icon={faClock} className="text-[10px]" />
                       <span className="text-xs font-bold">{item.time}</span>
                    </div>
                  </div>

                  <div className="hidden sm:block text-right">
                    <p className="text-2xl font-black text-slate-200 group-hover:text-primary transition-colors tracking-tighter">
                      {item.time.split(' ')[0]}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 -mt-1 uppercase">{item.time.split(' ')[1]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUMMARY FOOTER */}
        <div className="mt-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Arrival Policy</p>
                <h5 className="font-bold text-white">Reporting by 07:50 AM</h5>
              </div>
            </div>

            <div className="h-px w-full md:w-px md:h-10 bg-white/10"></div>

            <div className="text-center md:text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Saturday Sessions</p>
              <h5 className="font-bold text-white">08:00 AM — 12:00 PM</h5>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}