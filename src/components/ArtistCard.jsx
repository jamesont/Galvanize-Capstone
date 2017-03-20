import React, {Component} from 'react'
import AudioAnalyzer from "./AudioAnalyzer"

export default class ArtistCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            // renderAudioAnalyzer: false,
            setPreviewUrl: ''
        }

        this.updateSongUrl = this.updateSongUrl.bind(this);
    }

    updateSongUrl(e){
        e.preventDefault()
        this.props.updatePreviewUrl(this.props.previewUrl, this.props.songName, this.props.artistName)
    }

    render() {
        let {tracks} = this.props
        // if(!this.state.renderAudioAnalyzer){
            return (
                <div className="card col s3" id="artistCard">
                    <div className="card-inner">
                        <div className="card-image">
                            <img alt="/logo.svg" className="Image" src={tracks.album.images[1].url}/>
                            <span className="card-title"></span>
                        </div>
                        <div className="card-content">
                            <p id="artistCardTrackName">{tracks.album.name}</p>
                        </div>
                        <div className="card-action">
                            <a
                                onClick={this.updateSongUrl}
                                href={tracks.preview_url}
                            >{tracks.name}</a>
                        </div>
                    </div>
                </div>
            )
    }
}
