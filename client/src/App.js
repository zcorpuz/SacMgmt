import React from 'react';
import Nav from "./components/Nav/index";
import ServiceSection from "./components/ServiceSection";
import serviceData from "./serviceData";
import Hero from "./components/Hero";
// import Team from './components/Team/Team';
import Contact from './components/Contact';
import Aboutus from "./components/Aboutus/index";
// import Teammember from './components/Team/Teammember';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Aboutus />
      <ServiceSection serviceData={serviceData}/>
      <Contact />
    </div>
  );
}
export default App;