import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import allReducers from './reducers'
import App from './components/App'
import {fetchUserList} from './actions/index';
// import './index.css';

const middleware = applyMiddleware(thunk, logger());
const store = createStore(allReducers, middleware);

store.dispatch(fetchUserList());
// store.dispatch((dispatch) => {

//     dispatch({type: 'FETCH_USER_LIST'});
// });
ReactDOM.render(
	// <Provider> 
    <Provider store={store}> 
		<App />
	</Provider>
  ,
  document.getElementById('user_example')
);

