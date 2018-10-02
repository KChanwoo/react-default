/**
 * 모듈 전체에서 사용할 설정을 저장한다.
 * @author ChanWoo Kwon
 * date : 2018-02-12
 */
import {createAction, handleActions} from 'redux-actions';
import {Map} from 'immutable';

const SET = 'config/SET';

export const setConfig = createAction(SET);

const initialState = Map({
	defaultSetting:             null
});

export default handleActions({
	[SET]: (state, action) => {
		const {defaultSetting} = action.payload;
		//console.log(">>>>", token, server, frontServer, teamsdata, defaultHashHistory, contextPath, options);
		return state.set('defaultSetting', defaultSetting);
	//	.set('server', server) // after setting
	}
}, initialState)