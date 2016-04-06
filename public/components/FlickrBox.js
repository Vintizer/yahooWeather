/**
 * Created by Vitaly.Zayets on 21-Mar-16.
 */
import React, {PropTypes, Component} from 'react'
export default class FlickrBox extends Component {
	render() {
		const {url, request} = this.props
		console.log("requestFlickrBox",request);
		return (
			<div>
				<img  className={request ? "loaded photo": "photo"}  src={url} alt="ImgBoxImport"/>
			</div>
		);
	}
};

FlickrBox.propTypes = {
	url: PropTypes.string.isRequired,
	request: PropTypes.bool.isRequired
}