import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import passwordReducer from './reducer';

export const store = createStore(passwordReducer, applyMiddleware(thunk));
