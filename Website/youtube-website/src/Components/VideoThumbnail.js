import React, { Component } from 'react';
import './VideoThumbnail.css';

class VideoThumbnail extends Component {

  displayVideo(){
    return this.props.displayVideo();
  }

  render(){
    let videoThumbnail;
    if(this.props.thumbnail){
      return(
        videoThumbnail = <img src={this.props.thumbnail} alt="video thumbnail" className="VideoThumbnail" onClick={this.displayVideo.bind(this)}/>
      )
    }
    return(
      {videoThumbnail}
    );
  }
}

export default VideoThumbnail;
