import React, { Component } from 'react'
import '../App.css'
import { Button } from 'react-bootstrap'
import axios from "axios"


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setArtist: '',
      searched: false
    }
  }

// ///////////work on this later============================
//   onClick(e){
//     e.preventDefault()
//     this.setState({
//       searched: true
//     })
//     axios.post('http://localhost:8000/addArtistInfoToDB', {
//       first_name: this.state.firstName,
//       last_name: this.state.lastName,
//       email: this.state.email,
//       hashed_password: this.state.password
//     }).then(function (response) {
//         console.log(response);
//        }).catch(function (error) {
//         console.log(error);
//        });
//   }
//onClick={this.onClick()}

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
              <Button
                id="searchBarButton"
                type="submit"
                bsStyle="primary"
                className="btn btn-default">Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default SearchBar
