import React from 'react';
import './App.css';
import Nav from "./components/Nav/index";
import Contact from './components/Contact/Contact';
import Aboutus from './components/Contact/Aboutus';
import ServiceSection from './components/ServiceSection';
import serviceData from "./serviceData"
// import Team  from './components/Contact/Team';

function App() {
  return (
    <div>
      <Nav />
      <Aboutus />
      <ServiceSection serviceData={serviceData}/>
      {/* <Team /> */}
      <Contact /> 
    </div>
  );
}

export default App;
