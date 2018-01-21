import React, { Component } from 'react';
import './UserFollowed.css'

class UserFollowed extends Component {

  render(){
    return(
      <h2 className="UserFollowed"><b>&nbsp;{this.props.usersName}</b></h2>
    );
  }
}

export default UserFollowed;
