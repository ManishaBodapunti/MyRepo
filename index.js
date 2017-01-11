import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';
import { Router, Route, hashHistory } from 'react-router'

import App from './App';
import Collection from './collection';
import Login from './Login';

import './bootstrap-dist/css/bootstrap.css';
import './font-awesome/css/font-awesome.css';
import './index.css';

ReactDOM.render(

   <Router history={hashHistory}>
    <Route path="/" component={App}>
    <Route path="/home" component={App}/>
    <Route path="/login" component={Login}/>
    
    
   
    </Route>
  </Router>,
  document.getElementById('root')
);
