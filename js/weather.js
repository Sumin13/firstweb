const apiKey = "71b1c1d0702b8b340b3eac8e96a5dd5e";
const baseApiUrl = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather(city, elementId, iconElementId) {
  const apiUrl = `${baseApiUrl}?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const weatherIcon = document.getElementById(iconElementId);
    const img = document.createElement("img");
    img.src = icon;
    weatherIcon.appendChild = img;
    const weatherElement = document.getElementById(elementId);
    weatherElement.textContent = `${data.main.temp}°C, ${data.weather[0].description}`;
  } catch (error) {
    console.error("Error fetching weather data", error);
  }
}

getWeather("New York", "ny-weather", "ny-weather-icon");
getWeather("Seoul", "seoul-weather", "seoul-weather-icon");
getWeather("London", "london-weather", "london-weather-icon");
