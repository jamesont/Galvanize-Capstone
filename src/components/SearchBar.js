import React, { Component } from 'react'
import '../App.css'
import { Button } from 'react-bootstrap'

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

                <Button id="searchBarButton" type="submit" bsStyle="primary" className="btn btn-default">Search</Button>

            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default SearchBar
