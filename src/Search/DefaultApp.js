import React from 'react';
import ReactDOM from 'react-dom';

import Searcher from './container/DefaultContainer';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {setConfig} from './modules/config';
import modules from './modules';

class DefaultApp {
	constructor(el) {
		this.el = el;
		this.store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
			applyMiddleware(ReduxThunk));
	}
	
	/**
	 * 화면 구성
	 * @param info
	 * @param callback
	 */
	start(info, callback) {
		this.info = info;
		callback();
	}
	
	/**
	 * 화면 정보 초기화
	 */
	init(tag, callback) {
		this.store.dispatch(setConfig({
			defaultSetting:              ''
		}));
		
		ReactDOM.render(
			<Provider store={this.store}>
				<Searcher
					onElementMounted={node => {
						this.loader = node;
					}}
				/>
			</Provider>, document.getElementById(tag), () => {
				if (callback)
					callback();
			});
	}
	
	setParagraph(paragraph) {
		this.loader.analyze(paragraph);
	}
}

export default DefaultApp;
