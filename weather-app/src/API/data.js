export async function WeatherData(lat, lon) {
  const apiKey = import.meta.env.VITE_API_KEY
  const apiUrl_autoLocation = "https://ip-api.com/json/"
  const apiUrl_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl_autoLocation, apiUrl_weather);
    return await response.json();
  } catch (error) {
    console.error("error fetching weather data", error);
    return null;
  }
}