import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faClipboardList,
  faFileAlt,
  faHandshake,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const admissionSteps = [
  { icon: faFileAlt, title: "Registration", description: "Fill out the online form or visit our campus office." },
  { icon: faClipboardList, title: "Documentation", description: "Submit required academic records for verification." },
  { icon: faHandshake, title: "Interaction", description: "A friendly meeting between the Principal, parents, and student." },
  { icon: faCheckCircle, title: "Confirmation", description: "Secure your spot via fee payment and final enrollment." },
];

const gradeAdmission = [
  { grade: "Nursery", age: "3-4 years", seats: "Available" },
  { grade: "LKG", age: "4-5 years", seats: "Available" },
  { grade: "UKG", age: "5-6 years", seats: "Available" },
  { grade: "Class 1", age: "6 years", seats: "Available" },
  { grade: "Class 2", age: "7 years", seats: "Available" },
  { grade: "Class 3", age: "8 years", seats: "Available" },
  { grade: "Class 4", age: "9 years", seats: "Available" },
  { grade: "Class 5", age: "10 years", seats: "Available" },
];

export default function AdmissionOverview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-3 py-1.5 rounded-full mb-5">
            <FontAwesomeIcon icon={faUserGraduate} className="text-xs" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Admissions 2025-26</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-4 sm:mb-6 leading-tight">
            Your Journey to <span className="text-primary underline decoration-primary-light underline-offset-4">Excellence</span> Starts Here
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-2">
            Our admission process is designed to be transparent, simple, and student-centric.
          </p>
        </div>

        {/* Action Banner */}
        <div className="relative bg-primary-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-16 sm:mb-20 shadow-xl overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Enrollment is Now Open</h3>
              <p className="text-primary-light opacity-80 text-sm sm:text-lg">Limited spots available for Nursery through Class 5.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="bg-white text-primary-dark px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-primary-light transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Visit School
              </Link>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-primary opacity-20 rounded-full -mr-10 sm:-mr-20 -mt-10 sm:-mt-20 blur-3xl" />
        </div>

        {/* Admission Process Steps */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-center gap-4 mb-10 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-dark whitespace-nowrap">How it Works</h3>
            <div className="h-px w-full bg-primary-light" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {admissionSteps.map((step, i) => (
              <div key={i} className="group relative">
                <div className="bg-white border border-primary-light p-6 sm:p-8 rounded-2xl hover:border-primary hover:shadow-xl transition-all h-full relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 sm:mb-6 font-bold text-lg sm:text-xl shadow-md group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>

                  <FontAwesomeIcon icon={step.icon} className="text-primary text-xl sm:text-2xl mb-3 sm:mb-4" />

                  <h4 className="text-lg sm:text-xl font-bold text-primary-dark mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Eligibility Table */}
          <div className="lg:col-span-2 bg-primary-light/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-primary-light overflow-x-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-5 sm:mb-6">Eligibility & Availability</h3>

            <div className="min-w-[500px] sm:min-w-0 overflow-hidden rounded-xl border border-primary-light bg-white">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 sm:p-4 font-semibold">Grade</th>
                    <th className="p-3 sm:p-4 font-semibold">Age Criteria</th>
                    <th className="p-3 sm:p-4 font-semibold">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {gradeAdmission.map((item, i) => (
                    <tr key={i} className="border-b border-primary-light last:border-0 hover:bg-primary-light/20 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-primary-dark">{item.grade}</td>
                      <td className="p-3 sm:p-4 text-gray-600">{item.age}</td>
                      <td className="p-3 sm:p-4">
                        <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-green-100 text-green-700">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                          {item.seats}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side Highlights */}
          <div className="bg-primary p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white flex flex-col justify-center shadow-lg shadow-primary/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Quick Highlights</h3>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "CBSE Curriculum",
                "Smart Classroom Tech",
                "Certified Educators",
                "Focus on Soft Skills",
                "24/7 Campus Security",
                "Indoor & Outdoor Sports",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-light mt-0.5" />
                  <span className="font-medium leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
