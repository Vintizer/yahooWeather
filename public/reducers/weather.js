/**
 * Created by Vitaly.Zayets on 29-Mar-16.
 */

import {
	CHANGE_CITY_WEATHER, GET_PHOTOS_REQUEST,GET_WEATHER_REQUEST
} from '../constants/ActionTypes'
const initialState = {
	arr: [],
	request:false
};

export default function weather(state = initialState, action) {

	switch (action.type) {
		case GET_PHOTOS_REQUEST:
			return {...state, request: true}
		
		case CHANGE_CITY_WEATHER:
			return {...state, arr: action.payload, request: false}
		case GET_WEATHER_REQUEST:
			return {...state, arr: action.payload, request: true}
		default:
			return state;
	}

}