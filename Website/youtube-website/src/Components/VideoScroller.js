import React, { Component } from 'react';
import VideoPanel from "./VideoPanel"
import './VideoScroller.css'

class VideoScroller extends Component {

  displayVideo(id, friend){
    return this.props.handleDisplayVideo(id, friend)
  }

  render(){
    let listVideoJson;
    if(this.props.videosInfoJson){
      listVideoJson = this.props.videosInfoJson.map(project => {
        return(
          <li key={project.id} className="videoPanelItem"><VideoPanel thumbnail={project.snippet.thumbnails.default.url} title={project.snippet.title} displayVideo={this.displayVideo.bind(this, project.id, this.props.friendID)}/></li>
        );
      })
    }
    return(
      <div className="VideoScroller">
        <ul className="videoScrollerMenu">{listVideoJson}</ul>
      </div>
    );
  }
}

export default VideoScroller;
