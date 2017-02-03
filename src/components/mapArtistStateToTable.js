import React, { Component } from 'react'

class ArtistState extends Component {



  const albumNames = tracks.map((album) => <li>{album.album.name}</li> )
  const theTracks = tracks.map((track) =>  <li>{track.name}</li> )
  const songUrls = tracks.map((song) => <li>{song.preview_url}</li> )





  const nestedImagesArray = tracks.map((album) => <li>{album.album.images}</li> )



  const imagesArray = nestedImagesArray.map(image => <li>{image}</li> )




}
