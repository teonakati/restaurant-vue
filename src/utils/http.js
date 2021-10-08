import axios from 'axios'
import SessionStore from './sessionStorage'

const client = axios.create({
    baseURL: process.env.VUE_APP_APIURL,
    header: { 'content-type': 'application/json' }
})

client.interceptors.request.use((config) => {
    let token = SessionStore.get(token)
    
    if (token)
        config.headers['authorization'] = `Bearer ${token}`

    return config
})

export default client