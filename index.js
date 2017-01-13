import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';
import { Router, Route, hashHistory } from 'react-router'

import './bootstrap-dist/css/bootstrap.css';
import './font-awesome/css/font-awesome.css';


import App from './App';
import Collection from './collection';
import './index.css';



ReactDOM.render(

   <Router history={hashHistory}>
      <Route path="/" component={App}>
      <Route path="/home" component={App}/>
      <Route path="/collections" component={Collection}/>
      </Route>
   </Router>,
  document.getElementById('root')
);
