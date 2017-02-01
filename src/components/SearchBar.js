import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
          placeholder="   Search for an artist"
        />
      </div>
    );
  }

}

export default SearchBar;
//state is an object that reacts to user events
