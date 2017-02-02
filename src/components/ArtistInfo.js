import React, { Component } from 'react'
import axios from 'axios'

// const key = '6482c833c701e11ea0e0ad3af29e89a1'
const artist = 'downpresser'
const spotifyIdUrl = `https://api.spotify.com/v1/search?q=${artist}&type=artist`

class ArtistInfo extends Component{
  constructor(props){
    super(props)

    this.state = {
      artistId: '',
      genre: '',
      images: '',
      topTrack: '',
      songUrl: '',
      songName: '',
      artistName: ''
    }

    this.getArtistInformation.call(this, spotifyIdUrl)
  }

  getArtistInformation(spotifyIdUrl){
    const requestForArtistId = axios.get(spotifyIdUrl);
    requestForArtistId.then( data => {
      console.log(data);
       this.setState({
         artistId: data.data.artists.items[0]
        //  genre: ////
       })
       const spotifyDataUrl = `https://api.spotify.com/v1/artists/${this.state.artistId}/top-tracks?country=us`;
       return axios.get(spotifyDataUrl)
     }).then( data => {
       console.log(data);
         this.setState({
           songUrl: '',
           songName: '',
           artistName: ''
         })
    })
}

  // getArtistInfo(artistId){
  //   const spotifyDataUrl = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?counrty=us`
  //   const request = axios.get(spotifyDataUrl)
  //   request.then((data) => {
  //      this.setState({
  //        songUrl: '',
  //        songName: '',
  //        artistName: ''
  //      })
  //   })
  // }

  render(){
    return(
      <div>
        hello
      </div>
    )
  }

}

export default ArtistInfo
