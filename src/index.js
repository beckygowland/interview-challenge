import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import reduxStore from './reduxStore';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// creating a redux store for global state 
// while this app currently does not need global store 
// (everything could be done in local state in App.js and callback props),
// chances are that as this app grew, it would need global state.
// .ie if a user navigates to a checkout screen or signin page 
const store = createStore(reduxStore)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
