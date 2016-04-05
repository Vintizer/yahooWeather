import {
	GET_PHOTOS_REQUEST,
	CHANGE_CITY,
	GET_PHOTOS_SUCCESS,
	CHANGE_CITY_WEATHER,
	GET_WEATHER_REQUEST
} from '../constants/ActionTypes'
import {NO_CITY} from "../constants/Other"
import $ from "jquery"
import conditionsRu from "../utils/conditionsRu"

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
				console.log("post", data.url);
				dispatch({
					type: GET_PHOTOS_SUCCESS,
					payload: data.url
				})
			}
		)
	}
}

export function getWeather(cityName) {
	return (dispatch) => {
		if (cityName === NO_CITY) {
			dispatch({
				type: "NO_CHANGE_CITY_WEATHER",
				payload: {
					pict: "",
					day: "",
					condition: ""
				}
			});
		} else {
			dispatch({
				type: GET_WEATHER_REQUEST,
				payload: {
					pict: "",
					day: "",
					condition: ""
				}
			});
			let DEG = 'c';
			let wsql = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) ' +
					'where text="' + cityName + '")  and u = "' + DEG + '"',
				weatherYQL = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(wsql) + '&format=json&callback=?';
			$.getJSON(weatherYQL, function(r) {

				if (r.query.count == 1) {
					let item = r.query.results.channel.item.condition;
					let descr = r.query.results.channel.item.description;
					let weatherArr = [];
					weatherArr.push(
						{
							code: item.code,
							day: "Today",
							condition: item.text + ' <b>'+item.temp+'°'+DEG+'</b>'
						}
					)

					for (var i = 0; i < 2; i++) {
						item = r.query.results.channel.item.forecast[i];
						weatherArr.push(
							{
								code: item.code,
								day: item.day + ' <b>' + item.date.replace('\d+$', '') + '</b>',
								condition: item.text + ' <b>' + item.low + '°' + DEG + ' / ' + item.high + '°' + DEG + '</b>'
							}
						)
					}


					let reg = "http[^>]*?gif(.*?)|sei";
					descr = descr.match(reg)[0];
					dispatch({
						type: CHANGE_CITY_WEATHER,
						payload: {
							pict: descr,
							day: "Today",
							condition: "" + conditionsRu(item.code) + " " + item.temp + '°' + DEG
						}
					})
				} else if (r.query.count === 0) {
					dispatch({
						type: CHANGE_CITY_WEATHER,
						payload: {
							pict: "",
							day: "No info from yahoo weather",
							condition: ""
						}
					})
				}
			})
		}

	}
}
