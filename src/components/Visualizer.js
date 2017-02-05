import React, { Component } from 'react'

export default class Visualizer extends Component{
  constructor(props){
    super(props)

    this.state = {
      null: 'null'
    }
  }

  onSubmit(e){
    e.preventDefault()
    this.props.loginTrue()
  }

  createVisualizer (){
    var ctx = new AudioContext()
    var audio = document.getElementById('myAudio')
    var audioSrc = ctx.createMediaElementSource(audio)
    var analyser = ctx.createAnalyser()
    analyser.fftSize = 32768
    analyser.smoothingTimeConstant = 0
    // we have to connect the MediaElementSource with the analyser
    audioSrc.connect(analyser)
    // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
    ctx.destination
    // frequencyBinCount tells you how many values you'll receive from the analyser
    var frequencyData = new Uint8Array(analyser.frequencyBinCount)
   
    // we're ready to receive some data!
    // loop
    function renderFrame() {
       requestAnimationFrame(renderFrame)
       // update data in frequencyData
       analyser.getByteFrequencyData(frequencyData)
       // render frame based on values in frequencyData
       // console.log(frequencyData)
    }

    audio.start()
    renderFrame()
  }

  render(createVisualizer){
    var create = createVisualizer()
    return(
      <div>
        <audio id="myAudio" src="path-to-audio.mp3" createVisualizer={create}></audio>
      </div>
    )
  }

}
