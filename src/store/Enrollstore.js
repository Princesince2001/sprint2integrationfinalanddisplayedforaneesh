// store.js
import { createStore, applyMiddleware } from 'redux';
import { enrollReducer } from '../reducers/Enrollreducer';
import { enrollMiddleware } from '../middleware/EnrollApi';

export const store = createStore(enrollReducer, applyMiddleware(enrollMiddleware));
