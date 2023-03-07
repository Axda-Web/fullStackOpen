import axios from 'axios'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = process.env.REACT_APP_API_KEY

const getCountryWeather = (country) => {
    const request = axios.get(`${BASE_URL}?q=${country}&units=metric&appid=${API_KEY}`)
    return request.then(response => response.data)
}

export default {
    getCountryWeather
}