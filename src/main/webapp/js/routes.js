import React from 'react';
import {  Route, IndexRoute } from "react-router";

import App from './components/App';

import Swagger from './common/swagger/Swagger';

import SignupPage from './pages/signup/SignupPage';
import SigninPage from './pages/signin/SigninPage';
import Landing from './pages/landing/Landing';
import Cars from './pages/Cars';
import Food from './pages/Food';
import Health from './pages/Health';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="signup" component={SignupPage} />
        <Route path="signin" component={SigninPage} />
        <Route path="food" component={Food} />
        <Route path="cars" component={Cars} />
        <Route path="health" component={Health} />
        <Route path="dev-docs" component={Swagger} />
    </Route>
);
