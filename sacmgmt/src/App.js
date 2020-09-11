import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav/index";
import { Contact } from './components/Contact/Contact';
import { Aboutus } from './components/Contact/Aboutus';

function App() {
  return (
    <div>
    <Nav />
     <Aboutus />
     <Contact /> 
    </div>
  );
}

export default App;
