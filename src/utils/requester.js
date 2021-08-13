import axios from 'axios'

class Requester {
  get(
    url
  ) {
    return axios(
      {
        url,
        method: 'GET',
      }
    )
  }

  post(
    url, data
  ) {
    return axios(
      {
        url,
        data,
        method: 'POST',
      }
    )
  }
}

export default new Requester()
