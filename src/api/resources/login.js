import api from '../api'
import SessionStore from '../../utils/sessionStorage'

export default {
    login(params) {
        return new Promise((resolve, reject) => {
            api.post('/login', params)
                .then((result) => {
                    if (result.data.token)
                        SessionStore.set('token', result.data.token)

                    resolve(result.data)
                })
                .catch((error) => {
                    reject(error.response.data)
                })
        })
    }
}