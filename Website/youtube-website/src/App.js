import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoScroller from './Components/VideoScroller';
import YoutubeVideoDisplay from './Components/YoutubeVideoDisplay';
import SignInPage from './Components/SignInPage';
import UserFollowed from './Components/UserFollowed';
import Header from './Components/Header';
import VISRlogo from './VISRlogo.png';
import Sidemenu from './Components/Sidemenu';

var jsonKeys = require('./AuthKeys.json');
var API = jsonKeys.YoutubeKey;

class App extends Component {
  constructor(props){
    super();
    this.state = {
      videosInfoJson: [],
      videosStatJson: [],
      videoURL: "",
      currFriend: "",
      userEmail: "",
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    //get videos from database here
    var videos = ["ft4m6u3rAJ4", "nKs9V5OEA8E", "c6t3bW7kx6E", "OvzAOol3Q4I", "8pY3fuQk9MA", "SSMmzZEeigw", "Kqa91O8sbA", "DacSCZITii0"];

    var videosCommas = videos.join();
    var videoURL = `https://www.googleapis.com/youtube/v3/videos?key=${API}&part=snippet&id=${videosCommas}`;
    var statURL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videosCommas}&key=${API}`
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
    fetch(statURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const videosStatJson = responseJson.items;
        this.setState({videosStatJson})
        console.log(this.state.videosStatJson)
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
    var statURL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videosCommas}&key=${API}`
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
    fetch(statURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const videosStatJson = responseJson.items;
        this.setState({videosStatJson})
        console.log(this.state.videosStatJson)
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

  getEmail(email){
    this.setState({
      userEmail:email
    })
  }

  onSetSidebarOpen(open){
    this.setState({sidebarOpen: open});
  }

  render() {
    var sidebarContent = <b>Sidebar content</b>;
    // if(this.state.userEmail === ""){
    //   return(
    //     <div className="Page">
    //       <div className="App">
    //         <header className="App-header">
    //           <img src={logo} className="App-logo" alt="logo" />
    //           <h1 className="App-title">Youtube With Friends</h1>
    //         </header>
    //         <SignInPage handleSignIn={this.getEmail.bind(this)}/>
    //       </div>
    //     </div>
    //   )
    // } else{
      return (
        <b>
          <div className="Page">
            <div className="App">
              <Header currUserEmail="Ryan Tran" logo={VISRlogo} />
              <div className="Content">
                <div className="Categories">
                  <Sidemenu />
                  <div className="HeaderSpace"></div>
                    <UserFollowed usersName="TOP HITS" />
                    <VideoScroller friendID="TopHits" videosInfoJson={this.state.videosInfoJson} handleDisplayVideo={this.displayVideo.bind(this)} />
                    <YoutubeVideoDisplay className="youtube" friendID="TopHits" videoFriendID={this.state.currFriend} video={this.state.videoURL} />

                    <UserFollowed usersName="MUSIC" />
                    <VideoScroller friendID="music" videosInfoJson={this.state.videosInfoJson} handleDisplayVideo={this.displayVideo.bind(this)} />
                    <YoutubeVideoDisplay className="youtube" friendID="music" videoFriendID={this.state.currFriend} video={this.state.videoURL} />

                    <UserFollowed usersName="anthonyvu@gmail.com" />
                    <VideoScroller friendID="anthonyvu@gmail.com" videosInfoJson={this.state.videosInfoJson} handleDisplayVideo={this.displayVideo.bind(this)} />
                    <YoutubeVideoDisplay className="youtube" friendID="anthonyvu@gmail.com" videoFriendID={this.state.currFriend} video={this.state.videoURL} />
                  </div>
            </div>
            </div>
          </div>
        </b>
      );
    // }
  }
}

export default App;
