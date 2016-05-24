import SelectBox from "../components/SelectBox";
import FlickrBox from "../components/FlickrBox";
import WeatherBox from "../components/WeatherBox";
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as pageActions from '../actions/PageActions'

class App extends Component {
	render() {
		const {photo, city, weather}= this.props
		const {setCity, getWeather}  = this.props.pageActions
		return <div className='row'>
			<h1>{city.name}</h1>
			<SelectBox setCity={setCity} getWeather={getWeather}/>
			<WeatherBox arr={weather.arr} request={weather.request}  error = {weather.error}/>
			<FlickrBox url={photo.url} request={photo.request} error = {photo.error}/>
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		city: state.city,
		photo: state.photo,
		weather: state.weather
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)