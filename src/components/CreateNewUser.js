import React, {Component} from 'react'

class CreateNewUser extends Component{
  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    // this.addFirstName = this.addFirstName.bind(this)
    // this.addLastName = this.addFirstName.bind(this)
    // this.addEmail = this.addFirstName.bind(this)
    // this.addEmail = this.addPassword.bind(this)
  }

  // onSubmit(e){ e.preventDefault(); this.setState({loggedIn: true})}

  onSubmit(e){
    e.preventDefault()
    this.props.loginTrue()
  
  }
  // addFirstName(e){ this.setState({ firstName: e.target.value }) }
  // addLastName(e){ this.setState({ lastName: e.target.value }) }
  // addEmail(e){ this.setState({ email: e.target.value }) }
  // addPassword(e){ this.setState({ password: e.target.value })}

  render(){
      return (
        <div>
          <form action="" className="form-inline" onSubmit={this.onSubmit.bind(this)}>
            <div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="           First name "
                  onChange={event => this.setState({ firstName: event.target.value })}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="           Last name "
                  onChange={event => this.setState({ lastName: event.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="              Email "
                  onChange={event => this.setState({ email: event.target.value })}
                />
              </div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="           Password "
                  onChange={event => this.setState({ password: event.target.value })}
                />
              </div>
              <button id="loginButton" type="submit" className="btn btn-default">Sign Up!</button>
            </div>
          </form>
        </div>
      )
    }
}

export default CreateNewUser
