import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers'; 

const store = createStore(rootReducer, applyMiddleware(thunk,logger))

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}