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
          <div>
          <div>
            <input type="email" className="form-control" id="email" placeholder="              Email"/>
          </div>
          <div>
            <input type="password" className="form-control" id="password" placeholder="         Password"/>
          </div>
          <button id="loginButton" type="submit" className="btn btn-default">Login</button>
        </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
