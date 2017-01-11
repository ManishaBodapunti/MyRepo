import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

import Collection from './collection';
import Header from './Header';

// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.

class App extends Component {
	constructor() {
		// In a constructor, call `super` first if the className extends another className
		super();
	}

	// `render` is called whenever the component's props OR state are updated.
	render() {
		// console.log('The App component was rendered')
	return (
	 <div>
	 		<div className="App">
					<nav className="navbar navbar-default navbar-fixed-top">
							<div className="container-fluid">
			 						<div className="navbar-header">
											 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
														<span className="icon-bar"></span>
														<span className="icon-bar"></span>
														<span className="icon-bar"></span>                        
											 </button>
											<a className="navbar-brand" href="#myPage">Find'O Bistro</a>
			 						</div>
									<div className="collapse navbar-collapse" id="myNavbar">
											 <ul className="nav navbar-nav navbar-right">
													 <li class="active"><Link to="/home">HOME</Link></li>
													  <li><a href="#collections">COLLECTIONS</a></li>
														<li><Link to="/home"><span className="glyphicon glyphicon-user"></span>SIGN UP</Link></li>
														<li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span>LOGIN</Link></li>
				 								</ul>
									</div>
							</div>
	 				</nav>
		</div>

		<div className="App1">
				<div className="txt">
				 		<div className="input-group">
								 <input type="text" placeholder="Hungry??  Find your favourite Bistro...." className="form-control" /> 
									<span className="input-group-btn">
									<button className="btn btn-danger" type="button" >
									<i className="glyphicon glyphicon-search"></i></button>
									</span>
						</div>
				</div>
		 </div>
			
		<Collection />
		</div>

		);
		
	 }
 }

export default App;