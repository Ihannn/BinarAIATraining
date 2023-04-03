import axios from 'axios'

const token = localStorage.getItem('token')
const baseApi = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        ...(token && {
            Authorization: `Bearer ${token}`
        }),
        "Content-Type" : 'Application/json'
    }
})

export default baseApi