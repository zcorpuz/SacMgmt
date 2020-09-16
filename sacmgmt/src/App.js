import React from 'react';
import './App.css';
import Nav from "./components/Nav/index";
import Headshots from './components/Team/Headshots';
import { Contact } from './components/Contact/Contact';
import { Aboutus } from './components/Aboutus/Aboutus';

function App() {
  return (
    <div>
    <Nav />
    
     <Headshots />
    
      <Nav />
      <Hero backgroundImage= "https://www.lai.org/sites/default/files/images/home-page/h-lai-sacramento.jpg"> 
        <h1>Sacramento Management Company</h1>
      </Hero>
      <Aboutus />
      <Team />
      {/* <Modal /> */}
      <ServiceSection serviceData={serviceData}/>
      <Headshots />
      <Contact />
      <Map />
    </div>
  );
}

export default App;
