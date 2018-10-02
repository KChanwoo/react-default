/**
 *
 * @author ChanWoo Kwon
 * date : 2018-09-10
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DefaultComponent extends Component {
	constructor(props) {
		super(props);
		
		this.state = {};
	}
	
	render() {
		
		return (
			<div>
			</div>
		)
	}
}

DefaultComponent.propTypes = {
	onEventListener: PropTypes.func.isRequired
};

DefaultComponent.defaultProps = {
	onEventListener: () => {
		console.log("구현되지않음!!!")
	}
};

export default  DefaultComponent;