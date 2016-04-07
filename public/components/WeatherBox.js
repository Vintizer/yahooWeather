/**
 * Created by Vitaly.Zayets on 29-Mar-16.
 */
import React, {PropTypes, Component} from 'react'
export default class WeatherBox extends Component {
	handleChange(e) {
		this.props.setCity(e.target.value)
	}

	render() {
		const {arr} = this.props
		var len = arr.length;
		return (
			<div id="weather">
				<ul id="scroller">
					{arr.map((item, index) =>(
						<li key={index}>
							<img src={"/img/iconsWeather/" + item.code + ".png"}/>
							<p className="day"> {item.day} <b>{item.date}</b></p>
							<p className="cond">{item.condition} <b>{item.temp}</b></p>
						</li>
					))
					}
				</ul>
				<a href="#" className="arrow previous">Previous</a>
				<a href="#" className="arrow next">Next</a>

			</div>
		)
	}

	componentDidUpdate() {
		var weatherDiv = $('#weather'),
			scroller = $('#scroller');
		const {arr, request, error} = this.props;
		var currentSlide = 0;
		weatherDiv.find('a.previous').click(function(e) {
			e.preventDefault();
			showSlide(currentSlide - 1);
		});

		weatherDiv.find('a.next').click(function(e) {
			e.preventDefault();
			showSlide(currentSlide + 1);
		});
		showSlide(0);
		if (request) {
			weatherDiv.removeClass('loaded');
		} else if (arr.length) {
			weatherDiv.addClass('loaded');
		} else if (error){
			weatherDiv.html('<span>{error}</span>');
		}

		function showSlide(i) {
			var items = scroller.find('li');
			if (i >= items.length || i < 0 || scroller.is(':animated')) {
				return false;
			}
			weatherDiv.removeClass('first last');
			if (i == 0) {
				weatherDiv.addClass('first');
			}
			else if (i == items.length - 1) {
				weatherDiv.addClass('last');
			}
			scroller.animate({left: (-i * 100) + '%'}, function() {
				currentSlide = i;
			});
		}
	}
};

WeatherBox.propTypes = {
	arr: PropTypes.array.isRequired
}