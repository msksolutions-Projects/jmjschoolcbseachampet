import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faSchool,
  faClipboardCheck,
  faUmbrellaBeach,
  faTrophy,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const terms = [
  {
    name: "First Term",
    duration: "April - September",
    events: [
      { icon: faSchool, event: "Session Begins", date: "April 1" },
      { icon: faBell, event: "Periodic Test 1", date: "May 15-20" },
      { icon: faUmbrellaBeach, event: "Summer Vacation", date: "May 25 - June 15" },
      { icon: faBell, event: "Periodic Test 2", date: "July 20-25" },
      { icon: faClipboardCheck, event: "Mid-Term Exams", date: "September 10-20" },
    ]
  },
  {
    name: "Second Term",
    duration: "October - March",
    events: [
      { icon: faSchool, event: "Second Term Begins", date: "October 1" },
      { icon: faTrophy, event: "Annual Sports Day", date: "November 15" },
      { icon: faBell, event: "Periodic Test 3", date: "November 25-30" },
      { icon: faUmbrellaBeach, event: "Winter Break", date: "December 24 - January 5" },
      { icon: faBell, event: "Pre-Board Exams", date: "January 15-25" },
      { icon: faClipboardCheck, event: "Annual Exams", date: "March 1-15" },
      { icon: faSchool, event: "Result Declaration", date: "March 30" },
    ]
  },
];

const holidays = [
  { name: "Republic Day", date: "Jan 26" },
  { name: "Holi", date: "March" },
  { name: "Independence Day", date: "Aug 15" },
  { name: "Diwali", date: "Oct/Nov" },
  { name: "Christmas", date: "Dec 25" },
  { name: "Makar Sankranti", date: "Jan 14" },
];

export default function AcademicCalendar() {
  const [activeTerm, setActiveTerm] = useState(0);

  return (
    <section className="bg-white py-12 md:py-20 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Simple Header */}
        <div className="mb-12 border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Academic Calendar</h2>
          <p className="text-gray-500 mt-1">Session 2024-25 Key Events</p>
        </div>

        {/* Term Tabs */}
        <div className="flex border-b border-gray-100 mb-10">
          {terms.map((term, index) => (
            <button
              key={index}
              onClick={() => setActiveTerm(index)}
              className={`pb-4 px-8 text-sm font-bold transition-all border-b-2 ${
                activeTerm === index
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {term.name.toUpperCase()}
              <span className="block text-xs font-normal opacity-60 mt-0.5">{term.duration}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Active Term List */}
          <div className="lg:col-span-2 space-y-4">
            {terms[activeTerm].events.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-5 rounded-xl border border-gray-100 bg-white hover:border-primary-light hover:bg-primary-light/20 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="text-primary text-lg transition-transform group-hover:scale-110">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <span className="font-semibold text-gray-800">{item.event}</span>
                </div>
                <span className="text-sm font-bold bg-primary-light text-primary-dark px-4 py-1.5 rounded-lg">
                  {item.date}
                </span>
              </div>
            ))}
          </div>

          {/* Side Info Panels */}
          <div className="space-y-8">
            {/* Holiday Panel */}
            <div className="rounded-2xl border border-gray-100 p-6 bg-white">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Holidays</h3>
              <div className="space-y-3">
                {holidays.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-700 font-medium">{h.name}</span>
                    <span className="text-primary font-bold">{h.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note Panel */}
            <div className="bg-primary-dark rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={faBell} className="text-primary-light" />
                <h3 className="font-bold text-sm uppercase">Quick Note</h3>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Dates are subject to change. Updates will be sent via the school portal and SMS notifications.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}