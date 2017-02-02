import React, { Component } from 'react'
import axios from 'axios'
// import ReduxPromise from 'redux-promise'

// const key = '6482c833c701e11ea0e0ad3af29e89a1'
const artist = 'downpresser'
const url = `https://api.spotify.com/v1/search?q=${artist}&type=artist`;

class ArtistInfo extends Component{
  constructor(props){
    super(props)
    this.state = {
      artistId: ''
    }
  }

  getArtistId(url){
    const request = axios.get(url)
    request.then((data) => {
      this.setState({
        artistId: data.data.artists.items[0].id
      })
    })
  }

  render(){
    return(
      <div>
        hello
      </div>
    )
  }

}

export default ArtistInfo
