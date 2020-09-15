import React from 'react';
import './App.css';
import Nav from "./components/Nav/index";
import Contact from './components/Contact/Contact';
import Aboutus from './components/Contact/Aboutus';
import ServiceSection from './components/ServiceSection';
import Hero from "./components/Hero/index";
// import Modal from './components/ServiceModal';
import serviceData from "./serviceData"
import Team  from './components/Contact/Team';
import Map from './components/Map/Map';

function App() {
  return (
    <div>
      <Nav />
      <Hero backgroundImage= "https://www.lai.org/sites/default/files/images/home-page/h-lai-sacramento.jpg"> 
        <h1>Sacramento Management Company</h1>
      </Hero>
      <Aboutus />
      <Team />
      {/* <Modal /> */}
      <ServiceSection serviceData={serviceData}/>
      <Contact />
      <Map />
    </div>
  );
}

export default App;
