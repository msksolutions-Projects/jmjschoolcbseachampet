import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faIdCard,
  faImage,
  faCertificate,
  faHome,
  faSyringe,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

const documents = [
  {
    icon: faCertificate,
    title: "Birth Certificate",
    description: "Original and photocopy (issued by Municipal Corporation)"
  },
  {
    icon: faImage,
    title: "Photographs",
    description: "4 recent passport size photographs of the student"
  },
  {
    icon: faIdCard,
    title: "Aadhar Card",
    description: "Photocopy of student's Aadhar Card"
  },
  {
    icon: faFileAlt,
    title: "Transfer Certificate",
    description: "TC from previous school (for classes 2 and above)"
  },
  {
    icon: faClipboardList,
    title: "Report Card",
    description: "Previous year's mark sheet/progress report"
  },
  {
    icon: faHome,
    title: "Address Proof",
    description: "Residence proof (electricity bill, Aadhar, etc.)"
  },
  {
    icon: faIdCard,
    title: "Parent's ID",
    description: "Photocopy of parent/guardian Aadhar card"
  },
  {
    icon: faSyringe,
    title: "Medical Certificate",
    description: "Immunization record and fitness certificate"
  },
];

const ageCriteria = [
  { class: "Nursery", age: "3+ years as on 31st March" },
  { class: "LKG", age: "4+ years as on 31st March" },
  { class: "UKG", age: "5+ years as on 31st March" },
  { class: "Class 1", age: "6+ years as on 31st March" },
];

const importantNotes = [
  "All documents should be self-attested by parents/guardians",
  "Original documents must be presented at the time of admission",
  "Incomplete forms will not be processed",
  "Age proof is mandatory for all admissions",
  "Migration certificate required for inter-state transfers",
];

export default function AdmissionRequirements() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <FontAwesomeIcon icon={faFileAlt} className="text-primary text-2xl" />
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Admission Requirements
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Documents and criteria required for the admission process
          </p>
        </div>

        {/* Documents Required */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Documents Required
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={doc.icon} className="text-primary text-xl" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{doc.title}</h4>
                <p className="text-sm text-gray-600">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Age Criteria */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Age Criteria
            </h3>
            
            <div className="space-y-3">
              {ageCriteria.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <span className="font-semibold text-gray-900">{item.class}</span>
                  <span className="text-primary font-medium">{item.age}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Age calculation is done as on 31st March of the admission year.
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Important Points
            </h3>
            
            <ul className="space-y-4">
              {importantNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                For any queries regarding documents, please contact the admission office 
                during school hours (9:00 AM - 2:00 PM).
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}