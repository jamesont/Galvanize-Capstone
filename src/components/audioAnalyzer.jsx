import React, {Component} from "react"
import '../App.css'

export default class AudioAnalyzer extends Component {
    constructor(props){
        super(props)
        this.createVisualization = this.createVisualization.bind(this)
        console.log(this.props);
    }

    componentDidMount(){
        this.createVisualization()
    }

    createVisualization(){
        let context = new AudioContext()
        let analyser = context.createAnalyser()
        let canvas = this.refs.analyserCanvas //like doc.getelbyId
        let ctx = canvas.getContext('2d')
        let audio = this.refs.audio //like doc.getelbyId
        audio.crossOrigin = "anonymous"
        let audioSrc = context.createMediaElementSource(audio)
        audioSrc.connect(analyser)
        audioSrc.connect(context.destination)
        analyser.connect(context.destination)
        renderFrame()

        function renderFrame(){
            let freqData = new Uint8Array(analyser.frequencyBinCount)
            requestAnimationFrame(renderFrame)
            analyser.getByteFrequencyData(freqData)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            console.log(freqData)
            ctx.fillStyle = '#00CCFF';
            let bars = 100;
            for (var i = 0; i < bars; i++) {
                let bar_x = i * 3;
                let bar_width = 2;
                let bar_height = -(freqData[i] / 2);
                ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)

            }
        }
        renderFrame()
    }

    render(){
        return (
            <div>
                <h2>{this.props.songName}
                    <h3>{"By: " + this.props.artistName}</h3>
                </h2>
                <div id="mp3_player">
                    <div id="audio_box">
                        <audio
                            ref="audio"
                            autoPlay={true}
                            controls={true}
                            src={this.props.songUrl}
                            >
                            </audio>
                        </div>
                        <canvas
                            ref="analyserCanvas"
                            id="analyser"></canvas>
                        </div>
                    </div>
                )
            }

        }
