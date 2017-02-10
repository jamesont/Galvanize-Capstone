import React, {Component} from 'react'
import logo from './logo.svg'
import knex from 'knex'

import SearchBar from './components/SearchBar'
import LoginForm from './components/LoginForm'
import CreateNewUser from './components/CreateNewUser'
import ArtistInfo from './components/ArtistInfo'
import ArtistCard from './components/ArtistCard';
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      hasAccount: false,
      artistId: '',
      showArtistTable: false,
      data: []
    }

    this.passSearchInput = this.passSearchInput.bind(this)
    this.showArtistTable = this.showArtistTable.bind(this)
    this.getArtistInformation = this.getArtistInformation.bind(this)
  }
  // =====================================================

  getArtistInformation(spotifyIdUrl) {
    const requestForArtistId = axios.get(spotifyIdUrl)
    requestForArtistId.then((data) => {
      this.setState({artistId: data.data.artists.items[0].id,
        genres: data.data.artists.items[0].genres
      })
      const spotifyDataUrl = `https://api.spotify.com/v1/artists/${this.state.artistId}/top-tracks?country=us`
      return axios.get(spotifyDataUrl)
    }).then((data) => {

      let albums = {}
      const {tracks} = data.data

      tracks.forEach((album) => {
        if(!albums[album.album.name]){
          albums[album.album.name] = album
          album.tracks = [album]
        }else{
          albums[album.album.name].tracks.push(album)
        }
      })
      knex('users_artists').insert({"artist_id": tracks[0].artists[0].name})
      this.setState({ data: tracks })
    })
  }

  // =====================================================

  showArtistTable(e) {
    e.preventDefault()
    this.setState({loggedIn: true, hasAccount: true, showArtistTable: true})
    if (this.state.showArtistTable) {
      this.getArtistInformation(`https://api.spotify.com/v1/search?q=${this.state.setArtist}&type=artist`)
    }
  }

  hasAccount() {this.setState({loggedIn: true, hasAccount: true, showArtistTable: this.state.showArtistTable})}

  loginTrue() {this.setState({loggedIn: true, hasAccount: true, showArtistTable: this.state.showArtistTable})}

  passSearchInput(event) {
    let formInput = event.target.value
    this.setState({setArtist: formInput})
  }

  render() {
    if (this.state.showArtistTable) {
      let {data} = this.state;
      let mappedData = data.map((tracks) => {
        return (<ArtistCard tracks={tracks}/>)
      })
      return (

        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2 id="welcome">Bandwagon</h2>
            <div className="container">{mappedData}</div>
          </div>
          <div className="container">
            {this.state.loggedIn && <SearchBar passSearchInput={this.passSearchInput} showArtistTable={this.showArtistTable}/>}
            {!this.state.loggedIn && <LoginForm loginTrue={this.loginTrue.bind(this)} hasAccount={this.hasAccount.bind(this)}/>}
            {!this.state.loggedIn && !this.state.hasAccount && <CreateNewUser loginTrue={this.loginTrue.bind(this)} hasAccount={this.hasAccount.bind(this)}/>}
          <div className="card-container">{mappedData}</div>
          </div>
        </div>
      )
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Bandwagon</h2>
        </div>
        <div className="container">
          {this.state.loggedIn && <SearchBar passSearchInput={this.passSearchInput} showArtistTable={this.showArtistTable}/>}
          {!this.state.loggedIn && <LoginForm loginTrue={this.loginTrue.bind(this)} hasAccount={this.hasAccount.bind(this)}/>}
          {!this.state.loggedIn && !this.state.hasAccount && <CreateNewUser loginTrue={this.loginTrue.bind(this)} hasAccount={this.hasAccount.bind(this)}/>}
        </div>
      </div>
    )
  }
}

export default App
