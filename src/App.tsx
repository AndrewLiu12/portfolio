import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="topnav">
      <nav id="header">
        <a className="nav active" href="#about">About</a>
        <a className="nav" href="#experiences">Experiences</a>
        <a className="nav" href="#projects">Projects</a>
        <a className="nav" href="#bookReviews">Book Reviews</a>
        <a className="nav" href="#skills">Skills</a>
        <a className="nav" href="#education">Education</a>
      </nav>
    </div>
  );
}

export default App;
