import axios from 'axios'
import { airtableConfig } from './config.js'

export default () => {
  return axios.create({
    baseURL: `${airtableConfig.endpointUrl}/v0/${airtableConfig.workspaceApp}`,
    withCredentials: false,
    headers:{
      'Authorization': `Bearer ${airtableConfig.readonlyKey}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
