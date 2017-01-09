import {combineReducers} from 'redux';
import UserReducers from './reducer-users';
import ActiveUserReducers from './reducer-active-user';

const allReducers = combineReducers({
	users: UserReducers,
	activeUser: ActiveUserReducers
});

export default allReducers;