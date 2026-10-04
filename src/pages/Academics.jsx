import React from 'react'
import AcademicOverview from '../components/AcademicOverview';
import ExaminationSystem from '../components/ExaminationSystem';
import TeachingMethodology from '../components/TeachingMethodology';
import AcademicCalendar from '../components/AcademicCalendar';

const Academics = () => {
  return (
    <div>
      <AcademicOverview />
      <ExaminationSystem />
      <TeachingMethodology />
      <AcademicCalendar />
    </div>
  )
}

export default Academics