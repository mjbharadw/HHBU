// Define the self-care objects


var water = {
    achieved: false,
    value: 0
};

var sleep = {
    achieved: false,
    value: 0
};

var clean = {
    achieved: false,
    value: 0
};

var reflection = {
    achieved: false,
    value: 0
};

var read = {
    achieved: false,
    value: 0
};

var walk = {
    achieved: false,
    value: 0
};

document.getElementById('exerciseStatus'.innerHTML = exercise.achieved);

function logExerciseStatus() {
  console.log("Exercise ???? Achieved: " + exercise.achieved);
}


var exercise = {
  achieved: false,
  value: 0
};
// Access the attributes of the objects and update the HTML

/*

function App() {
  var exerciseStatus = document.getElementById("exerciseStatus");
  exerciseStatus.textContent += exercise.achieved ? "Yes" : "No";

  return {
    <div>
    <p id="exerciseStatus">Exercise ??Achieved: </p>
    <p id="waterStatus">Water ??Achieved: </p>
    </div>
    }

}
*/
 






































































const apiKey = 'a2b62026054742ba9987d42c28b937fc';

// Function to fetch weather data
async function fetchWeatherData(city, state) {
  try {
    const response = await fetch(`http://api.weatherbit.io/v2.0/current?key=${apiKey}&q=${city},${state}&days=7`);
    const data = await response.json();
    return data.forecast.forecastday; // Adjust this based on your API response structure
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return [];
  }
}

// Function to update the DOM with weather data
function updateWeatherData(weatherData) {
  // Update the HTML elements with the weather data
  // You will need to set the data for each day (Monday, Tuesday, etc.) in your specific elements.
}

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', async () => {
  const city = document.getElementById('city-input').value;
  const state = document.getElementById('state-input').value;

  if (city && state) {
    const weatherData = await fetchWeatherData(city, state);
    updateWeatherData(weatherData);
  } else {
    alert('Please enter both city and state.');
  }
});



