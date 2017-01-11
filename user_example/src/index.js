import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise-middleware';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import allReducers from './reducers'
import App from './components/App'
import {fetchUserList} from './actions/index';
// import './index.css';

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(allReducers, middleware);

store.dispatch(fetchUserList());
ReactDOM.render(
    <Provider store={store}> 
		<App />
	</Provider>
  ,
  document.getElementById('user_example')
);

