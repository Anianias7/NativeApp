/** @format */
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './src/store/reducer'
import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

const store = createStore(rootReducer, applyMiddleware(thunk))

const app = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => app);