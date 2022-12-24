import {
    GET_RESTAURANT,
    SET_RESTAURANT,
    GET_RESTAURANTS,
    ERROR_RESTAURANT,
    POST_RESTAURANT,
    GET_BENCHES,
    CREATE_RESTAURANT,
    POST_REVIEW,
    ERROR_REVIEW
} from '../types'

const initialState = {
    restaurant: {},
    restaurants: [],
    benches:[],
    id: '',
    isLogged: false,
}

export default function(state = initialState, action) {

    switch(action.type) {

        case GET_BENCHES:
            return {
                ...state,
                benches: action.payload

            }
        case GET_RESTAURANT:
            return {
                ...state,
                id: action.id,
                restaurant: action.restaurant
            }

        case CREATE_RESTAURANT:
            return {
                ...state,
                restaurant: action.payload
            }
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            }
        case SET_RESTAURANT:
            return {
                ...state,
            }

        case POST_RESTAURANT:
            return {
                ...state,
            }    
        case ERROR_RESTAURANT:
            return {
                ...state,

            }

        case POST_REVIEW:
        return {
            ...state
        }

        case ERROR_REVIEW:
        return {
            ...state
        }

        default: return state
    }

}