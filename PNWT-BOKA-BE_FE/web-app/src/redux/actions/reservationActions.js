import {
    GET_RESERVATION,
    GET_RESERVATIONS,
    RESERVE_RESERVATION,
    APPROVE_RESERVATION,
    DECLINE_RESERVATION,
    ERROR_RESERVATION,
    GET_RESERVATIONS_GUEST,
    ERROR_EVENT
} from '../types';
import axiosInstance from '../helper/axiosInstance';
import axios from 'axios';


export const getRequestsAllGuest = (guestId) => async dispatch => {
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
        // window.localStorage.setItem("accessToken", window.localStorage.getItem("accessToken"));
        const res = await axiosInstance1.get('/api/v1/request/user/' + guestId);
    
        dispatch( {
            type: GET_RESERVATIONS_GUEST,
            //check payload
            payload: res.data
        });
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

export const getReservationsDoctor = (doctorId) => async dispatch => {
    try{
        console.log(window.localStorage.getItem("accessToken"));
        console.log("mikica 4")
      
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8091',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        // window.localStorage.setItem("accessToken", window.localStorage.getItem("accessToken"));
        const res = await axiosInstance1.get('/api/v1/request/doctor/' + doctorId);
    
        dispatch( {
            type: GET_RESERVATIONS_GUEST,
            //check payload
            payload: res.data
        });
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

export const approveReservation = (reservation_id, guest_id, restaurant_id, approvedByRestaurant) => async dispatch => {
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
        const res = await axiosInstance1.post('/reservation/approve', {reservation_id, guest_id, restaurant_id, approvedByRestaurant});
        dispatch( {
            type: APPROVE_RESERVATION
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: ERROR_RESERVATION,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}
//

export const deleteUser = (user_id) => async dispatch => {
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
        
        const res = await axiosInstance1.delete('/delete/'+ user_id);
        dispatch( {
            type: DECLINE_RESERVATION,
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: ERROR_RESERVATION,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

export const deleteRequest = (request_id) => async dispatch => {
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
        const res = await axiosInstance1.delete('/api/v1/request/'+ request_id);
        dispatch( {
            type: DECLINE_RESERVATION,
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: ERROR_RESERVATION,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

export const addRequest = (description, user, doctor) => async dispatch => {
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
        const res = await axiosInstance1.post('/api/v1/request', {description, user, doctor});
        dispatch( {
            type: RESERVE_RESERVATION,
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: ERROR_RESERVATION,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}