import React from "react";
import logo from "./kawaii-ricebowl.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>The Rice Calculator</h1>
        <p> Hello, I'm hungry!</p>
      </header>
    </div>
  );
}

export default App;
