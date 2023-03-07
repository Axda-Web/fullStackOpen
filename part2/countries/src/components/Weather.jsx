import React, { useState, useEffect } from "react";
import weatherService from "../services/weather";

const Weather = ({ capitalName }) => {
  const [countryWeatherData, setCountryWeatherData] = useState([]);

  useEffect(() => {
    weatherService.getCountryWeather(capitalName).then((weatherData) => {
      setCountryWeatherData(weatherData);
    });
  }, []);

  if (countryWeatherData.length === 0) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h3>Weather in {capitalName}</h3>
      <div>temperature {countryWeatherData.main.temp}° Celcius</div>
      <img
        src={`https://openweathermap.org/img/wn/${countryWeatherData.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <div>wind {countryWeatherData.wind.speed} m/s</div>
    </>
  );
};

export default Weather;
