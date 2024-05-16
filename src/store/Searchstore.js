// import { configureStore } from '@reduxjs/toolkit';
// import Searchreducer from '../reducers/Searchreducer'; // replace './Searchreducer' with the actual path to your reducer file

// // Create the Redux store
// const Searchstore = configureStore({
//     reducer:{
//         search: Searchreducer,
//     },
// });


// // Log the initial state of the store
// console.log('Redux store after creation:', Searchstore.getState());

// export default Searchstore;

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import Searchreducer from '../reducers/Searchreducer'; // replace './Searchreducer' with the actual path to your reducer file

// Create the Redux store
const Searchstore = createStore(
  Searchreducer,
  applyMiddleware(thunk) // apply redux-thunk middleware
);

// Log the initial state of the store
console.log('Redux store after creation:', Searchstore.getState());

export default Searchstore;

