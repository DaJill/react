import {combineReducers} from 'redux';
import ReducerUserList from './reducer-user-list';
import ReducerUserAdd from './reducer-user-add';
const allReducers = combineReducers({
    UserList: ReducerUserList,
	UserAdd: ReducerUserAdd
});

export default allReducers;