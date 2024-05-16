import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // replace './reducers' with the actual path to your root reducer
import CourseComponent from '../components/LearnerComponent/Course'; // replace './CourseComponent' with the actual path to your CourseComponent

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <CourseComponent />
    </Provider>,
    document.getElementById('root')
);
