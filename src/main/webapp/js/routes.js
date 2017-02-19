import React from 'react';
import {  Route, IndexRoute } from "react-router";

import App from './components/App';

import Swagger from './common/swagger/Swagger';

import SignupPage from './pages/signup/SignupPage';
import SigninPage from './pages/signin/SigninPage';
import CompanySelectPage from './pages/company-select/CompanySelectPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={CompanySelectPage} />
        <Route path="sign-up" component={SignupPage} />
        <Route path="sign-in" component={SigninPage} />
        <Route path="dev-docs" component={Swagger} />
    </Route>
);
