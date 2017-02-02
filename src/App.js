import React, { Component } from 'react'
import logo from './logo.svg'
import SearchBar from './components/SearchBar'
import LoginForm from './components/LoginForm'
import CreateNewUser from './components/CreateNewUser'
import ArtistInfo from './components/ArtistInfo'

import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false,
      searchBarClicked: false
      // ifNoAccount: true
    }
  }

  loginTrue(){
    this.setState({ loggedIn: true })
  }

  clickedTrue(){
    this.setState({ searchBarClicked: true })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bandwagon</h2>
	      </div>
          { this.state.loggedIn && <SearchBar clickedTrue={this.clickedTrue.bind(this)}/> }
		      { !this.state.loggedIn && <LoginForm loginTrue={this.loginTrue.bind(this)}/> }
			    { !this.state.loggedIn && <CreateNewUser/> }
          <ArtistInfo/>
      </div>
    )
  }
}

export default App
