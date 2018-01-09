const axios = require('axios')

export const myClientService = {

  getClientData(clientId) {
    return axios.get(`http://localhost:8090/client?id=${clientId}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
  }

}
