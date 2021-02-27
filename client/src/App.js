import React from 'react';
import Nav from './components/Nav';
import ServiceSection from './components/ServiceSection';
import serviceData from './serviceData';
import Hero from './components/Hero';
import Team from './components/Team';
import teamMember from './teamMember';
import Contact from './components/Contact';
import Aboutus from './components/AboutUs';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Aboutus />
      <ServiceSection serviceData={serviceData}/>
      <Team teamMember={teamMember}/>
      <Contact />
    </div>
  );
}
export default App;