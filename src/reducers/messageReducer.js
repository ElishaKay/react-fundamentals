import { FETCH_MESSAGES, NEW_MESSAGE } from '../actions/types';

const initialState = {
	items: [],
	item: {}
}

export default function(state = initialState, action) {
	switch(action.type){
		case FETCH_MESSAGES:
		console.log('reducer');
			return {
				...state,
				items: action.payload
			}
		default:
			return state;
	}
}