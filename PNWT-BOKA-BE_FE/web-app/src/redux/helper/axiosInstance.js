import axios from 'axios';
console.log(window.localStorage.getItem('accessToken'))
console.log("mikica")
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
