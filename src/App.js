import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar';
import LoginForm from './components/LoginForm';
import CreateNewUser from './components/CreateNewUser';
import ArtistInfo from './components/ArtistInfo';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  loginTrue(){
    this.setState({ loggedIn: true })
  }

  clickedTrue(){
    this.setState({ clicked: true })
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
			    {/* <CreateNewUser/>
          <ArtistInfo/> */}
      </div>
    );
  }
}

export default App;

// renderLoginForm(){
//   if(this.state.loggedIn)
//     return null;
//   else {
//     return <LoginForm/>
//   }
// }
