import {
    GET_USER,
    USER_ERROR,
    SIGN_OUT,
    SET_ROLE,
    CREATE_USER,
    GET_ME,
    UPDATE_RESTAURANT,
    ERROR_RESTAURANT,
    GET_ALL_FOR_USER,
    ADD_NEW_EMPLOYEE,
    GET_NEW_EMPLOYEE,
    SET_PASSWORD,
    GET_USERS
} from '../types'
import axiosInstance from '../helper/axiosInstance';
import axios from 'axios';

export const getUser = (email, password) => async dispatch => {
    
    try{
        const res = await axiosInstance.post('/user_service/user/auth/login', {
            "email": email,
            "password": password
        });

        window.localStorage.setItem("accessToken", res.data.accessToken);
  
        dispatch( {
            type: GET_USER,
            payload: res.data.data,
            email: email
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}


export const getAllForUser = (id) => async dispatch => {
    
    try{
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8083',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        const res = await axiosInstance1.get('/user_service/user/' + id);
        console.log("Sve za usera")
        console.log(res);
        console.log(res.data.roles[0].id);
        dispatch( {
            type: GET_ALL_FOR_USER,
            payload: res.data,

        });
        return Promise.resolve(res.data);
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}


export const updateUserWithRestaurantId = (email,restaurantId) => async dispatch => {

    console.log(restaurantId)
    console.log(email)
    const token = window.localStorage.getItem('accessToken') 
    const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
    const axiosInstance1 = axios.create({
        baseURL: 'http://localhost:8083',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    });
    try{
        const res = await axiosInstance1.put('/user_service/user/restaurantId/'+email, {
            "restaurantId": restaurantId

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

export const createUser = (name,email, password,phoneNumber) => async dispatch => {

    try{
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8083',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        const res = await axiosInstance1.post('/user_service/user', {
            "name":name,
            "email": email,
            "password": password,
            "phoneNumber":phoneNumber
        });
        console.log(res);
        dispatch( {
            type: CREATE_USER,
            payload: email,
            userName:name,
            userPhoneNumber:phoneNumber
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}


export const addEmployee = (name,email, password,phoneNumber, restaurantId) => async dispatch => {

    try{
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8083',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        const res = await axiosInstance1.post('/user_service/registration/user', {
            "name": name,
            "email": email,
            "password": password,
            "phoneNumber":phoneNumber,
            id_restaurant: restaurantId
        });
        console.log(res);
        dispatch( {
            type: ADD_NEW_EMPLOYEE,
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

export const getMe = (email) => async dispatch => {
    
    try{
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8083',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        const res = await axiosInstance1.get('/user_service/user/email/'+email);
        dispatch( {
            type: GET_ME,
            id: res.data
        });
        return Promise.resolve(res.data);
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

export const getUsers = (type) => async dispatch => {
    
    try{
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8083',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        const res = await axiosInstance1.get('/user_service/users', {type});
        console.log(res.data)
        dispatch( {
            type: GET_USERS,
            id: res.data
        });
        
        return Promise.resolve(res.data);
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

export const getConfirm = (code) => async dispatch => {
    
    try{
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8083',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        const res = await axiosInstance1.get('/user_service/confirm/token/'+code);
        dispatch( {
            type: GET_ME,
            id: res.data
        });
        return Promise.resolve(res.data);
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

export const getNewEmployee = (email) => async dispatch => {
    
    try{
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8083',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        const res = await axiosInstance1.get('/user_service/user/email/'+email);
        dispatch( {
            type: GET_NEW_EMPLOYEE,
            id: res.data
        });
        return Promise.resolve(res.data);
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}
    

export const signOut = () => async dispatch => {
    
    try {
        window.localStorage.setItem("accessToken", "");

        dispatch( {
            type: SIGN_OUT
        });

        dispatch( {
            type: GET_USER,
            payload: null,
            email: null
        });
    }
    catch(e) {
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
    }
}

export const setRole = (idRole, idUser) => async dispatch => {
    //to do: make this action to work properly xD
    const token = window.localStorage.getItem('accessToken') 
    const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
    const axiosInstance1 = axios.create({
        baseURL: 'http://localhost:8083',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    });
    try{
        const res = await axiosInstance1.post('/user_service/userRole', {
            "idRole": idRole,
            "idUser": idUser
        });
        dispatch( {
            type: SET_ROLE,
            isDoctor: idRole === "2"
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

export const setRoleAdmin = (idRole, idUser) => async dispatch => {
    //to do: make this action to work properly xD
    const token = window.localStorage.getItem('accessToken') 
    const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
    const axiosInstance1 = axios.create({
        baseURL: 'http://localhost:8083',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    });
    try{
        const res = await axiosInstance1.post('/user_service/role', {
            "idRole": idRole,
            "idUser": idUser
        });
        dispatch( {
            type: SET_ROLE,
            isDoctor: idRole === "2"
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}
    
export const updateUser = (params) => async dispatch => {
    
    try{
        //to do: make this work properly
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8083',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        const res = await axiosInstance1.post('/user_service/user/newpassword', params);
        dispatch( {
            type: GET_USER,
            payload: res.data.data
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

export const updateUserProfile = (params, email) => async dispatch => {
    
    try{
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8083',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        //to do: make this work properly
        const res = await axiosInstance1.put('/user_service/delete/update', params);
        dispatch( {
            type: GET_USER,
            payload: res.data.data
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}

export const resetPassword = (email, newpass, newpass2) => async dispatch => {
    console.log(email)
    console.log(newpass)
    try{
        //to do: make this work properly
        const token = window.localStorage.getItem('accessToken') 
        const auth = token ? 'Bearer ' + window.localStorage.getItem("accessToken") : undefined;
        const axiosInstance1 = axios.create({
            baseURL: 'http://localhost:8083',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        const res = await axiosInstance1.post('/user_service/user/newpassword',{
            "email": email,
            "new_password": newpass,
            "confirm_new_password": newpass2
        });
        dispatch( {
            type: SET_PASSWORD,
            payload: res.data.data
        });
        return Promise.resolve();
    }
    catch(e){
        dispatch( {
            type: SET_PASSWORD,
            payload: console.log(e),
        });
        return Promise.reject();
    }
}