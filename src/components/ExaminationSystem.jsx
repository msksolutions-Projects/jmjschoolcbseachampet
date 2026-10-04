import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faCalendarAlt,
  faChartLine,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const examTypes = [
  { title: "Periodic Tests", frequency: "Monthly", weightage: "20%", description: "Regular assessments to track progress" },
  { title: "Mid-Term Exams", frequency: "Half-Yearly", weightage: "30%", description: "Comprehensive evaluation of concepts" },
  { title: "Annual Exams", frequency: "Yearly", weightage: "50%", description: "Final assessment of the academic year" },
];

const gradingSystem = [
  { grade: "A+", marks: "91-100", performance: "Outstanding" },
  { grade: "A", marks: "81-90", performance: "Excellent" },
  { grade: "B+", marks: "71-80", performance: "Very Good" },
  { grade: "B", marks: "61-70", performance: "Good" },
  { grade: "C", marks: "51-60", performance: "Average" },
  { grade: "D", marks: "41-50", performance: "Below Average" },
];

const assessmentFeatures = [
  { icon: faCalendarAlt, title: "Regular Assessment", description: "Continuous evaluation throughout the year" },
  { icon: faChartLine, title: "Progress Reports", description: "Detailed performance analysis and feedback" },
  { icon: faTrophy, title: "Merit Recognition", description: "Awards and certificates for achievers" },
];

export default function ExaminationSystem() {
  return (
    <section className="w-full bg-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FontAwesomeIcon icon={faClipboardCheck} className="text-primary text-xl" />
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Evaluation Framework
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Examination System</h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base">
            A structured and transparent approach to measuring student performance and academic growth.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {assessmentFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-2xl bg-primary-light border border-transparent hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                <FontAwesomeIcon icon={feature.icon} className="text-primary text-xl" />
              </div>
              <h3 className="font-bold text-primary-dark mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Assessment Structure */}
          <div>
            <h3 className="text-2xl font-bold text-primary-dark mb-8">
              Assessment Structure
            </h3>
            <div className="space-y-6">
              {examTypes.map((exam, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-gray-100 hover:border-primary transition-colors py-1"
                >
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-gray-900">{exam.title}</h4>
                    <span className="text-sm font-bold text-primary bg-primary-light px-3 py-1 rounded-full">
                      {exam.weightage}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    {exam.description}
                  </p>
                  <span className="text-xs font-semibold text-primary-dark uppercase tracking-wider">
                    {exam.frequency}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Grading System */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-blue-900/5 overflow-hidden">
            <div className="bg-primary-dark p-4">
              <h3 className="text-white font-bold text-center">
                Grading Standards
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-1">
                <div className="grid grid-cols-3 pb-3 text-xs font-bold text-gray-400 uppercase tracking-widest px-2">
                  <span>Grade</span>
                  <span>Marks</span>
                  <span className="text-right">Performance</span>
                </div>

                {gradingSystem.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 items-center p-3 rounded-lg hover:bg-primary-light transition-colors group"
                  >
                    <span className="font-bold text-primary text-lg">
                      {item.grade}
                    </span>
                    <span className="text-gray-600 font-medium">
                      {item.marks}
                    </span>
                    <span className="text-right text-sm text-gray-500 group-hover:text-primary-dark font-medium">
                      {item.performance}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
