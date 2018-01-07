import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoScroller from './Components/VideoScroller';
import YoutubeVideoDisplay from './Components/YoutubeVideoDisplay'

var jsonKeys = require('./AuthKeys.json');
var API = jsonKeys.YoutubeKey;

class App extends Component {
  constructor(props){
    super();
    this.state = {
      videosInfoJson: [],
      videoURL: "",
      currFriend: ""
    }
  }

  componentWillMount() {
    //get videos from database here
    var videos = ["ft4m6u3rAJ4", "nKs9V5OEA8E", "c6t3bW7kx6E", "OvzAOol3Q4I", "8pY3fuQk9MA", "SSMmzZEeigw", "Kqa91O8sbA", "DacSCZITii0"];

    var videosCommas = videos.join();
    var videoURL = `https://www.googleapis.com/youtube/v3/videos?key=${API}&part=snippet&id=${videosCommas}`;
    fetch(videoURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const videosInfoJson = responseJson.items;
        this.setState({videosInfoJson})
      })
      .catch((error) => {
        console.error(error);
    });
  }

  componentDidMount() {
    //get videos from database here
    var videos = ["ft4m6u3rAJ4", "nKs9V5OEA8E", "c6t3bW7kx6E", "OvzAOol3Q4I", "8pY3fuQk9MA", "SSMmzZEeigw", "Kqa91O8sbA", "DacSCZITii0"];

    var videosCommas = videos.join();
    var videoURL = `https://www.googleapis.com/youtube/v3/videos?key=${API}&part=snippet&id=${videosCommas}`;
    fetch(videoURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const videosInfoJson = responseJson.items;
        this.setState({videosInfoJson})
        console.log(this.state.videosInfoJson)
      })
      .catch((error) => {
        console.error(error);
    });
  }

  displayVideo(id, friend) {
    let vidURL;
    vidURL = "https://www.youtube.com/embed/" + id + "?autoplay=1";
    this.setState({
      videoURL:vidURL,
      currFriend:friend
    })
    console.log(this.state.vidURL);
    console.log(this.state.currFriend);
  }

  render() {
    return (
      <div className="Page">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Youtube With Friends</h1>
          </header>
          <h2 className="UserFollowed">&nbsp;&nbsp;blakegilmartin@gmail.com</h2><div className="SpaceTaker"> </div>
          <VideoScroller friendID="blakegilmartin@gmail.com" videosInfoJson={this.state.videosInfoJson} handleDisplayVideo={this.displayVideo.bind(this)} />
          <br />
          <YoutubeVideoDisplay className="youtube" friendID="blakegilmartin@gmail.com" videoFriendID={this.state.currFriend} video={this.state.videoURL} />
          <h2 className="UserFollowed">&nbsp;&nbsp;anthonyvu@gmail.com</h2><div className="SpaceTaker"> </div>
          <VideoScroller friendID="anthonyvu@gmail.com" videosInfoJson={this.state.videosInfoJson} handleDisplayVideo={this.displayVideo.bind(this)} />
          <br />
          <YoutubeVideoDisplay className="youtube" friendID="anthonyvu@gmail.com" videoFriendID={this.state.currFriend} video={this.state.videoURL} />
        </div>
      </div>
    );
  }
}

export default App;
