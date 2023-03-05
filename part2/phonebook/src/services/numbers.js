import axios from "axios";

const BASE_URL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(BASE_URL)
    return request.then(response => response.data)
}

const create = newNumber => {
    const request = axios.post(BASE_URL, newNumber)
    return request.then(response => response.data)
}

const remove = id => {
    const request = axios.delete(`${BASE_URL}/${id}`)
    return request.then(response => response.data)
}

const update = (id, newNumber) => {
    const request = axios.put(`${BASE_URL}/${id}`, newNumber)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    remove,
    update
}
