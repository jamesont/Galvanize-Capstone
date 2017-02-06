import React, { Component } from 'react'
// import ArtistInfo from './ArtistInfo'

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
    console.log(e);
  }

  render(){
    // console.log(this.state);
    return (
      <div>
        <form
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
          <button
            id="loginButton"
            type="submit"
            className="btn btn-default">Login</button>
        </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
