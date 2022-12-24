import { combineReducers } from 'redux';
import userReducer from './userReducer';
import eventReducer from './eventReducer';
import reservationReducer from './reservationReducer';
import restaurantReducer from "./restaurantReducer";
export default combineReducers({
  user: userReducer,
  event: eventReducer,
  reservation: reservationReducer,
  restaurant: restaurantReducer
});