import React, { Component } from 'react'
import '../App.css'
// import ArtistInfo from './ArtistInfo'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setArtist: '',
      searched: false
    }

  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <form className="form-inline"
            onSubmit={this.props.showArtistTable}>
            <div>
              <input className="form-control"
                onChange={ this.props.passSearchInput }
                placeholder="   Search for an artist" />
            </div>
            <div>
              <button id="searchBarButton" type="submit" className="btn btn-default">Search</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default SearchBar
