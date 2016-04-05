/**
 * Created by Vitaly.Zayets on 29-Mar-16.
 */

import {
	CHANGE_CITY_WEATHER, GET_PHOTOS_REQUEST
} from '../constants/ActionTypes'
const initialState = {
	pict: "",
	day: "",
	condition: "",
	request: false
};

export default function weather(state = initialState, action) {

	switch (action.type) {
		case GET_PHOTOS_REQUEST:
			return {...state, request: true}
		
		case CHANGE_CITY_WEATHER:
			return {...state, pict: action.payload.pict, day: action.payload.day, condition: action.payload.condition, request: false}

		default:
			return state;
	}

}