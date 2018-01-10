import React, { Component } from 'react';
import './UserFollowed.css'

class UserFollowed extends Component {

  render(){
    return(
      <h2 className="UserFollowed">&nbsp;{this.props.usersName}</h2>
    );
  }
}

export default UserFollowed;
