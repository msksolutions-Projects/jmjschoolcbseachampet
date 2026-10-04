import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faBullseye,
  faHeart,
  faUsers,
  faGlobe,
  faBook,
  faStar,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

const visionText = "To educate minds, form hearts and inspire to serve.";
const missionText = "To mould our students into powerful human resources on par with global standards to serve the society with absolute Love.";

const coreValues = [
  { icon: faHeart, text: "Excellence" },
  { icon: faUsers, text: "Integrity" },
  { icon: faHandHoldingHeart, text: "Compassion" },
  { icon: faStar, text: "Innovation" },
  { icon: faBook, text: "Respect" },
  { icon: faGlobe, text: "Responsibility" },
];

export default function VisionMission() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Vision & Mission
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Vision Card */}
          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faEye} className="text-primary text-2xl" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              {visionText}
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faBullseye} className="text-primary text-2xl" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              {missionText}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg"
              >
                <FontAwesomeIcon icon={value.icon} className="text-primary text-2xl" />
                <span className="text-gray-800 font-medium text-sm text-center">
                  {value.text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}