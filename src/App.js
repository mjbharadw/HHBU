import './App.css';
import React, {useState} from 'react';

function App() {

  const [exercised, setExercised] = useState(false);
  const [slept, setSlept] = useState(false);
  const [reflected, setReflected] = useState(false);
  const [read, setRead] = useState(false);
  const [nature, setNature] = useState(false);
  const [cleaned, setCleaned] = useState(false);
  const [waterDrank, setWaterDrank] = useState(0);
  const [timer, setTimer] = useState(0);

  const handleExercisedClicked = () =>
  {
    setInterval(updateTimerBySecond, 1000)
    setExercised(true);
  }

  const handleSleptClicked = () =>
  {
    setSlept(true);
  }

  const handleReflectedClicked = () =>
  {
    setReflected(true);
  }

  const handleReadClicked = () =>
  {
    setRead(true);
  }

  const handleNatureClicked = () =>
  {
    setNature(true);
  }

  const handleCleanedClicked = () =>
  {
    setCleaned(true);
  }

  const plusClicked = () =>
  {
    setWaterDrank(waterDrank + 1);
  }

  const minusClicked = () =>
  {
    setWaterDrank(waterDrank - 1);
  }

  function updateTimerBySecond()
  {
    setTimer(timer + 1);
  }


  return (
    <div className="App">
      <div className="title">
        Self Care Garden
      </div>
      <div className="subtitle"> 
        Today I...
      </div>
      <div className = "button_container">
        <button type="button" className="button" onClick={handleExercisedClicked}> Exercised </button>
        <button type="button" className="button" onClick={handleSleptClicked}> Slept 7-10 Hours </button>
        <button type="button" className="button" onClick={handleReflectedClicked}> Reflected </button>
        <button type="button" className="button" onClick={handleReadClicked}> Read </button>
        <button type="button" className="button" onClick={handleNatureClicked}> Nature </button>
        <button type="button" className="button" onClick={handleCleanedClicked}> Cleaned </button>
          {waterDrank == 1 ? "Drank 1 Cup of Water" : "Drank " + waterDrank + " Cups of Water" }
          <div>
            <button type="button" className="plus_minus_button" onClick={minusClicked}> - </button>
            <button type="button" className="plus_minus_button" onClick={plusClicked}> + </button>
          </div>
      </div>
      <div>
      {exercised > 0 ? timer : null}
      Exercised: {exercised ? 'true' : 'false'} <br />
      Slept: {exercised ? 'true' : 'false'} <br />
      Enjoyed Nature: {exercised ? 'true' : 'false'} <br />
      Read: {exercised ? 'true' : 'false'} <br />
      Cleaned: {exercised ? 'true' : 'false'} <br />
      Reflected: {exercised ? 'true' : 'false'} <br />
      </div>
    </div>
  );
}

export default App;
