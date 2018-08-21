import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Searchbar from "../Searchbar";

class index extends Component {
  state = {
    username: "",
    picture: null
  };

  componentDidMount() {
    const accessToken = this.props.auth;

    //fetch information about the owner of the accessToken whenever this component mounts
    axios
      .get(
        `https://api.instagram.com/v1/users/self/?access_token=${accessToken}`
      )
      .then(response => {
        this.setState({
          username: response.data.data.username,
          picture: response.data.data.profile_picture
        });
      });
  }

  render() {
    //check if user is not authorized, redirect to home route
    if (!this.props.auth) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="left brand-logo">
              InstaReact
            </a>
            <div className="col s2">
              <a href="/">
                <img
                  src={this.state.picture}
                  alt="profile pic"
                  className="circle responsive-img"
                />
              </a>
            </div>
            <div className="right hide-on-med-and-down">
              {this.state.username}
            </div>
          </div>
        </nav>
        <Searchbar />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(index);
