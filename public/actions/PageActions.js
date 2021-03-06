import {
	GET_PHOTOS_REQUEST,
	CHANGE_CITY,
	GET_PHOTOS_SUCCESS,
	CHANGE_CITY_WEATHER,
	GET_WEATHER_REQUEST,
	GET_PHOTOS_FAILURE,
	GET_WEATHER_FAILURE
} from '../constants/ActionTypes'
import {NO_CITY, KHARKIV, TASHKENT, SAINT_PETERSBURG} from "../constants/Other"
import $ from "jquery"
import conditions from "../utils/conditions"

export function setCity(city) {
	return (dispatch) => {
		dispatch({
			type: GET_PHOTOS_REQUEST
		})
		dispatch({
			type: CHANGE_CITY,
			payload: city
		})
		$.post("/api/photo", {city}, (data) => {
				if (data.url.indexOf("error") === 0) {
					dispatch({
						type: GET_PHOTOS_FAILURE,
						payload: data
					})
				} else {
					dispatch({
						type: GET_PHOTOS_SUCCESS,
						payload: data.url
					})
				}
			}
		)
	}
}

export function getWeather(cityName) {
	return (dispatch) => {
		if (cityName === NO_CITY) {
			dispatch({
				type: "NO_CHANGE_CITY_WEATHER",
				payload: []
			});
		} else {
			dispatch({
				type: GET_WEATHER_REQUEST
			});
			let DEG = 'c';
			let woeid;
			switch (cityName) {
				case KHARKIV:
					woeid = "922137";
					break;
				case TASHKENT:
					woeid = "2272113";
					break;
				case SAINT_PETERSBURG:
					woeid = "2123260";
					break;
			}
			let wsql = 'select * from weather.forecast where woeid = "' + woeid + '"  and u = "' + DEG + '"',
				weatherYQL = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(wsql) + '&format=json&callback=?';

			$.getJSON(weatherYQL, (r) => {
				if (r.query.count == 1) {
					let item = r.query.results.channel.item.condition;
					let descr = r.query.results.channel.item.description;
					let weatherArr = [];
					weatherArr.push(
						{
							code: conditions(item.code),
							day: "Today",
							condition: item.text,
							temp: item.temp + '°' + DEG
						}
					)

					for (let i = 1; i < 5; i++) {
						item = r.query.results.channel.item.forecast[i];
						weatherArr.push(
							{
								code: conditions(item.code),
								day: item.day,
								date: item.date.replace('\d+$', ''),
								condition: item.text,
								temp: item.low + '°' + DEG + ' / ' + item.high + '°' + DEG
							}
						)
					}

					dispatch({
						type: CHANGE_CITY_WEATHER,
						payload: weatherArr
					})
				} else if (r.query.count === 0) {
					dispatch({
						type: GET_WEATHER_FAILURE
					})
				}
			})
		}

	}
}
