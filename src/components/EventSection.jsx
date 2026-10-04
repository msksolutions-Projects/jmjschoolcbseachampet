import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import useSchoolData from "../hooks/useSchoolData";

export default function EventSection() {
  const { news, upcoming, completed } = useSchoolData();

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(todayMonth);
  const [selectedYear] = useState(todayYear);
  const [activeTab, setActiveTab] = useState("upcoming");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();

  const isToday = (day) =>
    day === todayDate &&
    selectedMonth === todayMonth &&
    selectedYear === todayYear;

  const isTomorrow = (day) =>
    day === todayDate + 1 &&
    selectedMonth === todayMonth &&
    selectedYear === todayYear;

  const eventData = activeTab === "upcoming" ? upcoming : completed;

  return (
    <section className="py-14 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ================= CALENDAR ================= */}
          <div className="bg-white rounded-xl border shadow-sm p-5 h-[420px]">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setSelectedMonth((m) => (m === 0 ? 11 : m - 1))}
                className="p-2 rounded text-primary hover:bg-primary-light"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <h3 className="font-semibold text-primary">
                {monthNames[selectedMonth]} {selectedYear}
              </h3>

              <button
                onClick={() => setSelectedMonth((m) => (m === 11 ? 0 : m + 1))}
                className="p-2 rounded text-primary hover:bg-primary-light"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="font-medium text-slate-500">
                  {d}
                </div>
              ))}

              {[...Array(firstDay)].map((_, i) => (
                <div key={i} />
              ))}

              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                return (
                  <div
                    key={day}
                    className={`aspect-square flex items-center justify-center rounded cursor-pointer
                      ${
                        isToday(day)
                          ? "bg-primary text-white font-bold"
                          : isTomorrow(day)
                          ? "border-2 border-primary text-primary font-semibold"
                          : "hover:bg-primary-light"
                      }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= EVENTS ================= */}
          <div className="bg-white rounded-xl border shadow-sm p-5 h-[420px] flex flex-col">
            <div className="flex gap-6 mb-3 border-b">
              {["upcoming", "completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm font-semibold ${
                    activeTab === tab
                      ? "text-primary border-b-2 border-primary"
                      : "text-slate-400"
                  }`}
                >
                  {tab === "upcoming" ? "Upcoming Events" : "Completed Events"}
                </button>
              ))}
            </div>

            <div className="overflow-y-auto pr-2 space-y-3 text-sm">
              {eventData?.map((e, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-primary bg-slate-50 rounded p-3"
                >
                  <h4 className="font-semibold text-slate-800">{e.date}</h4>

                  <ul className="list-disc ml-4 text-slate-600">
                    {(e.event || e.events || "")
                      .toString()
                      .split(",")
                      .map((ev, i) => (
                        <li key={i}>{ev.trim()}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ================= NEWS ================= */}
          <div className="bg-white rounded-xl border shadow-sm p-5 h-[420px] flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded bg-primary">
                <FontAwesomeIcon icon={faNewspaper} className="text-white" />
              </div>
              <h3 className="font-semibold text-slate-800">Latest News</h3>
            </div>

            <div className="overflow-y-auto space-y-3 pr-2">
              {news?.map((n, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg p-3 bg-slate-50 hover:bg-primary-light transition"
                >
                  <h4 className="font-semibold text-sm text-slate-800">
                    {n.title}
                  </h4>

                  <p className="text-xs text-slate-600 mt-1">
                    {n.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}