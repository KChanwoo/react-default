/**
 *
 * @author ChanWoo Kwon
 * date : 2018-02-12
 */
import { combineReducers } from 'redux';

import config from './config';
import DefaultModule from './DefaultModule';

export default combineReducers({
	config,
	DefaultModule
});