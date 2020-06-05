import React from "react";
import logo from "./kawaii-ricebowl.png";
import "./styles.scss";
import RiceInput from "./components/RiceInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>The Rice Calculator</h1>
        <p>
          Calculate the amount of rice you need to cook for yourself or your
          guests - any type of rice you want! The calculator diverts every
          uncooked type of rice into the exact amount of cooked rice, given the
          right time and water that is required in the cooking process.
        </p>
        <RiceInput />
      </header>
    </div>
  );
}

export default App;
