import React from 'react'
// import FounderSection from '../components/FounderSection'
import AboutSchool from '../components/AboutSchool';
import VisionMission from '../components/VisionMission';
import ManagementMessage from '../components/ManagementMessage';
import SchoolTimings from '../components/SchoolTimings';

const About = () => {
  return (
    <div>
      {/* <FounderSection /> */}
      <ManagementMessage />
      <AboutSchool />
      <VisionMission />
      
      <SchoolTimings />
    </div>
  )
}

export default About