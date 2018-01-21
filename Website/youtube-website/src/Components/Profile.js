import React, { Component } from 'react';
// import './Profile.css';

class Profile extends Component {

  render(){
    let profile;
    if(this.props.currUserEmail){
      return(
        profile =
          <div>
            <img className="image" alt="" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/20525263_1768464129848650_4877051832403930912_n.jpg?oh=53dc0b3d803ac48699dcf188915d5d2c&amp;oe=5AE29936" height="32" width="32" />
            <div className="email">{this.props.currUserEmail}</div>
          </div>
      );
    }
    return(
      {profile}
    );
  }
}

export default Profile;
