import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

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
        <form
          action=""
          className="form-inline"
          onSubmit={this.onSubmit.bind(this)}
          >
          <div>
          <div>
            <input
              type="email"
              className="form-control"
              id="email" placeholder="              Email"
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <div>
            <input
              type="password"
              className="form-control"
              id="password" placeholder="         Password"
              onChange={event => this.setState({ password: event.target.value})}
            />
          </div>
          <Button
            id="loginButton"
            type="submit"
            bsStyle="primary"
            className="btn btn-default"
            >Login</Button>
        </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
