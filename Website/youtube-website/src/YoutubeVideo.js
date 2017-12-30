import React, {Component} from 'react';

class YoutubeVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: ["ft4m6u3rAJ4", "ft4m6u3rAJ4"]
    };
  }

  render(){
    return(
      <div>
        {
          this.state.videos.map((video, i) => {
            var videoID = video;
            var videoLink = "https://www.youtube.com/embed/" + videoID;
            var frame = <div key={i} className="youtube"><iframe width="560" height="315" src={videoLink} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe></div>;
            return frame;
          })
        }
        {this.frame}
      </div>
    )
  }
}

export default YoutubeVideo;
