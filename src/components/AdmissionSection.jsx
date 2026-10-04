import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faClipboardCheck,
  faUserGraduate,
  
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    id: 1,
    icon: faFileAlt,
    title: "Submit Application",
    desc: "Fill out the admission form online or visit the school office to submit the application.",
  },
  {
    id: 2,
    icon: faClipboardCheck,
    title: "Document Verification",
    desc: "Our team will verify academic records and required documents.",
  },
  {
    id: 3,
    icon: faUserGraduate,
    title: "Confirmation & Enrollment",
    desc: "After approval, complete the enrollment process and secure the seat.",
  },
];

const AdmissionSection = () => {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Admission Process
          </h2>
          <p className="mt-3 text-slate-500">
            A simple and transparent admission process designed for parents and
            students.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={step.icon}
                  className="text-primary text-xl"
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-primary rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Need Help with Admissions?
            </h3>
            <p className="text-primary-light mt-1">
              Speak directly with our admission counselor for guidance.
            </p>
          </div>

          <button
            className="
              flex items-center gap-2
              bg-white text-primary
              font-semibold
              px-6 py-3
              rounded-lg
              hover:bg-primary-light
              transition
            "
          >
            
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
