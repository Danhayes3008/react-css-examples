import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <p>Warning the page may take some time to fully load. Please scroll slowly</p>
    </div>
  );
}

export default App;
