import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVideo,
  faMapLocationDot,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

export default function VirtualTour() {
  const [activeTab, setActiveTab] = useState('video');
  const [selectedImage, setSelectedImage] = useState(null);

  const tourHighlights = [
    {
      id: 1,
      icon: faVideo,
      title: '360° Interactive Tour',
      description: 'Experience every corner of our campus in immersive 360-degree view',
    },
    {
      id: 2,
      icon: faMapLocationDot,
      title: 'Guided Route',
      description: 'Follow a curated path through our best facilities and landmarks',
    },
    {
      id: 3,
      icon: faStar,
      title: 'Facility Highlights',
      description: 'Detailed information about each area with expert commentary',
    },
  ];

  const galleryImages = [
    {
      id: 1,
      title: 'Modern Classrooms',
      category: 'Academics',
      image: '/facility2.webp',
    },
    {
      id: 2,
      title: 'Science Laboratory',
      category: 'Academics',
      image: '/facility1.webp',
    },
    {
      id: 3,
      title: 'Computer Lab',
      category: 'Technology',
      image: '/facility3.webp',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Explore Our Campus
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take an immersive virtual tour of our world-class facilities
          </p>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14">

          
          <div>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-black aspect-video">
              {activeTab === 'video' ? (
                <video
                  className="w-full h-full object-cover"
                  src="/video4.mp4"
                  muted
                  loop
                  controls
                />
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                  alt="Campus"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Experience Our Facilities
            </h3>

            <div className="space-y-4">
              {tourHighlights.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10">
                    <FontAwesomeIcon icon={item.icon} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Gallery Highlights
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img src={img.image} alt={img.title} className="h-56 w-full object-cover" />
                <div className="p-3 bg-white">
                  <h4 className="font-semibold">{img.title}</h4>
                  <p className="text-xs text-gray-500">{img.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="max-w-3xl w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="p-4">
                <h3 className="text-lg font-bold">{selectedImage.title}</h3>
                <p className="text-sm text-gray-500">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}