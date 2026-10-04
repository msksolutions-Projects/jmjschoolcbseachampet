import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faWallet,
  faBus,
  faBook,
  faCreditCard,
  faInfoCircle,
  faCheckCircle,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";

const feeStructure = [
  { grade: "Nursery", sub: "Pre-Primary", admission: "5,000", annual: "30,000", quarterly: "7,500" },
  { grade: "LKG", sub: "Pre-Primary", admission: "5,000", annual: "30,000", quarterly: "7,500" },
  { grade: "UKG", sub: "Pre-Primary", admission: "5,000", annual: "30,000", quarterly: "7,500" },
  { grade: "Class 1", sub: "Primary", admission: "5,000", annual: "35,000", quarterly: "8,750" },
  { grade: "Class 2", sub: "Primary", admission: "5,000", annual: "35,000", quarterly: "8,750" },
  { grade: "Class 3", sub: "Primary", admission: "5,000", annual: "35,000", quarterly: "8,750" },
  { grade: "Class 4", sub: "Primary", admission: "5,000", annual: "35,000", quarterly: "8,750" },
  { grade: "Class 5", sub: "Primary", admission: "5,000", annual: "35,000", quarterly: "8,750" },
];

export default function FeeStructure() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full mb-6">
            <FontAwesomeIcon icon={faReceipt} className="text-sm" />
            <span className="text-xs font-bold uppercase tracking-widest">Financial Transparency</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">
            Investment in <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A transparent breakdown of our academic fees for the 2025-26 session.
          </p>
        </div>

        {/* Main Fee Table */}
        <div className="bg-white border border-primary-light rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="bg-primary-dark p-6 text-center">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Academic Fee Schedule</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-light/50 border-b border-primary-light">
                  <th className="px-8 py-5 text-left text-primary-dark font-bold">Grade Level</th>
                  <th className="px-8 py-5 text-center text-primary-dark font-bold">Admission Fee</th>
                  <th className="px-8 py-5 text-center text-primary-dark font-bold">Annual Tuition</th>
                  <th className="px-8 py-5 text-center text-primary-dark font-bold">Quarterly Installment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-light">
                {feeStructure.map((item, index) => (
                  <tr key={index} className="hover:bg-primary-light/20 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="font-bold text-gray-900">{item.grade}</div>
                      <div className="text-xs text-primary font-medium">{item.sub}</div>
                    </td>
                    <td className="px-8 py-6 text-center text-gray-600 font-medium">₹{item.admission}</td>
                    <td className="px-8 py-6 text-center font-bold text-primary-dark">₹{item.annual}</td>
                    <td className="px-8 py-6 text-center">
                      <span className="bg-primary-light text-primary px-4 py-1.5 rounded-lg font-bold text-sm">
                        ₹{item.quarterly}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Charges - Modern Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: faBus, label: "Transport Facility", price: "₹1,000 - ₹1,500", freq: "Per Month", detail: "Based on distance" },
            { icon: faBook, label: "Books & Stationery", price: "₹3,000 - ₹5,000", freq: "Per Year", detail: "Variable by class" },
            { icon: faWallet, label: "School Uniform", price: "₹2,500 - ₹3,500", freq: "One-Time", detail: "Complete set" },
          ].map((item, i) => (
            <div key={i} className="bg-primary-light/20 border border-primary-light p-8 rounded-3xl hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                <FontAwesomeIcon icon={item.icon} className="text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-primary-dark mb-1">{item.label}</h4>
              <div className="text-2xl font-black text-primary mb-1">{item.price}</div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-4">{item.freq}</p>
              <div className="text-sm text-gray-500 italic">{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Payment Modes */}
          <div className="lg:col-span-2 bg-white border border-primary-light rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary-light p-3 rounded-xl text-primary">
                <FontAwesomeIcon icon={faCreditCard} className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark">Payment Mode</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between p-4 bg-primary-light/30 rounded-xl border border-transparent hover:border-primary transition-all">
                <span className="font-semibold text-gray-700">Cash at Counter</span>
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
              </div>
            </div>
          </div>

          {/* Guidelines Sidebar */}
          <div className="lg:col-span-3 bg-primary-dark rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <FontAwesomeIcon icon={faInfoCircle} className="text-primary-light text-2xl" />
                <h3 className="text-2xl font-bold">Important Guidelines</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "One-time admission fee is non-refundable.",
                  "10% Sibling discount on tuition fees.",
                  "Payments due by the 10th of every quarter.",
                  "Late fee of ₹100/week applies after due date.",
                  "Fees once paid are non-transferable.",
                  "Annual charges cover lab & library access."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/10 p-4 rounded-xl text-sm leading-snug hover:bg-white/20 transition-colors">
                    <div className="w-1.5 h-1.5 bg-primary-light rounded-full mt-1.5 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center p-6 bg-primary-light rounded-2xl border border-dashed border-primary">
          <p className="text-primary-dark font-medium">
            <strong>Need Assistance?</strong> Our accounts department is available Mon-Sat (9:00 AM - 3:00 PM) to help with your queries.
          </p>
        </div>

      </div>
    </section>
  );
}