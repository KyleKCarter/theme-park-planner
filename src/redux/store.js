import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware'

//reducers
import userInputReducer from './reducers/UserInputReducer/userInputReducer'

const root = combineReducers ({
    userInputReducer
});

export default createStore(root, applyMiddleware(promise));