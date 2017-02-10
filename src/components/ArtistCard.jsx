import React, {Component} from 'react';

export default class ArtistCard extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let {tracks} = this.props
    return (
      <div className="col s3 m3">
        <div className="card">
          <div className="card-image">
            <img classname="Image" src={tracks.album.images[1].url}/>
            <span className="card-title"></span>
          </div>
          <div className="card-content">
            <p id="artistCardTrackName">{tracks.album.name}</p>
          </div>
          <div className="card-action">
            <a href={tracks.preview_url}>{tracks.name}</a>
          </div>
        </div>
      </div>
    )
  }
}
