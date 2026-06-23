import React from 'react';
import CareerHero from '../components/Career/CareerHero';
import CareerStats from '../components/Career/CareerStats';
import CareerCulture from '../components/Career/CareerCulture';
import CareerPositions from '../components/Career/CareerPositions';
import CareerArsenal from '../components/Career/CareerArsenal';
import CareerOffices from '../components/Career/CareerOffices';
import IndustriesTestimonials from '../components/Career/IndustriesTestimonials';
import CareerOpenApplication from '../components/Career/CareerOpenApplication';
import TalkToExpert from '../components/Career/TalkToExpert';




const Careerpage = () => {
  return (
    <div>
      <CareerHero />
      <CareerStats />
      <CareerCulture />
      <CareerPositions />
      <CareerArsenal />
      <CareerOffices />
      <IndustriesTestimonials />
      <CareerOpenApplication />
      <TalkToExpert />
      {/* Add more career sections here as they are built */}
    </div>
  );
};

export default Careerpage;