import './App.css';
import React, {useState} from 'react';

function App() {

  const [exercied, setExercised] = useState(false);
  const [slept, setSlept] = useState(false);
  const [reflected, setReflected] = useState(false);
  const [read, setRead] = useState(false);
  const [walked, setWalked] = useState(false);
  const [cleaned, setCleaned] = useState(false);
  const [waterDrank, setWaterDrank] = useState(0);

  const plusClicked = () =>
  {
    setWaterDrank(waterDrank + 1);
  }

  const minusClicked = () =>
  {
    setWaterDrank(waterDrank - 1);
  }


  return (
    <div className="App">
      <div className="title">
        Self Care Garden
      </div>
      <div className="subtitle"> 
        Today I...
      </div>
      <div className = "checkbox_container">
        <input type="checkbox" text="Exercised" className="checkbox"></input>
          Exercised
        <input type="checkbox" text="Exercised" className="checkbox"></input>
          Slept 7-10 hours
        <input type="checkbox" text="Exercised" className="checkbox"></input>
          Reflected
        <input type="checkbox" text="Exercised" className="checkbox"></input>
          Read
        <input type="checkbox" text="Exercised" className="checkbox"></input>
          Went on a Walk
        <input type="checkbox" text="Exercised" className="checkbox"></input>
          Cleaned Something
      </div>
      <div className= "water">
        {waterDrank == 1 ? "Drank 1 Cup of Water" : "Drank " + waterDrank + " Cups of Water" }
        <div>
          <button type="button" className="plus_minus_button" onClick={minusClicked}> - </button>
          <button type="button" className="plus_minus_button" onClick={plusClicked}> + </button>
        </div>
      </div>
      <div>
        <button type="button" className="submit_button"> Submit Today's Log </button>
      </div>
    </div>
  );
}

export default App;
