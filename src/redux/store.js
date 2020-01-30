import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware'

const root = combineReducers ({});

export default createStore(root, applyMiddleware(promise));