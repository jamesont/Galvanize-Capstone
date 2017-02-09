import React, { Component } from 'react'
import logo from './logo.svg'
import knex from 'knex'

import SearchBar from './components/SearchBar'
import LoginForm from './components/LoginForm'
import CreateNewUser from './components/CreateNewUser'
import ArtistInfo from './components/ArtistInfo'

import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      loggedIn: false,
      hasAccount: false,
      setArtist: '',
      artistId: '',
      artistName: '',
      genres: [],
      albums: [],
      images: [],
      tracks: [],
      songUrls: [],
      url: ``,
      showArtistTable: false
    }

    this.passSearchInput = this.passSearchInput.bind(this)
    this.showArtistTable = this.showArtistTable.bind(this)
    this.getArtistInformation = this.getArtistInformation.bind(this)
  }
// =====================================================

getArtistInformation(spotifyIdUrl){
  const requestForArtistId = axios.get(spotifyIdUrl)
  requestForArtistId.then( (data) => {
    this.setState({
      artistId: data.data.artists.items[0].id,
      genres: data.data.artists.items[0].genres
    })
    const spotifyDataUrl = `https://api.spotify.com/v1/artists/${this.state.artistId}/top-tracks?country=us`
      return axios.get(spotifyDataUrl)
  }).then( (data) => {

  console.log('here is the data', data);

    const { tracks } = data.data
    const albumNames = tracks.map((album) => (album.album.name + '\n').split(' ') )
    const theTracks = tracks.map((track) =>  track.name + '\n' )
    const songUrls = tracks.map((song) => song.preview_url + '\n' )
    const nestedImagesArray = tracks.map((album) => album.album.images[0].url + '\n')
    const imagesArray = nestedImagesArray.map((image) => image)


    knex('users_artists').insert({"artist_id": tracks[0].artists[0].name})


    this.setState({
      artistName: tracks[0].artists[0].name,
      albums: albumNames,
      tracks: theTracks,
      songUrls: songUrls,
      images: imagesArray
    })
  })
}

// =====================================================

  showArtistTable(e){
    e.preventDefault()
    this.setState({
      loggedIn: true,
      hasAccount: true,
      showArtistTable: true,
    })
    if(this.state.showArtistTable){
      this.getArtistInformation(`https://api.spotify.com/v1/search?q=${this.state.setArtist}&type=artist`)
    }
  }

  hasAccount(){
    this.setState({
      loggedIn: true,
      hasAccount: true,
      showArtistTable: this.state.showArtistTable
    })
  }

  loginTrue(){
    this.setState({
      loggedIn: true,
      hasAccount: true,
      showArtistTable: this.state.showArtistTable
    })
  }

  passSearchInput(event){
    let formInput = event.target.value
    this.setState({setArtist: formInput})
  }

  render() {
    if(this.state.showArtistTable){
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Bandwagon</h2>
  	      </div>
            { this.state.loggedIn && <SearchBar passSearchInput={this.passSearchInput} showArtistTable={this.showArtistTable} /> }
  		      { !this.state.loggedIn && <LoginForm loginTrue={this.loginTrue.bind(this)} hasAccount={this.hasAccount.bind(this)}/> }
  			    { !this.state.loggedIn && !this.state.hasAccount && <CreateNewUser loginTrue={this.loginTrue.bind(this) } hasAccount={this.hasAccount.bind(this)}/> }
            <ArtistInfo
              artistName={this.state.setArtist}
              albums={this.state.albums}
              tracks={this.state.tracks}
              songUrls={this.state.songUrls}
              images={this.state.images}
              getArtistInformation={this.getArtistInformation}
            />
        </div>
      )
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bandwagon</h2>
	      </div>
          { this.state.loggedIn && <SearchBar passSearchInput={this.passSearchInput} showArtistTable={this.showArtistTable}/> }
		      { !this.state.loggedIn && <LoginForm loginTrue={this.loginTrue.bind(this)} hasAccount={this.hasAccount.bind(this)}/> }
			    { !this.state.loggedIn && !this.state.hasAccount && <CreateNewUser loginTrue={this.loginTrue.bind(this) } hasAccount={this.hasAccount.bind(this)}/> }
      </div>
    )
  }
}

export default App
