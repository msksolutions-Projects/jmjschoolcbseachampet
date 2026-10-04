import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faChalkboardTeacher,
  faFlask,
  faLanguage,
  faCalculator,
  faPalette,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const academicFeatures = [
  {
    icon: faBookOpen,
    title: "CBSE Curriculum",
    description:
      "Strong foundational learning aligned with CBSE guidelines for primary education.",
  },
  {
    icon: faChalkboardTeacher,
    title: "Qualified Faculty",
    description:
      "Dedicated and experienced teachers focused on child-centric learning.",
  },
  {
    icon: faFlask,
    title: "Activity-Based Learning",
    description:
      "Interactive activities that encourage curiosity and hands-on understanding.",
  },
  {
    icon: faLanguage,
    title: "Language Development",
    description:
      "Emphasis on reading, writing, speaking, and communication skills.",
  },
];

const subjects = [
  { icon: faCalculator, name: "Mathematics", grades: "1 – 5" },
  { icon: faFlask, name: "Environmental Science", grades: "1 – 5" },
  { icon: faLanguage, name: "English & Hindi", grades: "1 – 5" },
  { icon: faPalette, name: "Art & Craft", grades: "1 – 5" },
  { icon: faMusic, name: "Music & Dance", grades: "1 – 5" },
];

export default function AcademicOverview() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <FontAwesomeIcon
            icon={faBookOpen}
            className="text-primary text-3xl mb-4"
          />

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Academic Overview
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Our primary education program (Classes 1 to 5) focuses on building
            strong academic foundations, confidence, and curiosity in young learners.
          </p>
        </div>

        {/* Academic Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {academicFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-primary text-xl"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Subjects */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Subjects Offered
          </h3>
          <p className="text-gray-600 text-sm">
            Curriculum designed for holistic development (Class 1 – 5)
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 border border-gray-100 rounded-xl hover:shadow-sm transition"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={subject.icon}
                  className="text-primary"
                />
              </div>

              <div>
                <h4 className="text-gray-900 font-medium">
                  {subject.name}
                </h4>
                <p className="text-sm text-gray-500">
                  Class {subject.grades}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
