import React from 'react';
import  { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/AppContainer';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.querySelector('#app')
);