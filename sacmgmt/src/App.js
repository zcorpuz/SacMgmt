import React, { Component } from 'react';
// import './App.css';
import Nav from "./components/Nav/index";
import { Contact } from './components/Contact/Contact';
import Aboutus from './components/Contact/Aboutus';
import Team from './components/Contact/Team';

function App() {
  return (
    <div>
    <Nav />
     <Aboutus />
      <Team />
     <Contact /> 
    </div>
  );
}

export default App;
