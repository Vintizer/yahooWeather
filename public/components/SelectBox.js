/**
 * Created by Vitaly.Zayets on 21-Mar-16.
 */
import React, { PropTypes, Component } from 'react'
import {NO_CITY} from '../constants/Other'
export default class SelectBox extends Component{
	handleChange(e) {
		this.props.setCity(e.target.value);
		this.props.getWeather(e.target.value);
	}
	render() {
		return(
			<select className="select"  onChange={::this.handleChange}>
				<option value = {NO_CITY}>...</option>
				<option value = "Kharkiv">Харьков</option>
				<option value = "Saint Petersburg">Санкт-Петербург</option>
				<option value = "Tashkent">Ташкент</option>
			</select>
		)
	}
};

SelectBox.propTypes = {
	setCity: PropTypes.func.isRequired,
	getWeather: PropTypes.func.isRequired
}


