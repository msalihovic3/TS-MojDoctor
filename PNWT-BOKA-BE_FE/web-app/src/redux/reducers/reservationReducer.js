import { GET_RESERVATION, GET_RESERVATIONS, SET_RESERVATION, RESERVE_RESERVATION,GET_RESERVATIONS_GUEST, APPROVE_RESERVATION, DECLINE_RESERVATION, ERROR_RESERVATION } from '../types'

const initialState = {
    reservation: {},
    reservations: [],
    reservationsGuest: [],
    isLogged: false,
}

export default function(state = initialState, action) {

    switch(action.type) {

        case GET_RESERVATION:
        return {
            ...state,
            reservation: action.payload

        }
        case GET_RESERVATIONS:
            return {
                ...state,
                reservations: action.payload
            }
        case GET_RESERVATIONS_GUEST:
            return {
                ...state,
                reservationsGuest: action.payload
            }
        case SET_RESERVATION:
            return {
                ...state,
            }
        case APPROVE_RESERVATION:
            return {
                ...state,
    
            }
        case DECLINE_RESERVATION:
            return {
                ...state,
    
            }
        case RESERVE_RESERVATION:
            return {
                ...state,
    
            }
        //to do: make this to work normaly
        case ERROR_RESERVATION:
            return {
                ...state,
    
            }

        default: return state
    }

}