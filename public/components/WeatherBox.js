import React, {PropTypes, Component} from 'react'
export default class WeatherBox extends Component {
	render() {
		const {arr} = this.props;
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
		const weatherDiv = $('#weather'),
			scroller = $('#scroller');
		const weatherNext = weatherDiv.find('a.next');
		const weatherPrev = weatherDiv.find('a.previous');
		const widthLi = +scroller.css('width').slice(0,-2);
		const {arr, request, error} = this.props;
		let showSlide = (i) => {
			let items = scroller.find('li');
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
			scroller.animate({left: (-i * 100) + '%'});
		}
		
		weatherPrev.click((e) => {
			let leftPos = +scroller.css("left").slice(0,-2)
			let currSlide = -(leftPos)/widthLi;
			e.preventDefault();
			showSlide(currSlide - 1);
		});

		weatherNext.click((e) => {
			let leftPos = +scroller.css("left").slice(0,-2)
			let currSlide = -(leftPos)/widthLi;
			e.preventDefault();
			showSlide(currSlide + 1);
		});
		showSlide(0);
		if (request) {
			weatherDiv.removeClass('loaded');
		} else if (arr.length) {
			weatherDiv.addClass('loaded');
		} else if (error) {
			weatherDiv.html('<span>{error}</span>');
		}


	}
};

WeatherBox.propTypes = {
	arr: PropTypes.array.isRequired
};