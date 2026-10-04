import React from 'react'
import ClubActivities from '../components/ClubActivities.jsx';
import ClubForm from '../components/ClubForm.jsx';
import ClubFAQ from '../components/ClubFAQ' ;
import CulturalActivities from '../components/CulturalActivities';

const Clubs = () => {
  return (
    <div>
      <ClubActivities />
      <CulturalActivities />
      <ClubForm />
      <ClubFAQ />
    </div>
  )
}

export default Clubs