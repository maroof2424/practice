
async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (!city) {
      resultDiv.innerHTML = "Please enter a city name.";
      resultDiv.className = "error";
      return;
    }

    resultDiv.className = "";
    resultDiv.innerHTML = "Loading...";

    const apiKey = "06eff813b8ea4192afa95249252004"; // 🔁 Replace this with your valid WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found.");
      }

      const data = await response.json();

      resultDiv.innerHTML = `
        <h3>${data.location.name}, ${data.location.country}</h3>
        <p>🌡️ Temperature: ${data.current.temp_c} °C</p>
        <p>🌤️ Weather: ${data.current.condition.text}</p>
        <p>💧 Humidity: ${data.current.humidity}%</p>
        <p>🌬️ Wind Speed: ${data.current.wind_kph} km/h</p>
      `;
    } catch (error) {
      resultDiv.innerHTML = `❌ ${error.message}`;
      resultDiv.className = "error";
    }
  }
