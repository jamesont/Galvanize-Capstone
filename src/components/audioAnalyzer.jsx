import './App.css'
import React from "react"

class AudioAnalyzer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render(){
    return (
      <div id="mp3_player">
        <div id="audio_box">

        </div>
        <canvas id="analyzer">

        </canvas>
      </div>

    )
  }

}
