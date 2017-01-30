import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bandwagon</h2>
        </div>
        <SearchBar onSearchTermChange={videoSearch}/>
      </div>
    );
  }
}

export default App;
