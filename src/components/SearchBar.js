import React, { Component } from 'react'
import '../App.css'
import ArtistInfo from './ArtistInfo'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setArtist: '',
      searched: false
    }
  }

  onSubmit(e){
    e.preventDefault()
    this.props.loginTrue()
    return <ArtistInfo/>
  }

  onSearch(e){
    console.log(event.target.value)
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <form className="form-inline" onSubmit={this.onSearch()}>
            <div>
              <input
                className="form-control"
                value={this.state.setArtist}
                onChange={event => this.setState({ setArtist: event.target.value, searched: true })}
                placeholder="   Search for an artist"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-default" onClick={this.onSearch()}>Search</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default SearchBar
