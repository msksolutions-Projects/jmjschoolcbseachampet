import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot, faPalette, faSeedling, faBookOpen, faUtensils,
  faUsers, faCalendar, faClock, faStar, faEnvelope, 
  faMapMarkerAlt, faTimes, faShapes, faMicroscope, faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const ClubActivities = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedClub, setSelectedClub] = useState(null);

  const clubs = [
    { id: 1, name: 'Junior Robotics', category: 'tech', description: 'Fun with LEGO and simple coding to bring tiny robots to life!', members: '20 Kids', meetingDay: 'Mon & Wed', time: '2:30 PM - 3:30 PM', location: 'Wonder Lab', email: 'junior-tech@school.edu', achievements: ['Best Innovation 2024'], icon: faRobot },
    { id: 2, name: 'Little Picassos', category: 'arts', description: 'Finger painting, clay modeling, and colorful crafts every week!', members: '25 Kids', meetingDay: 'Tuesdays', time: '2:30 PM - 4:00 PM', location: 'Art Corner', email: 'art-club@school.edu', achievements: ['Annual Exhibition'], icon: faPalette },
    { id: 3, name: 'Nature Detectives', category: 'science', description: 'Exploring the school garden to find bugs, plants, and secrets of nature.', members: '15 Kids', meetingDay: 'Fridays', time: '2:30 PM - 3:30 PM', location: 'School Garden', email: 'green-team@school.edu', achievements: ['Garden Heroes Award'], icon: faSeedling },
    { id: 4, name: 'Storytelling Magic', category: 'academic', description: 'Dressing up as characters and learning the art of telling great tales.', members: '18 Kids', meetingDay: 'Thursdays', time: '3:00 PM - 4:00 PM', location: 'Library Nest', email: 'stories@school.edu', achievements: ['Young Orator Medal'], icon: faBookOpen },
    { id: 5, name: 'Little Chefs', category: 'life-skills', description: 'Fireless cooking! Making yummy sandwiches, fruit salads, and snacks.', members: '12 Kids', meetingDay: 'Wednesdays', time: '2:30 PM - 4:00 PM', location: 'Home Room', email: 'chefs@school.edu', achievements: ['Master Chef Junior'], icon: faUtensils },
  ];

  const categories = [
    { id: 'all', name: 'All Fun', icon: faShapes },
    { id: 'tech', name: 'Build it!', icon: faRobot },
    { id: 'arts', name: 'Create!', icon: faPalette },
    { id: 'science', name: 'Explore!', icon: faMicroscope },
    { id: 'academic', name: 'Read!', icon: faBookOpen }
  ];

  const filteredClubs = activeTab === 'all' ? clubs : clubs.filter(club => club.category === activeTab);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-20">
      
      {/* 1. CLEAN HEADER */}
      <header className="px-6 py-16 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          <span className="text-primary font-bold uppercase tracking-widest text-xs">Clubs & Activities</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Discovery Clubs
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Enriching the academic experience through hands-on learning and creative exploration.
        </p>
      </header>

      {/* 2. SIMPLE TAB NAVIGATION */}
      <div className="flex justify-center flex-wrap gap-2 px-6 mb-12">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
              activeTab === cat.id 
              ? 'bg-primary border-primary text-white shadow-md' 
              : 'bg-white border-gray-200 text-gray-500 hover:border-primary hover:text-primary'
            }`}
          >
            <FontAwesomeIcon icon={cat.icon} className="text-xs" />
            {cat.name}
          </button>
        ))}
      </div>

      {/* 3. PROFESSIONAL GRID */}
      <main className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map(club => (
          <div
            key={club.id}
            onClick={() => setSelectedClub(club)}
            className="group bg-white border border-gray-100 rounded-2xl p-6 transition-all hover:shadow-xl hover:border-primary-light cursor-pointer flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={club.icon} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary-light px-3 py-1 rounded-md">
                {club.category}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{club.name}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              {club.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
               <div className="text-xs font-bold text-gray-400">
                  <FontAwesomeIcon icon={faCalendar} className="mr-2 opacity-50" />
                  {club.meetingDay}
               </div>
               <div className="text-primary text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Details <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
               </div>
            </div>
          </div>
        ))}
      </main>

      {/* 4. CLEAN MODAL */}
      {selectedClub && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary-dark/40 backdrop-blur-sm" onClick={() => setSelectedClub(null)} />
          
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-white">
            <button 
              onClick={() => setSelectedClub(null)} 
              className="absolute top-4 right-4 w-10 h-10 text-gray-400 hover:text-primary transition-colors flex items-center justify-center z-10"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl">
                  <FontAwesomeIcon icon={selectedClub.icon} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedClub.name}</h2>
                  <span className="text-xs font-bold text-primary uppercase">{selectedClub.category}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center p-4 bg-primary-light rounded-xl">
                  <span className="text-xs font-bold text-primary-dark uppercase">Timing</span>
                  <span className="text-sm font-bold text-primary">{selectedClub.time}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary-light rounded-xl">
                  <span className="text-xs font-bold text-primary-dark uppercase">Location</span>
                  <span className="text-sm font-bold text-primary">{selectedClub.location}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary-light rounded-xl">
                  <span className="text-xs font-bold text-primary-dark uppercase">Total Members</span>
                  <span className="text-sm font-bold text-primary">{selectedClub.members}</span>
                </div>
              </div>

              <p className="text-gray-500 text-center mb-8 px-2 leading-relaxed">
                 {selectedClub.description}
              </p>

              <button className="w-full py-4 rounded-xl bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary-dark transition-all">
                Join this Club
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubActivities;