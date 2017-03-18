import React, {Component} from 'react'
import AudioAnalyzer from "./AudioAnalyzer"

export default class ArtistCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            renderAudioVisualizer: false,
            preview_url: ''
        }
    }

    togglePreviewUrlState(){
        this.setState({
            renderAudioVisualizer: true,
            preview_url: this.state.preview_url
        })
        console.log('thisisthestaste' , this.state);
    }

    render() {
        let {tracks} = this.props
        if(!this.state.renderAudioVisualizer){
            return (
                <div className="card col s3">
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
                                onClick={this.togglePreviewUrlState.bind(this)}
                                href={tracks.preview_url}
                            >{tracks.name}</a>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <AudioAnalyzer/>
                </div>
            )
        }
    }
}
