import {
    GET_RESTAURANTS,
    GET_BENCHES,
    ERROR_RESTAURANT,
    POST_RESTAURANT,
    CREATE_RESTAURANT,
    UPDATE_RESTAURANT,
    GET_RESTAURANT,
    POST_BENCHES,
    POST_REVIEW,
    ERROR_REVIEW
} from '../types';
import axiosInstance from '../helper/axiosInstance';
import axios from 'axios';



export const updateRestaurant = (   description,
    title,
    id_request,id) => async dispatch => {

    try{
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8091',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        const res = await axiosInstance1.put('/api/v1/solution/'+id, {
          
            description,
            title,
            id_request
        });
        console.log(res);
        dispatch( {
            type: UPDATE_RESTAURANT,
            payload: res.data,

        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: ERROR_RESTAURANT,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}







export const getRestaurans = () => async dispatch => {
    try{
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8091',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
   
     
        const res = await axiosInstance1.get('/api/v1/request/all');
        dispatch( {
            type: GET_RESTAURANTS,
            //check payload
            payload: res.data
        });
        console.log("mikiiii 1111")
        console.log(res.data)
   
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: ERROR_RESTAURANT,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}



export const addNewSolution = (description, title, id_request) => async dispatch => {
    try{
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8091',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        const res = await axiosInstance1.post('/api/v1/solution', {
            description,
            title,
            id_request
        });
        dispatch( {
            type: POST_RESTAURANT,
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: ERROR_RESTAURANT,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}
