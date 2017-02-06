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

  onSearch(e){
    e.preventDefault()
    this.props.passSearchInput(e)
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <form
            className="form-inline"
            onSubmit={this.onSearch.bind(this)}
            >
            <div>
              <input
                className="form-control"
                value={this.state.setArtist}
                onChange={event => this.setState({ setArtist: event.target.value, searched: true })}
                placeholder="   Search for an artist"
              />
            </div>
            <div>
              <button
                id="searchBarButton"
                type="submit"
                className="btn btn-default"
              >Search</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default SearchBar
