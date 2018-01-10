import React, { Component } from 'react';
import './SignInPage.css'
import GoogleLogin from 'react-google-login';

class SignInPage extends Component {

  responseGoogle(response){
    return this.props.handleSignIn(response.profileObj.email);
  }

  render(){
    return(
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle.bind(this)}
        onFailure={this.responseGoogle.bind(this)}
      />
    );
  }
}

export default SignInPage;
