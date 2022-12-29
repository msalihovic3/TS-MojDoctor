import axios from 'axios';

const token = window.localStorage.getItem('accessToken') 
const auth = token ? 'Bearer ' + token : undefined;
const axiosInstance = axios.create({
    baseURL: 'https://'+process.env.REACT_APP_HOST_IP + ':8091',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': auth
    }
  });


export default axiosInstance;
