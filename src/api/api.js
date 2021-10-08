import clienteHttp from '../utils/http'

const ApiClient = {
  get(url, query) {
    return clienteHttp.get(url, query);
  },

  post(url, parametros) {
    return clienteHttp.post(url, parametros);
  },

  put(url, parametros){
    return clienteHttp.put(url, parametros);
  }
};

export default ApiClient;
