import axios from 'axios'

export const HttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})
