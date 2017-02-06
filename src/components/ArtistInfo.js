import React, { Component } from 'react'
import axios from 'axios'
import 'react-table/react-table.css'
// const key = '6482c833c701e11ea0e0ad3af29e89a1'


class ArtistInfo extends Component{
  constructor(props){
    super(props)

    this.state = {
      artistId: '',
      artistName: '',
      genres: [],
      images: [],
      tracks: [],
      songUrls: [],
      url: `https://api.spotify.com/v1/search?q=${this.props.artistName}&type=artist`

    }
    console.log(this.state);

      // this.getArtistInformation.call(this, this.state.url)
  }

//==================GET ARTIST INFORMATION==================================
  getArtistInformation(spotifyIdUrl){
    const requestForArtistId = axios.get(spotifyIdUrl)
    requestForArtistId.then( (data) => {
      console.log(data);
      this.setState({
        artistId: data.data.artists.items[0].id,
        genres: data.data.artists.items[0].genres
      })
      const spotifyDataUrl = `https://api.spotify.com/v1/artists/${this.state.artistId}/top-tracks?country=us`
      return axios.get(spotifyDataUrl)
    }).then( (data) => {

      const { tracks } = data.data
      const albumNames = tracks.map((album) => album.album.name + '\n' )
      const theTracks = tracks.map((track) =>  track.name + '\n' )
      const songUrls = tracks.map((song) => song.preview_url + '\n' )
      const nestedImagesArray = tracks.map((album) => album.album.images + '\n')
      const imagesArray = nestedImagesArray.map((image) => image + '\n')

      this.setState({
        artistName: tracks[0].artists[0].name,
        albums: albumNames,
        tracks: theTracks,
        songUrls: songUrls,
        images: imagesArray
      })
    })

  }
//=============end of getArtistInformation function==========================
  render(){
    console.log(this.state)
    return(
      <div>
        <table className="table table-inverse">
          <thead>
            <tr><td>{this.props.artistName}</td></tr>
            <tr><td>{this.props.albums}</td></tr>
            <tr><td>{this.props.tracks}</td></tr>
            <tr><td>{this.props.songUrls}</td></tr>
            <tr><td>{this.props.images}</td></tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    )
  }

}

export default ArtistInfo
