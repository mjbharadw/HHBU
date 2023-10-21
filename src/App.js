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

  const handleExercisedClicked = () =>
  {
    
    if (exercised) {
      setExercised(false);
    } else {
      setExercised(true);
    }


  }

  const handleSleptClicked = () =>
  {

    if (slept) {
      setSlept(false);
    } else {
      setSlept(true);
    }
  }

  const handleReflectedClicked = () =>
  {
    if (reflected) {
      setReflected(false);
    } else {
      setReflected(true);
    }
  }

  const handleReadClicked = () =>
  {
    if (read) {
      setRead(false);
    } else {
      setRead(true);
    }
  }

  const handleNatureClicked = () =>
  {
    if (nature) {
      setNature(false);
    } else {
      setNature(true);
    }
  }

  const handleCleanedClicked = () =>
  {
    if (cleaned) {
      setCleaned(false);
    } else {
      setCleaned(true);
    }
  }

  const plusClicked = () =>
  {
    setWaterDrank(waterDrank + 1);
  }

  const minusClicked = () =>
  {
    

    if (waterDrank != 0) {
      setWaterDrank(waterDrank - 1);
    } else {
      
    }



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
        <button type="button" className="button" onClick={handleSleptClicked}> Slept </button>
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
      Exercised: {exercised ? 'true' : 'false'} <br />
      Slept: {slept ? 'true' : 'false'} <br />
      Reflected: {reflected ? 'true' : 'false'} <br />
      Read: {read ? 'true' : 'false'} <br />
      Enjoyed Nature: {nature ? 'true' : 'false'} <br />
     
      Cleaned: {cleaned ? 'true' : 'false'} <br />
      
      </div>
    </div>
  );
}

export default App;
