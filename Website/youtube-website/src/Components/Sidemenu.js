import React, { Component } from 'react';
import './Sidemenu.css';

class Sidemenu extends Component {

  constructor(props){
    super();
    this.state={
      open: 200
    }
  }

  closeMenu(){
    this.setState({open:0});
  }

  render(){
    let menuBar;
    if(true){
      return(
        menuBar =
        <div id="mySidenav" class="sidenav">
          <a href="#" class="closebtn" onclick={this.closeMenu.bind(this)} width={this.state.open + 'px'}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      );
    }
    return(
      {menuBar}
    );
  }
}

export default Sidemenu;
