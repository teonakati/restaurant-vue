import api from '../api'

export default {
    register(params) {
        return new Promise((resolve) => {
            api.post('/register', params)
                .then((result) => {
                    resolve(result.data)
                })
        })
    }
}