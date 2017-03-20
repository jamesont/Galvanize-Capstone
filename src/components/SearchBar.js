import React, {Component} from 'react'
import '../App.css'
import {Button} from 'react-bootstrap'

export default class SearchBar extends Component {
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
  //     this.setState({ searched: true })
  //     axios.post('http://localhost:8000/addArtistInfoToDB', {
  //       first_name: this.state.firstName,
  //       last_name: this.state.lastName,
  //       email: this.state.email,
  //       hashed_password: this.state.password
  //     }).then( (response) => {
  //         console.log(response);
  //        }).catch( (error) => {
  //         console.log(error);
  //        });
  //   }
  //onClick={this.onClick()}

  render() {
    return (
      <div className="search-bar">
        <form className="form-inline"
          onSubmit={this.props.showArtistTable}>
          <div>
            <input className="form-control"
              onChange={this.props.passSearchInput}
              placeholder="Search for an artist"
            />
          </div>
          <div>
            <Button
              id="searchBarButton"
              type="submit"
              bsStyle="primary"
              className="btn btn-default"
              >Search
            </Button>
          </div>
        </form>
      </div>
        )
      }
    }
