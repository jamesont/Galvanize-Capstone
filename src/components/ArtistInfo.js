import React, { Component } from 'react'
import axios from 'axios'

// const key = '6482c833c701e11ea0e0ad3af29e89a1'
const artist = 'metallica'
const spotifyIdUrl = `https://api.spotify.com/v1/search?q=${artist}&type=artist`

class ArtistInfo extends Component{
  constructor(props){
    super(props)

    this.state = {
      artistId: '',
      artistName: '',
      genres: [],
      images: [],
      tracks: [],
      songUrls: []
    }

    this.getArtistInformation.call(this, spotifyIdUrl)
  }

  getArtistInformation(spotifyIdUrl){
    const requestForArtistId = axios.get(spotifyIdUrl)
    requestForArtistId.then( data => {
      // console.log('line 27', data)
       this.setState({
         artistId: data.data.artists.items[0].id,
         genres: data.data.artists.items[0].genres
       })
       const spotifyDataUrl = `https://api.spotify.com/v1/artists/${this.state.artistId}/top-tracks?country=us`
       return axios.get(spotifyDataUrl)
    }).then( data => {

      console.log(data);

      let albumNames = data.data.tracks.map( (album) => {
        return album.album.name
      })
      console.log(albumNames);
      let tracks = data.data.tracks.map( (track) => {
        return track.name
      })
console.log(tracks)
      let songUrls = data.data.tracks.map( (song) => {
        return song.preview_url
      })
console.log(songUrls)
      let nestedImagesArray = data.data.tracks.map( (album) => {
        return album.album.images
      })

      let imagesArray = nestedImagesArray.map( (image) => {
        return image
      })

      this.setState({
        artistName: data.data.tracks[0].artists[0].name,
        albums: albumNames,
        tracks: tracks,
        songUrls: songUrls,
        images: imagesArray
      })
    })
  }

  render(){
    return(
      <div>
        <div>
          <div className="form-control col-xs-3">
          {this.state.artistId}
          </div>
          <div className="form-control col-xs-3">
          {this.state.artistName}
          </div>
          <div className="form-control col-xs-3">
          {this.state.albums}
          </div>
          <div className="form-control col-xs-3">
          {this.state.tracks}
          </div>
          <div className="form-control col-xs-3">
          {this.state.songUrls}
          </div>
          <div className="form-control col-xs-3">
          {this.state.imagesArray}
          </div>
        </div>
      </div>
    )
  }

}

export default ArtistInfo
