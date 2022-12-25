import axios from 'axios';

const token = window.localStorage.getItem('accessToken') 
const auth = token ? 'Bearer ' + token : undefined;
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8091',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': auth
    }
  });


export default axiosInstance;
