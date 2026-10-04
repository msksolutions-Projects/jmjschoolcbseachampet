import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faUsers,
  faBookOpen,
  faAward,
  faCheckCircle,
  faBullseye,
  faLightbulb,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const highlights = [
  {
    icon: faUsers,
    title: "Experienced Faculty",
    description: "Highly qualified teachers dedicated to mentoring students with care, patience, and expertise.",
  },
  {
    icon: faBookOpen,
    title: "Holistic Learning",
    description: "A balanced curriculum that encourages academics, creativity, sports, and personal growth.",
  },
  {
    icon: faAward,
    title: "Student Success",
    description: "Proven academic results and confident students prepared for higher education and life.",
  },
];

const features = [
  { icon: faCheckCircle, text: "CBSE Affiliated Curriculum" },
  { icon: faBullseye, text: "Individual Attention" },
  { icon: faLightbulb, text: "Innovation-Driven Learning" },
  { icon: faShieldHalved, text: "Safe & Secure Environment" },
];

export default function AboutSchool() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <FontAwesomeIcon icon={faSchool} className="text-primary text-2xl" />
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our School
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A place where academic excellence meets character building, 
            nurturing confident learners prepared for the future.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Shaping Young Minds with <span className="text-primary">Values & Vision</span>
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our school blends strong academics with moral values, creativity, and essential 
              life skills to ensure holistic student development.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through experienced educators and modern teaching practices, we empower students 
              to become confident, responsible individuals.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FontAwesomeIcon icon={feature.icon} className="text-primary" />
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/gallery2.webp"
              alt="School Campus"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={item.icon} className="text-white text-xl" />
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}