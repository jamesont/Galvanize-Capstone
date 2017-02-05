import React, { Component } from 'react'
// import ReactTable from 'react-table'
import axios from 'axios'
import 'react-table/react-table.css'

// const key = '6482c833c701e11ea0e0ad3af29e89a1'
const artist = 'pantera'
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
      songUrls: [],
    }
    this.getArtistInformation.call(this, spotifyIdUrl)
  }


//==================GET ARTIST INFORMATION==================================
  getArtistInformation(spotifyIdUrl){
    const requestForArtistId = axios.get(spotifyIdUrl)
    requestForArtistId.then( (data) => {
      console.log(data.data.artists.items[0].genres);
      this.setState({
        artistId: data.data.artists.items[0].id,
        genres: data.data.artists.items[0].genres
      })
      const spotifyDataUrl = `https://api.spotify.com/v1/artists/${this.state.artistId}/top-tracks?country=us`
      return axios.get(spotifyDataUrl)
    }).then( (data) => {

      const { tracks } = data.data

      const albumNames = tracks.map((album) => <td>{album.album.name}</td> )
      const theTracks = tracks.map((track) =>  <td>{track.name}</td> )
      const songUrls = tracks.map((song) => <td>{song.preview_url}</td> )
      const nestedImagesArray = tracks.map((album) => <td>{album.album.images}</td> )
      const imagesArray = nestedImagesArray.map((image) => <td>{image}</td> )

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
        <table className="table table-inverse">
          <thead>
            <tr>
              <th>{this.state.artistName}</th>
              <th>Genre(s)</th>
              <th>Images</th>
              <th>Albums</th>
              <th>Tracks</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    )
  }

}

export default ArtistInfo
