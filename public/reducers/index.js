import { combineReducers } from 'redux'
import city from './city'
import photo from './photo'
import weather from './weather'

export default combineReducers({
	city,
	photo,
	weather
})