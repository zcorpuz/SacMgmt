import React from 'react';
import './App.css';
import Nav from "./components/Nav/index";
import Contact from './components/Contact/Contact';
import Aboutus from './components/Contact/Aboutus';
import ServiceSection from './components/ServiceSection';
import serviceData from "./serviceData"
import Team  from './components/Contact/Team';
import Map from './components/Map/Map';

function App() {
  return (
    <div>
      <Nav />
      <Aboutus />
      <Team />
      <ServiceSection serviceData={serviceData}/>
      <Contact />
      <Map />
    </div>
  );
}

export default App;
