import React, { Component } from "react";

class index extends Component {
  loginHandler = () => {
    const CLIENT_ID = "c04ba5775fa147ac9ef3187695bffbff";
    const REDIRECT_URI = "http://localhost:3000";

    const url = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;

    window.location.replace(url);
  };

  render() {
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

// function mapStateToProps({ auth }) {
//   return { auth };
// }

// export default connect(
//   mapStateToProps,
//   actions
// )(index);

export default index;