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

      const ddt = data.data.tracks

      let albumNames = ddt.map( (album) => {
        return album.album.name
      })

      let tracks = ddt.map( (track) => {
        return track.name
      })

      let songUrls = ddt.map( (song) => {
        return song.preview_url
      })

      let nestedImagesArray = ddt.map( (album) => {
        return album.album.images
      })

      let imagesArray = nestedImagesArray.map( (image) => {
        return image
      })

      this.setState({
        artistName: ddt[0].artists[0].name,
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
          {this.state.artistId}
          {this.state.artistName}
          {this.state.albums}
          {this.state.tracks}
          {this.state.songUrls}
          {this.state.imagesArray}
      </div>
    )
  }

}

export default ArtistInfo
