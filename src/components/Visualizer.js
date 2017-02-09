import React, { Component } from 'react'

export default class Visualizer extends Component{
  constructor(props){
    super(props)

  }

  onSubmit(e){
    e.preventDefault()
    this.props.loginTrue()
  }

  render(){
    return(
      <div>
        <audio id="myAudio" src={this.state.songUrl} createVisualizer={create}></audio>
      </div>
    )
  }

}
