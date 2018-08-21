import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Redirect } from "react-router-dom";
import keys from "../../config/keys";

class index extends Component {
  loginHandler = () => {
    const CLIENT_ID = keys.instagramClientId;
    const REDIRECT_URI = keys.redirectUrl;

    const url = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=public_content`;

    //direct the user to our authorization URL
    window.location.replace(url);
  };

  checkAndSetAccessToken() {
    //extracting the fragment identifier (value after hash #) from the redirect URI
    const urlFragment = document.location.hash;

    const accessToken = urlFragment.substr(urlFragment.indexOf("=") + 1);

    //passing accessToken to the action creator to store it as global state in the redux store
    if (accessToken) {
      this.props.setAccessToken(accessToken);
    }
  }

  render() {
    this.checkAndSetAccessToken();
    console.log("this.props.auth", this.props.auth);

    if (this.props.auth) {
      //redirect the user to "/dashboard" when state.auth (i.e accessToken) is present
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="login-page">
        <div className="login-textbox">
          <h1 className="login-heading">Instatags</h1>
          <p className="login-body">See instagram photos on hashtag search</p>
          <a className="btn btn-full" onClick={this.loginHandler}>
            Login with instagram
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }; //returning state.auth which has the accessToken
}

export default connect(
  mapStateToProps,
  actions
)(index);
