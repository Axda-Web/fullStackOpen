import axios from 'axios'
const BASE_URL = 'https://restcountries.com/v3.1/all'

const getAll = () => {
    const request = axios.get(BASE_URL)
    return request.then(response => response.data)
}

export default {
    getAll
}