import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store'

import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import './statics/css/common.css'
import './statics/css/bootstrap.css'

const rootComponent = (
    <Provider
        store = { store }
    >
        <App />
    </Provider>
)

ReactDOM.render(rootComponent, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
