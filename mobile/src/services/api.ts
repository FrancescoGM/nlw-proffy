import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.100.228:3000'
})

export default api