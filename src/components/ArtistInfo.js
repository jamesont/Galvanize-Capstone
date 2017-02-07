import React, { Component } from 'react'

class ArtistInfo extends Component{
  constructor(props){
    super(props)

  }

  componentWillMount(){
    console.log(this.props.artistName);
     if(this.props.artistName !== undefined){
      this.props.getArtistInformation(`https://api.spotify.com/v1/search?q=${this.props.artistName}&type=artist`)
    }
  }


  render(){
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
