import React, {PropTypes, Component} from 'react'
export default class FlickrBox extends Component {
	render() {
		const {url, request, error} = this.props
		if(error) {
			return(
				<div>
					<p className = "errorPhoto">Error while receive photo - {error}</p>
				</div>
			)
		} else {
			return (
				<div>
					<img  className={request ? "loaded photo": "photo"}  src={url} alt="ImgBoxImport"/>
				</div>
			);
		}

	}
};

FlickrBox.propTypes = {
	url: PropTypes.string.isRequired,
	request: PropTypes.bool.isRequired,
	error: PropTypes.string
}