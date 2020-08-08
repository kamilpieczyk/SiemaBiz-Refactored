import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducers';
import thunk from 'redux-thunk';

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
