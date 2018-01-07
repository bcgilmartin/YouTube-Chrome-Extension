import React, { Component } from 'react';
import './VideoThumbnail.css';

class VideoThumbnail extends Component {

  render(){
    let videoThumbnail;
    if(this.props.thumbnail){
      return(
        videoThumbnail = <img src={this.props.thumbnail} alt="video thumbnail" className="VideoThumbnail"/>
      )
    }
    return(
      {videoThumbnail}
    );
  }
}

export default VideoThumbnail;
