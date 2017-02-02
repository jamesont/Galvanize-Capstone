import React, { Component } from 'react'


class LoginForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit(e){
    e.preventDefault()
    this.props.loginTrue()
  }

  render(){
    return (
      <div>
        <form className="form-inline" onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
          <div className="form-group">
            <input type="email" className="form-control col-xs-3" id="email" placeholder="              Email"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control col-xs-3" id="password" placeholder="         Password"/>
          </div>
          <button id="loginButton" type="submit" className="btn btn-default">Login</button>
        </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
