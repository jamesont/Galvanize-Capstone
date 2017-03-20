import React, {Component} from "react"
// import '../App.css'

export default class AudioAnalyzer extends Component {
  constructor(props){
    super(props)

    this.createVisualization = this.createVisualization.bind(this)
  }

  componentDidMount(){
    this.createVisualization()
  }

  createVisualization(){
    // instance of a new AudioContext class - contains linked nodes that
    // contain execution of audio processing
    let context = new AudioContext()
    //exposes audio time and frequency data and to create data visualizations
    let analyser = context.createAnalyser()
    //refs are react's version of document.getElementById:
    //grabs a canvas div
    let canvas = this.refs.analyserCanvas
    // creates a 2d rendering context
    let ctx = canvas.getContext('2d')
    //grab audio tag
    let audio = this.refs.audio
    //prevents CORS access restriction
    audio.crossOrigin = "anonymous"
    //creates new MediaElementAudioSourceNode obj. manipulates audio tags
    let audioSrc = context.createMediaElementSource(audio)
    //connects freqData to the audio tag manipulater
    audioSrc.connect(analyser)
    // connect AudioContext and analyser to source destination (the audio instance)
    audioSrc.connect(context.destination)
    analyser.connect(context.destination)

    function renderFrame
      // creates an array of 8 bit integers
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
        <h5>{this.props.artistName + ': ' + this.props.songName}</h5>
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
