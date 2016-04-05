/**
 * Created by Vitaly.Zayets on 29-Mar-16.
 */
import React, {PropTypes, Component} from 'react'
export default class WeatherBox extends Component {
	handleChange(e) {
		this.props.setCity(e.target.value)
	}

	render() {
		const {pict, day, condition, request} = this.props
		return (
			<div id="weather">

				<ul id="scroller">
					<li>
						<img src={pict}/>
						<p className="day">{day}</p>
						<p className="cond">{condition}</p>
					</li>
				</ul>

				<a href="#" class="arrow previous">Previous</a>
				<a href="#" class="arrow next">Next</a>

			</div>
		)
		// return (
		// 	<li className={request ? "loading": ""}>
		// 		<img src={pict}/>
		// 		<p className="day"> {day} </p>
		// 		<p className="cond">{condition}</p>
		// 	</li>
		// )
	}
};

WeatherBox.propTypes = {
	pict: PropTypes.String,
	day: PropTypes.String,
	condition: PropTypes.String,
	request: PropTypes.bool.isRequired
}