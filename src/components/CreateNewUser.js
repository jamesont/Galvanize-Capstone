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
    this.addFirstName = this.addFirstName.bind(this)
    this.addLastName = this.addFirstName.bind(this)
    this.addEmail = this.addFirstName.bind(this)
    this.addEmail = this.addPassword.bind(this)
  }

  onSubmit(e){ e.preventDefault(); this.props.loginTrue() }

  addFirstName(e){ this.setState({ firstName: e.target.value }) }
  addLastName(e){ this.setState({ lastName: e.target.value }) }
  addEmail(e){ this.setState({ email: e.target.value }) }
  addPassword(e){ this.setState({ password: e.target.value }) }

  render(){
      return (
        <div>
          <form action="" className="form-inline" onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <div className="form-group">
                <input type="text" className="form-control col-xs-3" placeholder="   First name (required)" onChange={this.addFirstName} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control col-xs-3" placeholder="   Last name (required)" onChange={this.addLastName}/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control col-xs-3" placeholder="      Email (required)" onChange={this.addEmail}/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control col-xs-3" placeholder="   Password (required)" onChange={this.addPassword}/>
              </div>
              <button id="loginButton" type="submit" className="btn btn-default">Sign Up!</button>
            </div>
          </form>
        </div>
      )
    }
}

export default CreateNewUser
