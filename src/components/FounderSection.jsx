import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const team = [
  {
    name: "Ravi Kumar",
    role: "Founder & Chairman",
    description: "A visionary educationist dedicated to nurturing young minds through value-based learning. With over a decade of experience in leadership.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
    expertise: ["Leadership", "Strategic Planning", "Values"],
  },
  {
    name: "Anita Sharma",
    role: "Principal",
    description: "An experienced academic leader committed to creating a student-centric learning environment. She emphasizes quality education.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&auto=format&fit=crop",
    expertise: ["Academic Excellence", "Training", "Engagement"],
  },
  {
    name: "Suresh Patel",
    role: "Academic Director",
    description: "Oversees curriculum planning, assessment strategies, and innovative teaching methodologies. Passionate about modern education.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop",
    expertise: ["Curriculum", "Assessment", "Innovation"],
  },
];

export default function FounderSection() {
  return (
    <section className="w-full bg-slate-50 py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* EDITORIAL BLUE HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-primary/10 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-primary"></span>
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                The Guiding Forces
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-slate-900">
              LEADERSHIP <br /> 
              <span className="text-primary/20">& VISION.</span>
            </h2>
          </div>
          <div className="relative max-w-xs group">
            <FontAwesomeIcon icon={faQuoteLeft} className="absolute -top-6 -left-6 text-primary/10 text-4xl group-hover:text-primary/20 transition-colors" />
            <p className="text-slate-600 text-sm font-semibold leading-relaxed italic pl-4 border-l-4 border-primary">
              "Education is not the filling of a pail, but the lighting of a fire."
            </p>
          </div>
        </div>

        {/* BLUE THEMED TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {team.map((member, index) => (
            <div key={index} className="group relative">
              
              {/* IMAGE CONTAINER WITH BLUE TINT HOVER */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-8 bg-primary/5 shadow-2xl shadow-primary/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                
                {/* BLUE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <button className="w-12 h-12 rounded-full bg-white text-primary hover:bg-slate-900 hover:text-white transition-all shadow-xl">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white text-primary hover:bg-slate-900 hover:text-white transition-all shadow-xl">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </button>
                  </div>
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="space-y-4 px-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-md font-bold text-[10px] uppercase tracking-widest mt-2">
                      <FontAwesomeIcon icon={faBriefcase} className="text-[9px]" />
                      {member.role}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {member.description}
                </p>

                {/* BLUE TAGS */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {member.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-black uppercase tracking-wider text-slate-400 border-b-2 border-transparent group-hover:border-primary/30 group-hover:text-primary transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BRANDING SECTION */}
        <div className="mt-32 p-12 rounded-[3rem] bg-primary flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl shadow-primary/20 relative overflow-hidden">
            {/* Abstract Background Shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="flex -space-x-4">
                {team.map((m, i) => (
                  <img key={i} src={m.image} className="w-14 h-14 rounded-full border-4 border-primary object-cover shadow-lg" alt="team" />
                ))}
                <div className="w-14 h-14 rounded-full bg-white border-4 border-primary flex items-center justify-center text-primary text-xs font-black shadow-lg">
                  +15
                </div>
              </div>
              <div>
                <h4 className="text-white font-black text-xl tracking-tight">Join our academic mission.</h4>
                <p className="text-primary-light/70 text-sm font-medium opacity-80 text-blue-100">Working together to redefine 21st-century learning.</p>
              </div>
            </div>

            <button className="relative z-10 bg-white text-primary px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all active:scale-95 shadow-xl">
              View All Faculty
            </button>
        </div>
      </div>
    </section>
  );
}