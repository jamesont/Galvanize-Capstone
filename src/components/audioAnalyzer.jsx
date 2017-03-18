import React, {Component} from "react"
import { Button } from 'react-bootstrap'
import SearchBar from '../components/SearchBar'
import '../App.css'

export default class AudioAnalyzer extends Component {
  constructor(props){
    super(props)
  }

  frameLooper(){
    let canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height
    window.requestAnimationFrame(this.frameLooper)
    fbc_array = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteFrequencyData(fbc_array)
    ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas
    ctx.fillStyle = '#00CCFF' // Color of the bars
    bars = 100
    for (let i = 0; i < bars; i++) {
      bar_x = i * 3
      bar_width = 2
      bar_height = -(fbc_array[i] / 2)
      //  fillRect( x, y, width, height ) // Explanation of the parameters below
      ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
    }
  }

  initMp3Player(){
    let canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height
    let audio = this.refs.audio
    context = new AudioContext()
    analyser = context.createAnalyser()
    canvas = this.refs.analyser
    ctx = canvas.getContext('2d')
    source = context.createMediaElementSource(audio)
    source.connect(analyser)
  	analyser.connect(context.destination)
  	this.frameLooper()
  }


  render(){
    return (
      <div id="mp3_player">
        <div id="audio_box">
          <audio
            refs="audio"
            autoPlay={true}
            controls={true}
            // src={this.props.tracks.preview_url}
          >
          </audio>
        </div>
        <canvas
          refs="analyser"
          id="analyser"></canvas>
      </div>
    )
  }

}
