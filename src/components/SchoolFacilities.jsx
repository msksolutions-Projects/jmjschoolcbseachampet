import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChalkboardUser,
  faLaptop,
  faBook,
  faGuitar,
  faTimes,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function SchoolFacilities() {
  const [selectedFacility, setSelectedFacility] = useState(null);

 const facilities = [
  {
    id: 1,
    name: 'Smart Classrooms',
    icon: faChalkboardUser,
    image: '/facility2.webp',
    description: 'Modern classrooms with smart boards and multimedia learning tools',
    features: [
      'Interactive Smart Boards',
      'Air Conditioning',
      'Comfortable Seating',
      'Digital Learning Tools',
    ],
    details: 'Technology-enabled classrooms designed to promote interactive and effective learning.',
  },
  {
    id: 2,
    name: 'Computer Lab',
    icon: faLaptop,
    image: '/facility3.webp',
    description: 'State-of-the-art facility with modern computers and high-speed internet',
    features: [
      'Modern Desktop PCs',
      'High-Speed Internet',
      'Advanced Software',
      'Printing Facilities',
    ],
    details: 'Hands-on experience in programming, web design, and digital literacy.',
  },
  {
    id: 3,
    name: 'Library & Learning Center',
    icon: faBook,
    image: '/facility4.webp',
    description: 'Comprehensive library with thousands of books and digital resources',
    features: [
      'Physical Books (10,000+)',
      'E-Books & Journals',
      'Study Cubicles',
      'Reading Areas',
    ],
    details: 'Hub for learning with extensive collection and quiet study areas.',
  },
  {
    id: 4,
    name: 'Music & Art Studio',
    icon: faGuitar,
    image: '/facility5.webp',
    description: 'Creative space with musical instruments and art supplies',
    features: [
      'Musical Instruments',
      'Art Supplies',
      'Practice Rooms',
      'Display Areas',
    ],
    details: 'Encourages creativity and self-expression with diverse materials.',
  },
];

  const openModal = (facility) => {
    setSelectedFacility(facility);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedFacility(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-light/20">
      
      {/* Header */}
      <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-3">School Facilities</h1>
          <p className="text-lg opacity-90">Infrastructure designed for academic excellence</p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="rounded-2xl bg-white shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      'https://via.placeholder.com/800x300/1E40AF/FFFFFF?text=' +
                      encodeURIComponent(facility.name);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-primary text-white p-3 rounded-xl shadow-lg">
                  <FontAwesomeIcon icon={facility.icon} className="text-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {facility.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {facility.description}
                </p>

                <button
                  onClick={() => openModal(facility)}
                  className="mt-auto bg-primary text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
                >
                  Learn More
                  <FontAwesomeIcon icon={faChevronDown} className="rotate-[-90deg]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFacility && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 shadow-lg"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                <div className="bg-primary text-white p-4 rounded-xl shadow-lg">
                  <FontAwesomeIcon icon={selectedFacility.icon} className="text-3xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {selectedFacility.name}
                  </h2>
                  <p className="text-white opacity-90 text-sm mt-1">
                    {selectedFacility.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {selectedFacility.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-primary mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary-light p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary-dark mb-2">
                  About This Facility
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedFacility.details}
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={closeModal}
                  className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 active:scale-95 shadow-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}