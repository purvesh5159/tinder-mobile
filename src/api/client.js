import axios from 'axios';

//Android
//const API_BASE = 'http://10.0.2.2:8000/api';

//Web
const API_BASE = 'http://127.0.0.1:8000/api';


const client = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default client;
