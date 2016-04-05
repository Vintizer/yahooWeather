/**
 * Created by Vitaly.Zayets on 23-Mar-16.
 */


import {
	CHANGE_CITY
} from '../constants/ActionTypes'
const initialState = {
	name: "Please, select"
};

export default function photo(state = initialState, action) {

	switch (action.type) {
		case CHANGE_CITY:
			return {...state, name: action.payload}

		default:
			return state;
	}

}