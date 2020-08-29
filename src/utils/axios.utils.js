import axios from 'axios'

import { getJwtToken } from './auth.utils'
import config from '../config'

// axios instance to be used to make http requests from the client
const axiosInstance = axios.create({
  baseURL: config.serverHost,
  headers: {
    Authorization: `Bearer ${getJwtToken}`
  }
})

export default axiosInstance
