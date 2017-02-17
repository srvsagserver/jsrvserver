import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from "react-router";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import routes from './routes';

import './base.scss';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        {/* TODO: change hashHistory to browserHistory after developing*/}
        <Router history={hashHistory} routes={routes}/>
    </Provider>, document.getElementById('app')
);
