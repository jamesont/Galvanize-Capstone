import './App.css'
import ArtistCard from './components/ArtistCard'
import axios from 'axios'
import CreateNewUser from './components/CreateNewUser'
import LoginForm from './components/LoginForm'
import AudioAnalyzer from "./components/AudioAnalyzer"
import logo from './logo.svg'
import React, { Component } from 'react'
import SearchBar from './components/SearchBar'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false,
            hasAccount: false,
            artistId: '',
            showArtistTable: false,
            showAudioAnalyzer: false,
            data: [],
            albums: [],
            songUrl: '',
            songName: '',
            artistName: ''
        }

    this.passSearchInput = this.passSearchInput.bind(this)
    this.showArtistTable = this.showArtistTable.bind(this)
    this.getArtistInformation = this.getArtistInformation.bind(this)
    this.updatePreviewUrl = this.updatePreviewUrl.bind(this);
    }
// =====================================================

    getArtistInformation(spotifyIdUrl) {
        const requestForArtistId = axios.get(spotifyIdUrl)
        requestForArtistId.then((data) => {
        this.setState({
            artistId: data.data.artists.items[0].id,
            genres: data.data.artists.items[0].genres
        })
        const spotifyDataUrl = `https://api.spotify.com/v1/artists/${this.state.artistId}/top-tracks?country=us`
        return axios.get(spotifyDataUrl)
        }).then((data) => {

            let albums = {}
            const {tracks} = data.data
            console.log('da tracks', tracks);
            tracks.forEach((album) => {
                if(!albums[album.album.name]){
                    albums[album.album.name] = album
                    album.tracks = [album]
                }else{
                    albums[album.album.name].tracks.push(album)
                }
            })
            this.setState({ data: tracks, albums: albums })
        })
    }

// =====================================================

    showArtistTable(e) {
        e.preventDefault()
        this.setState({
            loggedIn: true,
            hasAccount: true,
            showArtistTable: true
        })
        if (this.state.showArtistTable) {
            this.getArtistInformation(`https://api.spotify.com/v1/search?q=${this.state.setArtist}&type=artist`)
        }
    }

    hasAccount() {
      this.setState({
            loggedIn: true,
            hasAccount: true,
            showArtistTable: this.state.showArtistTable
        }
    )}

    loginTrue() {
        this.setState({
            loggedIn: true,
            hasAccount: true,
            showArtistTable: this.state.showArtistTable
        }
    )}

    passSearchInput(e) {
        let searchBarFormInput = e.target.value
        this.setState({ setArtist: searchBarFormInput })
    }

    updatePreviewUrl(url, songName, artistName){
        console.log('url was clicked', url)
        this.setState({
            songUrl: url,
            showArtistTable: false,
            showAudioAnalyzer: true,
            songName: songName,
            artistName: artistName
        })
    }

    render() {
        if (this.state.showArtistTable) {
            let {data} = this.state
            var artistCardComponents = data.map((tracks) => {
                return (
                    <ArtistCard
                        tracks={tracks}
                        previewUrl={tracks.preview_url}
                        artistName={tracks.artists[0].name}
                        songName={tracks.name}
                        updatePreviewUrl={this.updatePreviewUrl}

                    />
               )
        })

      return (
          <div className="App">
              <div className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
                  <h2 id="welcome">Bandwagon</h2>
              </div>
              <div className="container">
                  {this.state.loggedIn &&
                      <SearchBar
                          passSearchInput={this.passSearchInput}
                          showArtistTable={this.showArtistTable}
                      />}
                  {!this.state.loggedIn &&
                      <LoginForm
                          loginTrue={this.loginTrue.bind(this)}
                          hasAccount={this.hasAccount.bind(this)}
                      />}
                  {!this.state.loggedIn &&
                      !this.state.hasAccount &&
                      <CreateNewUser
                          loginTrue={this.loginTrue.bind(this)}
                          hasAccount={this.hasAccount.bind(this)}
                      />}
                  <div className="card-container">
                      <div className="row">{artistCardComponents}</div>
                  </div>
              </div>
          </div>
      )

  } else if(this.state.showAudioAnalyzer){
          return(
              <div className="App">
                  <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                      <h2 id="welcome">Bandwagon</h2>
                  </div>
                  <SearchBar
                      passSearchInput={this.passSearchInput}
                      showArtistTable={this.showArtistTable}
                  />
                  <AudioAnalyzer
                    songUrl={this.state.songUrl}
                    artistName={this.state.artistName}
                    songName={this.state.songName}
                  />
              </div>
          )
      } else {
          return (
              <div className="App">
                  <div className="App-header">
                      <img src={logo} className="App-logo" alt="logo"/>
                      <h2>Bandwagon</h2>
                  </div>
              <div className="container">
                  {this.state.loggedIn && <SearchBar passSearchInput={this.passSearchInput} showArtistTable={this.showArtistTable}/>}
                  {!this.state.loggedIn && <LoginForm loginTrue={this.loginTrue.bind(this)} hasAccount={this.hasAccount.bind(this)}/>}
                  {!this.state.loggedIn && ! this.state.hasAccount && <CreateNewUser loginTrue={this.loginTrue.bind(this)} hasAccount={this.hasAccount.bind(this)}/>}
              </div>
              </div>
          )
      }
    }
}
