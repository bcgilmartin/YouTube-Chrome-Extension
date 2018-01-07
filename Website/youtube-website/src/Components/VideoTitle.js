import React, { Component } from 'react';
import './VideoTitle.css'

class VideoTitle extends Component {

  displayVideo(){
    return this.props.displayVideo();
  }

  render(){
    let videoTitle;
    if(this.props.title){
      return(
        videoTitle = <div className="VideoTitle" title={this.props.title} onClick={this.displayVideo.bind(this)}>{this.props.title}</div>
      )
    }
    return(
      {videoTitle}
    );
  }
}

export default VideoTitle;
