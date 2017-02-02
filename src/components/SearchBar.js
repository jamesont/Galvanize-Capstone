import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setArtist: ''
    }
  }

  // setArtist(){
  //
  // }
  
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.setArtist}
          onChange={event => this.setState({ setArtist: event.target.value })}
          placeholder="   Search for an artist"
        />
      </div>
    );
  }

}

export default SearchBar;
//state is an object that reacts to user events
