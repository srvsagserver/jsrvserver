import React from 'react';
import {  Route, IndexRoute } from "react-router";

import App from './components/App';

import Swagger from './common/swagger/Swagger';

import SignupPage from './pages/signup/SignupPage';
import SigninPage from './pages/signin/SigninPage';
import Landing from './pages/landing/Landing';
import CompanySelectPage from './pages/company-select/CompanySelectPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="signup" component={SignupPage} />
        <Route path="signin" component={SigninPage} />
        <Route path="company-select" component={CompanySelectPage} />
        <Route path="dev-docs" component={Swagger} />
    </Route>
);
