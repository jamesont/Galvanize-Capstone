import React, { Component } from 'react';
// import logo from './src/logo.svg';
// import './App.css';
// require('babel/polyfill');

class SearchBar extends Component {
  constructor(props) {
    super(props);
  ///"Component state" state (localized)
    this.state = { term: '' };
    console.log(this.term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          placeholder="   Search for an artist"
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  //
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
