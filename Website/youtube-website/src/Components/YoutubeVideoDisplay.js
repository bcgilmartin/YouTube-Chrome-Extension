import React, { Component } from 'react';

class YoutubeVideoDisplay extends Component {

  render(){
    let youtubeVidDisp;
    if(this.props.friendID && this.props.videoFriendID && this.props.video){
      if(this.props.friendID === this.props.videoFriendID) {
        return(
          youtubeVidDisp = <iframe title="title" width="1120" height="630" src={this.props.video} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
        )
      } else {
        return(
          youtubeVidDisp = <div></div>
        )
      }
    }
    return(
      <div className="YoutubeVideoDisplay">
        <ul className="YoutubeVideo">{youtubeVidDisp}</ul>
      </div>
    );
  }
}

export default YoutubeVideoDisplay;
