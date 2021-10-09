import api from '../api'

export default {
    cadastrar(params) {
        return new Promise((resolve, reject) => {
            console.log('resource ativado')
            api.post('/product', params)
                .then((result) => {
                    resolve(result.data)
                })
                .catch((error) => {
                    reject(error.response.data)
                })
        })
    }
}