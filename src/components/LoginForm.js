import React, { Component } from 'react'


class LoginForm extends Component{

  constructor(props){
    super(props)

  }

  onSubmit(e){
    e.preventDefault()
    console.log(this);
    this.props.loginTrue()
  }

  render(){

    return (
      <div>
        <form className="form-inline" onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label for="email"/>
            <input type="email" className="form-control col-xs-3" id="email" placeholder="Email"/>
          </div>
        <div className="form-group">
          <label for="password"/>
          <input type="password" className="form-control col-xs-2" id="password" placeholder="Password"/>
        </div>
          <button id="loginButton" type="submit" className="btn btn-default">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
