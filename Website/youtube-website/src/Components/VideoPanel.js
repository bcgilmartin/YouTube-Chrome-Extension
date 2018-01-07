import React, { Component } from 'react';
import VideoThumbnail from "./VideoThumbnail"
import VideoTitle from "./VideoTitle"
import './VideoPanel.css'

class VideoPanel extends Component {

  displayVideo(){
    return this.props.displayVideo();
  }

  render(){
    let videoPanel;
    if(this.props.thumbnail && this.props.title){
      return(
        videoPanel =
          <div className="VideoPanel">
            <VideoThumbnail thumbnail={this.props.thumbnail} />
            <VideoTitle title={this.props.title} displayVideo={this.displayVideo.bind(this)}/>
          </div>
      );
    }
    return(
      {videoPanel}
    );
  }
}

export default VideoPanel;
