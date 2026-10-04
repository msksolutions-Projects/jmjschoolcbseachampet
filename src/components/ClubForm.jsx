import React, { useState } from 'react';

const ClubForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    club: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.grade && formData.club) {
      alert('Registration submitted! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', grade: '', club: '', message: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const clubs = [
    'Robotics Club', 'Drama Society', 'Environmental Club', 'Debate Team',
    'Photography Club', 'Math Olympiad', 'Student Government', 'Art Club',
    'Music Band', 'Chess Club'
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex items-center justify-center font-sans">
      {/* FontAwesome Link */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Simple Header */}
        <div className="bg-blue-900 px-8 py-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Join a Club</h2>
          <p className="text-blue-200 text-sm">Register today and start your new adventure!</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
          
          {/* Form Fields Stacked Simply */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name *</label>
              <div className="relative">
                <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all outline-none"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email *</label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Grade Level *</label>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all appearance-none"
              >
                <option value="">Select Grade</option>
                <option value="9">1st Grade</option>
                <option value="10">2nd Grade</option>
                <option value="11">3rd Grade</option>
                <option value="12">4th Grade</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Select Club *</label>
              <select
                name="club"
                value={formData.club}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all appearance-none"
              >
                <option value="">Choose a Club</option>
                {clubs.map((club, idx) => (
                  <option key={idx} value={club}>{club}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all resize-none"
              placeholder="Why do you want to join?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white font-bold py-4 rounded-2xl hover:bg-blue-800 shadow-lg shadow-blue-900/20 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <i className="fas fa-paper-plane text-sm"></i>
            Register Now
          </button>

          <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-blue-900"></i>
              Fast Approval
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-blue-900"></i>
              Official Welcome
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ClubForm;