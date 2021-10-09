import http from '../utils/http'

const ApiClient = {
  get(url, query) {
    return http.get(url, query);
  },

  post(url, parametros) {
    return http.post(url, parametros);
  },

  put(url, parametros){
    return http.put(url, parametros);
  }
};

export default ApiClient;
