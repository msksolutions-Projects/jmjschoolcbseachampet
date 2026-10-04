import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faUsers,
  faLaptop,
  faFlask,
  faBookReader,
  faPuzzlePiece,
  faChalkboardTeacher,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const methodologies = [
  {
    icon: faChalkboardTeacher,
    title: "Interactive Learning",
    description: "Student-centered approach with active participation and discussions in classroom"
  },
  {
    icon: faLaptop,
    title: "Digital Integration",
    description: "Smart classrooms with multimedia content and e-learning resources"
  },
  {
    icon: faFlask,
    title: "Experiential Learning",
    description: "Hands-on activities, lab experiments, and practical demonstrations"
  },
  {
    icon: faProjectDiagram,
    title: "Project-Based Learning",
    description: "Real-world projects that develop problem-solving and teamwork skills"
  },
  {
    icon: faPuzzlePiece,
    title: "Activity-Based Teaching",
    description: "Games, role-plays, and creative activities to make learning enjoyable"
  },
  {
    icon: faUsers,
    title: "Collaborative Learning",
    description: "Group discussions and peer learning to enhance understanding"
  },
];

const learningApproaches = [
  {
    title: "Conceptual Understanding",
    points: [
      "Focus on 'why' and 'how' rather than rote learning",
      "Real-life examples and applications",
      "Visual aids and demonstrations"
    ]
  },
  {
    title: "Skill Development",
    points: [
      "Critical thinking and analytical skills",
      "Communication and presentation abilities",
      "Research and independent learning"
    ]
  },
];

export default function TeachingMethodology() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <FontAwesomeIcon icon={faLightbulb} className="text-primary text-2xl" />
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Teaching Methodology
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern teaching approaches that inspire curiosity and foster deep learning
          </p>
        </div>

        {/* Methodologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {methodologies.map((method, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={method.icon} className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Learning Approaches */}
        <div className="grid md:grid-cols-2 gap-8">
          {learningApproaches.map((approach, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {approach.title}
              </h3>
              
              <ul className="space-y-3">
                {approach.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}