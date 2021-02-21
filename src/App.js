import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Night from "./components/toggles.js";

function App() {
  return (
    <div className="App">
      <Header />
      <p>
        Warning the page may take some time to fully load. Please scroll slowly
      </p>
      <Night />
    </div>
  );
}

export default App;
