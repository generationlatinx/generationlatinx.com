import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://api.airtable.com/v0/appL2lbxsCHqyIHbr`,
    withCredentials: false,
    headers:{
      'Authorization': 'Bearer keyLMZp10K8Jkfawm',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
