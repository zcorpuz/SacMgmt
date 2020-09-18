import React from 'react';
import Nav from "./components/Nav/index";
import ServiceSection from "./components/ServiceSection";
import serviceData from "./serviceData";
import Hero from "./components/Hero";
import Headshots from './components/Team/Headshots';
// import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';


function App() {
  return (
    <div>
    <Nav />
      <Hero backgroundImage= "https://www.lai.org/sites/default/files/images/home-page/h-lai-sacramento.jpg">
        <h1>Sacramento Management Company</h1>
      </Hero>
      <Aboutus />
      {/* <Team /> */}
      <ServiceSection serviceData={serviceData}/>
      <Headshots />
      <Contact />
    </div>
  );
}
export default App;