import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoScroller from './Components/VideoScroller';

var jsonKeys = require('./AuthKeys.json');
var API = jsonKeys.YoutubeKey;

class App extends Component {
  constructor(props){
    super();
    this.state = {
      videosInfoJson: [],
      videoURL: ""
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

  displayVideo(id) {
    let vidURL;
    vidURL = "https://www.youtube.com/embed/" + id + "?autoplay=1";
    this.setState({videoURL:vidURL})
  }

  render() {
    return (
      <div className="Page">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Youtube With Friends</h1>
          </header>
          <h2 className="UserFollowed">blakegilmartin@gmail.com</h2><div className="SpaceTaker"> </div>
          <VideoScroller userID="blakegilmartin@gmail.com" videosInfoJson={this.state.videosInfoJson} handleDisplayVideo={this.displayVideo.bind(this)} />
          <br />
          <div className="youtube" userID="blakegilmartin@gmail.com"><iframe title="title" width="560" height="315" src={this.state.videoURL} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe></div>
          <h2 className="UserFollowed">anthonyvu@gmail.com</h2><div className="SpaceTaker"> </div>
          <VideoScroller id="anthonyvu@gmail.com" videosInfoJson={this.state.videosInfoJson} handleDisplayVideo={this.displayVideo.bind(this)} />
          <br />
          <div className="youtube" id="anthonyvu@gmail.com"><iframe title="title" width="560" height="315" src={this.state.videoURL} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe></div>
        </div>
      </div>
    );
  }
}

export default App;
