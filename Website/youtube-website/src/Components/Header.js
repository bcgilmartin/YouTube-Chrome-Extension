import React, { Component } from 'react';
import './Header.css'

class VideoPanel extends Component {

  render(){
    let videoPanel;
    if(this.props.logo && this.props.currUserEmail){
      return(
        videoPanel =
        <header className="Header">
          <img src={this.props.logo} alt="logo" />
          <div className="email">{this.props.currUserEmail}</div>
          <img className="image" alt="" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/20525263_1768464129848650_4877051832403930912_n.jpg?oh=53dc0b3d803ac48699dcf188915d5d2c&amp;oe=5AE29936" height="34" width="34" />
        </header>
      );
    }
    return(
      {videoPanel}
    );
  }
}

export default VideoPanel;
