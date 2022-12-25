import {GET_EVENTS, GET_ROLES,  SET_EVENT, GET_EVENT, GET_EVENTS_RESTAURANT,  ERROR_EVENT, ERROR_ROLES} from '../types'
import axiosInstance from '../helper/axiosInstance';
import axios from 'axios';


export const getDoctors = (type) => async dispatch => {
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
        const res = await axiosInstance1.get('/users/doctors');
        dispatch( {
            type: GET_EVENTS,
            //check payload
            payload: res.data
        });
        console.log(res);
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: ERROR_EVENT,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

export const getUsers = () => async dispatch => {
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
        const res = await axiosInstance1.get('/users');
        dispatch( {
            type: GET_EVENTS,
            //check payload
            payload: res.data
        });
        console.log(res);
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: ERROR_EVENT,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

export const getRoles = () => async dispatch => {
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
        console.log('2222')
        const res = await axiosInstance1.get('/roles');
        dispatch( {
            type: GET_ROLES,
            //check payload
            payload: res.data
        });
        console.log(res);
        console.log("sssssssssss");
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: ERROR_ROLES,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

