import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faSchool,
  faEnvelope,
  faPhone,
  faGraduationCap,
  faMapLocationDot
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <div className="bg-gray-50">
      
      {/* HERO */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <FontAwesomeIcon icon={faMapLocationDot} className="mr-3" />
            Contact & Location
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Find us easily and get in touch with JMJ School – CBSE
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* MAP */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapLocationDot} />
                  Our Location
                </h2>
              </div>
              <iframe
                title="JMJ School Location"
                src="https://www.google.com/maps?q=Karunapuram,%20Peddapendiala,%20Dharmasagar,%20Hanumakonda%20506151&output=embed"
                width="100%"
                height="450"
                className="border-0"
                loading="lazy"
              />
              <div className="p-4 bg-gray-50">
                <a
                  href="https://www.google.com/maps?q=Karunapuram,%20Peddapendiala,%20Dharmasagar,%20Hanumakonda%20506151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="space-y-6">

            {/* School Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faSchool} className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">JMJ School – CBSE</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-primary" />
                H.No. 15-75, Karunapuram<br />
                <span className="ml-6">Peddapendiala, Dharmasagar</span><br />
                <span className="ml-6">Hanumakonda District</span><br />
                <span className="ml-6">Telangana – 506151</span>
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Details</h3>
              <div className="space-y-3">
                <a href="mailto:jmjcbseschool@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                  jmjcbseschool@gmail.com
                </a>
                <a href="tel:7981653340" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                  <FontAwesomeIcon icon={faPhone} className="text-primary" />
                  79816 53340
                </a>
              </div>
            </div>

            {/* Classes */}
            <div className="bg-primary text-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
                <h3 className="text-xl font-bold">Classes Offered</h3>
              </div>
              <p className="text-lg">From Nursery to 5<sup>th</sup> Class</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;