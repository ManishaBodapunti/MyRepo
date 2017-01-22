import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';
import { Router, Route, hashHistory } from 'react-router'

import './bootstrap-4.0.0-alpha.6-dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


import App from './App';
import Collection from './collection';
import Login from './Login';
import form from './form';
import RestaurantList from './RestaurantList';

import Admin from './Admin';
import AddRest from './AddRest';
import ViewRest from './ViewRest';




ReactDOM.render(

   <Router history={hashHistory}>
     
      
 	  <Route path="/" component={App}/>
 	  <Route path="/home" component={App}/>
 	  <Route path="/login" component={form}/>
 	  <Route path="/Rl" component={RestaurantList}/>
 	  
	  <Route path="/Admin" component={Admin}>
	    <Route path="/ViewRest" component={ViewRest}/>
	    <Route path="/AddRest" component={AddRest}/>
      </Route>
 
      
   </Router>,
  document.getElementById('root')
);
