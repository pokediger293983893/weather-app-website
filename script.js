// script.js

const API_KEY = '8f1242c8a3f6c6192a2688b39128d656';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
async function getWeatherData(city) {
  try {
    const response = await fetch(`${baseUrl}?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Function to update the weather information on the webpage
async function updateWeather(city) {
  const weatherData = await getWeatherData(city);
  if (weatherData) {
    const weatherElement = document.querySelector('.weather');
    weatherElement.innerHTML = `
      <h2>Weather Forecast for ${city}</h2>
      <p>Temperature: ${weatherData.main.temp} K</p>
      <p>Weather: ${weatherData.weather[0].main}</p>
    `;
  }
}

// Example usage
const city = 'New York'; // Replace with the desired city
updateWeather(city);
