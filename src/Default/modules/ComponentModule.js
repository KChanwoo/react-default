/**
 * 서버와 통신을 담당하는 모듈
 * @author ChanWoo Kwon
 * date : 2018-02-05
 */
import {createAction, handleActions} from 'redux-actions';
import {Map} from 'immutable';
import $ from "jquery";

const SET_INFO = 'template/SET_INFO';

const ANALYZE_PENDING = 'template/ANALYZE_PENDING';
const ANALYZE_FAILURE = 'template/ANALYZE_FAILURE';
const ANALYZE_SUCCESS = 'template/ANALYZE_SUCCESS';

export const setInfo = createAction(SET_INFO);

const initialState = Map({
	componentSetting:  null
});

export function analyze(server, params) {
	return (dispatch) => {
		dispatch({type: ANALYZE_PENDING});
		
		return $.when($.ajax({
			url:         server,
			type:        'POST',
			contentType: 'application/json; charset=UTF-8',
			crossDomain: true,
			data:        JSON.stringify(params),
			dataType:    'json',
			success:     function (data) {
				dispatch({
					type:    ANALYZE_SUCCESS,
					payload: {error: false}
				});
			},
			error:       function (jqXHR, textStatus, errorThrown) {
				dispatch({
					type:    ANALYZE_FAILURE,
					payload: {error: true, message: textStatus}
				});
			}
		}));
	};
}

export default handleActions({
	[SET_INFO]:        (state, action) => {
		return state.set('componentSetting', action.payload.componentSetting);
	//	.set('afterSave', action.payload.afterSave); // after setting
	},
	[ANALYZE_PENDING]: (state, action) => {
		return state.set('pending', true)
		.set('error', false)
		.set('message', '');
	},
	[ANALYZE_SUCCESS]: (state, action) => {
		return state.set('pending', false)
		.set('error', false)
		.set('message', '');
	},
	[ANALYZE_FAILURE]: (state, action) => {
		return state.set('pending', false)
		.set('error', true)
		.set('message', action.payload.message);
	}
}, initialState);