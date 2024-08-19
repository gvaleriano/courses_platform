import axios from 'axios'


export const api = axios.create({
  baseURL: 'https://courses-platform.onrender.com/api',
  headers: { 
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
})
