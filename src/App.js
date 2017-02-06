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
      hasAccount: false,
      setArtist: ''
    }
    this.passSearchInput = this.passSearchInput.bind(this)
    console.log(this.state);
  }

  hasAccount(){
    this.setState({
      hasAccount: true
    })
  }

  loginTrue(){
    this.setState({
      loggedIn: true
    })
  }

  passSearchInput(event){
    let formInput = event.target.elements[0].value;
    this.setState({setArtist: formInput})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bandwagon</h2>
	      </div>
          { this.state.loggedIn && <SearchBar passSearchInput={this.passSearchInput}/> }
		      { !this.state.loggedIn && <LoginForm loginTrue={this.loginTrue.bind(this)} hasAccount={this.hasAccount.bind(this)}/> }
			    { !this.state.loggedIn && !this.state.hasAccount && <CreateNewUser loginTrue={this.loginTrue.bind(this) } hasAccount={this.hasAccount.bind(this)}/> }
          <ArtistInfo artistName={this.state.setArtist}/>
          {/* <ArtistInfo/> */}
      </div>
    )
  }
}

export default App
