import React, {Component} from 'react'

export default class ArtistCard extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //
        // }
    }

    setPreviewUrl(e){
        e.preventDefault()
        console.log(this.props.tracks.preview_url)
        return this.props.tracks.preview_url
    }

    render() {
        let {tracks} = this.props
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
                            onClick={this.setPreviewUrl}
                            href={tracks.preview_url}>{tracks.name}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
