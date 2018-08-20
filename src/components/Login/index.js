import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Redirect } from "react-router-dom";

class index extends Component {
  loginHandler = () => {
    const CLIENT_ID = "c04ba5775fa147ac9ef3187695bffbff";
    const REDIRECT_URI = "http://localhost:3000";

    const url = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;

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
      <div>
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-title title">Instareact</div>
              <div className="card-image">
                <img
                  className="insta-logo"
                  src="https://i.vimeocdn.com/portrait/13201883_300x300"
                  alt="insta-logo"
                />
              </div>
              <div className="card-content">
                <p>See instagram photos on tag search</p>
              </div>
              <div className="card-action">
                <a onClick={this.loginHandler}>Login with instagram</a>
              </div>
            </div>
          </div>
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
