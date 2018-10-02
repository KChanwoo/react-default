import React, {Component} from 'react';

import '../component/Maker.css';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import DefaultComponent from '../component/DefaultComponent';

import * as ComponentActions from '../modules/ComponentModule';
class DefaultContainer extends Component {
	constructor(props) {
		super(props);
		
		this.state = {};
		this.onEventListener = this.onEventListener.bind(this);
	}
	
	render() {
		const {onElementMounted} = this.props;
		
		onElementMounted && onElementMounted(this);
		return (
			<div className="App">
				<DefaultComponent
					onEventListener={this.onEventListener}
				/>
			</div>
		)
	}
	
	onEventListener(e) {
		
	}
}

export default connect(
	(state) => ({
		defaultSetting: state.config.get("defaultSetting"),
		componentSetting:      state.search.get("componentSetting")
	}),
	(dispatch) => ({
		DefaultActions: bindActionCreators(ComponentActions, dispatch)
	})
)(DefaultContainer);