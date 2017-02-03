import React, { Component } from 'react'
import axios from 'axios'
// import ReactTable from 'react-table'

// const key = '6482c833c701e11ea0e0ad3af29e89a1'
const artist = 'metallica'
const spotifyIdUrl = `https://api.spotify.com/v1/search?q=${artist}&type=artist`

class ArtistInfo extends Component{
  constructor(props){
    super(props)

    this.state = {
      // songElements: ''
      artistId: '',
      artistName: '',
      genres: [],
      images: [],
      tracks: [],
      songUrls: [],
    }

    this.getArtistInformation.call(this, spotifyIdUrl)
  }


//==================GET ARTIST INFORMATION==================================
  getArtistInformation(spotifyIdUrl){
    const requestForArtistId = axios.get(spotifyIdUrl)
    requestForArtistId.then( data => {
      this.setState({
        artistId: data.data.artists.items[0].id,
        genres: data.data.artists.items[0].genres
      })
      const spotifyDataUrl = `https://api.spotify.com/v1/artists/${this.state.artistId}/top-tracks?country=us`
      return axios.get(spotifyDataUrl)
    }).then( data => {

      const { tracks } = data.data

      const albumNames = tracks.map((album) => <li>{album.album.name}</li> )
      const theTracks = tracks.map((track) =>  <li>{track.name}</li> )
      const songUrls = tracks.map((song) => <li>{song.preview_url}</li> )
      const nestedImagesArray = tracks.map((album) => <li>{album.album.images}</li> )
      const imagesArray = nestedImagesArray.map((image) => <li>{image}</li> )

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
    return(
      <div>
        <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Genres</th>
              <th>Albums</th>
              <th>Tracks</th>
            </tr>
            <td>
              here is the td
            </td>
            <td>
              is
            </td>
            <td>
              table
            </td>
            <td>
              data
            </td>
          </thead>
        </table>
        </div>
      </div>
    )
  }

}

export default ArtistInfo
