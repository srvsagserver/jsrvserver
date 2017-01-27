import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './pages/Layout';
import Cars from './pages/Cars';
import Food from './pages/Food';
import Health from './pages/Health';
import SearchStarWarsPeople from './components/SearchStarWarsPeople';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Food}></IndexRoute>
            <Route path="food" component={Food}></Route>
            <Route path="cars" component={Cars}></Route>
            <Route path="health" component={Health}></Route>
            <Route path="swpeople" component={SearchStarWarsPeople}></Route>
        </Route>
    </Router>,
  document.getElementById('root')
);
