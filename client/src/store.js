import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { quoteListReducer} from './reducers/quoteReducer';

const reducer = combineReducers({
    quoteList: quoteListReducer
});

const initialState = {};

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;
