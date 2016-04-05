/**
 * Created by Vitaly.Zayets on 23-Mar-16.
 */
import {
	GET_PHOTOS_SUCCESS,
	GET_PHOTOS_REQUEST
} from '../constants/ActionTypes'

const initialState = {
	url: "https://im3-tub-ru.yandex.net/i?id=3aa946457cc8f169aff333abbf75fd78&n=33&h=215&w=280",
	request: false
};

export default function photo(state = initialState, action) {

	switch (action.type) {

		case GET_PHOTOS_REQUEST:
			return {...state, request: true}

		case GET_PHOTOS_SUCCESS:
			return {...state, url: action.payload, request: false}

		default:
			return state;
	}

}