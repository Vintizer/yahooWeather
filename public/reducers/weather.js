/**
 * Created by Vitaly.Zayets on 29-Mar-16.
 */

import {
	CHANGE_CITY_WEATHER, GET_PHOTOS_REQUEST, GET_WEATHER_REQUEST, GET_WEATHER_FAILURE
} from '../constants/ActionTypes'
const initialState = {
	arr: [],
	request: false,
	error: ""
};

export default function weather(state = initialState, action) {

	switch (action.type) {
		case GET_PHOTOS_REQUEST:
			return {...state, request: true}

		case CHANGE_CITY_WEATHER:
			return {...state, arr: action.payload, request: false}

		case GET_WEATHER_REQUEST:
			return {...state, request: true}

		case GET_WEATHER_FAILURE:
			return {...state, error: "No weather information"}

		default:
			return state;
	}

}