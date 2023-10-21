import './App.css';
import React, {useState} from 'react';

function App() {

  const [exercised, setExercised] = useState(0);
  const [slept, setSlept] = useState(0);
  const [reflected, setReflected] = useState(0);
  const [read, setRead] = useState(0);
  const [wentOutside, setWentOutside] = useState(0);
  const [cleaned, setCleaned] = useState(0);
  const [waterDrank, setWaterDrank] = useState(0);
  const [timer, setTimer] = useState(0);

  const handleExercisedClicked = () =>
  {
    setExercised(exercised + 1);
    setInterval(updateTimerBySecond, 1000)
  }

  const handleSleptClicked = () =>
  {
    setSlept(slept + 1);
  }

  const handleReflectedClicked = () =>
  {
    setReflected(reflected + 1);
  }

  const handleReadClicked = () =>
  {
    setRead(read + 1);
  }

  const handleWentOutsideClicked = () =>
  {
    setWentOutside(wentOutside + 1);
  }

  const handleCleanedClicked = () =>
  {
    setCleaned(cleaned + 1);
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
        <button type="button" className="button" onClick={handleWentOutsideClicked}> Went Outside </button>
        <button type="button" className="button" onClick={handleCleanedClicked}> Cleaned </button>
          {waterDrank == 1 ? "Drank 1 Cup of Water" : "Drank " + waterDrank + " Cups of Water" }
          <div>
            <button type="button" className="plus_minus_button" onClick={minusClicked}> - </button>
            <button type="button" className="plus_minus_button" onClick={plusClicked}> + </button>
          </div>
      </div>
      <div>
      {exercised > 0 ? timer : null}
      </div>
    </div>
  );
}

export default App;
