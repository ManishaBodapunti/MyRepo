import React, { Component } from 'react';
import {Link} from 'react-router';
// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.

class Header extends Component {
  constructor() {
    // In a constructor, call `super` first if the className extends another className
    super();
  }

  // `render` is called whenever the component's props OR state are updated.
render() {
    // console.log('The App component was rendered')
return(
  <div className="tf-nav">
 	 	<nav className="navbar sticky-top navbar-toggleable-md navbar-light bg-faded ">

      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

        <a className="navbar-brand" href="#"><img src={require('./images/logo.png')} width="60" height="60" className="d-inline-block align-center" />Find'O Bistro</a>

        <div className="nav-dropdown collapse nav navbar-nav navbar-toggleable-sm" id="navbarTogglerDemo02">
             <ul className="nav navbar-nav pull-lg-right">
                <li className="nav-item active" id="nav">
                   <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#tf-collection">Collections</a>
                </li>
                <li className="nav-item dropdown">
                   <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-sign-in" aria-hidden="true"></i>Sign Up
                   </a>
                   <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">as Admin</a>
                      <a className="dropdown-item" href="#">as User</a>
                   </div>
                </li>
                <li className="nav-item">
                  <Link to ="/login" className="nav-link "><i className="fa fa-user" aria-hidden="true"></i>Login</Link>
                </li>
                <li className="nav-item">
                  <Link to ="/Admin" className="nav-link" ><i className="fa fa-sign-in" aria-hidden="true"></i>Admin</Link>
               </li>
               <li>

               </li>
            </ul>
          </div>
      </nav>
  </div>

    );
   }
 }

export default Header;