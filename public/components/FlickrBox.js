/**
 * Created by Vitaly.Zayets on 21-Mar-16.
 */
import React, {PropTypes, Component} from 'react'
export default class FlickrBox extends Component {
	render() {
		const {url, request} = this.props
		return (
			<div>
				<img  className={request ? "loading": ""}  src={url} alt="ImgBoxImport"/>
				<div className={request ? "loading bar": ""}>
					<i className="sphere"></i>
				</div>
			</div>
		);
	}
};

FlickrBox.propTypes = {
	url: PropTypes.string.isRequired,
	request: PropTypes.bool.isRequired
}