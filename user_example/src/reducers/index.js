import {combineReducers} from 'redux';
import ReducerUserList from './reducer-user-list';
const allReducers = combineReducers({
	UserList: ReducerUserList
});

export default allReducers;