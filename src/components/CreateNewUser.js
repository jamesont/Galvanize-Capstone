import React, {Component} from 'react'
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios'

export default class CreateNewUser extends Component{
  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  onSubmit(e){
    e.preventDefault()
    this.props.loginTrue()
    axios.post('http://localhost:8000/createNewUser', {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      hashed_password: this.state.password
    }).then( (response) => {
      console.log(response)
    }).catch( (error) => {
      console.log(error)
    });
  }

  render(){
    return (
      <div>
        <form action="" className="form-inline" onSubmit={this.onSubmit.bind(this)}>
          <div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="First name "
                onChange={event => this.setState({ firstName: event.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Last name "
                onChange={event => this.setState({ lastName: event.target.value })}
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="Email "
                onChange={event => this.setState({ email: event.target.value })}
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control"
                placeholder="Password "
                onChange={event => this.setState({ password: event.target.value })}
              />
            </div>
            <Button
              id="loginButton"
              type="submit"
              bsStyle="primary"
              className="btn btn-default">Sign Up!
            </Button>
          </div>
        </form>
      </div>
    )
  }
}
