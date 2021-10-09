import axios from 'axios'
import SessionStore from './sessionStorage'

const client = axios.create({
    baseURL: process.env.VUE_APP_APIURL,
    header: { 'content-type': 'application/json' }
})

client.interceptors.request.use((config) => {
    let token = SessionStore.get('token')
    
    console.log(token)
    if (token)
        config.headers['authorization'] = `Bearer ${token}`

    console.log(config.headers['authorization'])


    return config
})

export default client