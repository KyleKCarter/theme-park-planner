import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware'

//reducers
import userInputReducer from './reducers/UserInputReducer/userInputReducer'
import formulaReducer from './reducers/FormulaReducer/formulaReducer'

const root = combineReducers({
    userInputReducer,
    formulaReducer
});

export default createStore(root, applyMiddleware(promise));