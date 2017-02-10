import React, { Component } from 'react'

class ArtistInfo extends Component{
  constructor(props){
    super(props)

  }

  componentWillMount(){
     if(this.props.artistName !== undefined){
      this.props.getArtistInformation(`https://api.spotify.com/v1/search?q=${this.props.artistName}&type=artist`)
    }
  }

  dothetracks(){
    let tracks
    for(let i = 0; i < this.props.songUrls.length; i++){
      tracks += this.props.songUrls[i]
    }
    return tracks
  }

  render(){
      return(
        <div>
           <table className="table table-inverse">
              <thead>
                <tr>
                  <th>Artist Name</th>
                  <th>Albums</th>
                  <th>Tracks</th>
                  <th>Songs</th>
                  <th>Images</th>
                </tr>
              </thead>
              <tbody>
                 <tr>
                   <td>{this.props.artistName}</td>
                   <td>{this.props.albums}</td>
                   <td>
                    {this.props.songUrls.map(function(songUrl, i) {
                      return (
                        <tr><a href={songUrl}>{this.props.tracks[i]}</a>
                          <br />
                        </tr>
                      )
                    }.bind(this))}
                   </td>
                   <td>{this.props.images}</td>
               </tr>
              </tbody>
            </table>
        </div>
      )
  }

}

export default ArtistInfo
