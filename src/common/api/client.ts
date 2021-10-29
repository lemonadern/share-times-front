import axios from 'axios'

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
  timeout: 5000,
})

export const authorizedClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${localStorage.getItem('token')}`,
  },
  responseType: 'json',
  timeout: 5000,
})
