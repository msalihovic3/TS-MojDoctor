import { GET_EVENT, SET_EVENT, ERROR_EVENT, GET_EVENTS, GET_EVENTS_RESTAURANT , GET_ROLES} from '../types'

const initialState = {
    event: {},
    events: [],
    eventsByRestaurant: [],
    isLogged: false,
    roles: []
}

export default function(state = initialState, action) {

    switch(action.type) {

        case GET_EVENT:
        return {
            ...state,
            event: action.payload

        }
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload
            }

        case GET_ROLES:
            return {
                ...state,
                roles: action.payload
            }
        case GET_EVENTS_RESTAURANT:
            return {
                ...state,
                eventsByRestaurant: action.payload
            }
        case SET_EVENT:
            return {
                ...state,
    
            }
        //to do: make this to work normaly
        case ERROR_EVENT:
            return {
                ...state,
    
            }

        default: return state
    }

}