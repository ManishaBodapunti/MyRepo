import React, { Component } from 'react';
import './form.css';
class form extends Component {
  constructor() {
    // In a constructor, call `super` first if the className extends another className
    super();
    this.state = {
      formVisible: true,
    };
  }

  handleVisible(){
      const close=!this.state.formVisible
      this.setState({formVisible:close});
    }

  render() {
      const formVisible = this.state.formVisible;
    return (
      <form className="modal-content animate">
        <div className="imgcontainer">
          <a href="#" className="cancel">&times;</a>
          <img src={require('./images/images.jpg')} alt="Avatar" className="avatar" />
        </div>
        <div className="container" align="center">
          <label><b>Username</b></label> <br />
          <input type="text" placeholder="Enter Username" name="uname" required/><br />
          <label><b>Password</b></label><br />
          <input type="password" placeholder="Enter Password" name="psw" required/><br />
          <button className="btn" type="submit">Login</button>
          <input type="checkbox" /> Remember me
        </div>
        <div className="container" align="center">
          <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
          <span className="psw"><a href="#">Forgot password?</a></span>
          </div>
      </form>
      );
  }
}

export default form;