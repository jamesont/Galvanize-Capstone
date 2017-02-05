import React, { Component } from 'react'
import logo from './logo.svg'
import SearchBar from './components/SearchBar'
import LoginForm from './components/LoginForm'
import CreateNewUser from './components/CreateNewUser'

import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false,
      hasAccount: false
    }

  }

  hasAccount(){ this.setState({ hasAccount:true }) }

  loginTrue(){ this.setState({ loggedIn: true }) }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bandwagon</h2>
	      </div>
          { this.state.loggedIn && <SearchBar/> }
		      { !this.state.loggedIn && <LoginForm loginTrue={this.loginTrue.bind(this)} hasAccount={this.hasAccount.bind(this)}/> }
			    { !this.state.loggedIn && !this.state.hasAccount && <CreateNewUser/> }
      </div>
    )
  }
}

export default App
