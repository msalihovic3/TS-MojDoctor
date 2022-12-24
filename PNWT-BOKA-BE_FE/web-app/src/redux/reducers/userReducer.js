import { GET_USER, GET_ME, GET_USERS, SIGN_OUT, SET_ROLE, SET_PASSWORD, UPDATE_USER, CREATE_USER, GET_ALL_FOR_USER, ADD_NEW_EMPLOYEE } from '../types'

const initialState = {
    user: {},
    loading: true,
    isDoctor: false,
    isEmployee: false,
    roleId: null,
    email: '',
    id: '',
    idRestaurant: null,
    name:'',
    phoneNumber:'',
    jmbg:'',
    isLogged: false,
    users:[]
}

export default function(state = initialState, action) {

    switch(action.type) {

        case GET_USER:
        return {
            ...state,
            email: action.email,
            isLogged: true,
            loading: false
        }
        case GET_ALL_FOR_USER:
            return {
                ...state,
                user: action.payload,
                isDoctor: action.payload.roles[0].id === 2,
                isEmployee: action.payload.roles[0].id === 3,
                idRestaurant: action.payload.idRestaurant,
                email: action.payload.email,
                name: action.payload.name,
                phoneNumber: action.payload.phoneNumber,
                jmbg: action.payload.jmbg,
                roleId: action.payload.roles[0].id
            }

        case GET_ME:
            return {
                ...state,
                id: action.id,
                isLogged: true,
                loading: false
            }

        case CREATE_USER:
            return {
                ...state,
                email: action.payload,
                name: action.userName,
                phoneNumber: action.userPhoneNumber,
                loading: false

            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }

        case SIGN_OUT:
            return {
                ...state,
                users: {},
                user: null,
                isLogged: false,
                loading: false,
                roleId: null,
                isDoctor:null,
                email: ''
    
            }

        case SET_ROLE:
            return {
                ...state,
                isLogged: true,
                loading: false,
                isDoctor: action.isDoctor
            }
        case SET_PASSWORD:
            return {
                ...state,
                users: action.payload,
                isLogged: true,
                loading: false 
            }

        case UPDATE_USER:
            return {
                ...state,
                users: action.payload,
                isLogged: true,
                loading: false
    
            }

        case ADD_NEW_EMPLOYEE:
            return {
                ...state
    
            }
        default: return state
    }

}