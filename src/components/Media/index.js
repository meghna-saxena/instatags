import React, { Component } from "react";

class index extends Component {
  render(props) {
    const searchedTagName = this.props.media.hashtag.data.name; //hastag name
    const tagCount = this.props.media.hashtag.data.media_count; //hashtag count
    const userData = this.props.media.data; // recent user's media data

    return (
      <div className="media-content">
        #{searchedTagName}: {tagCount} posts
      </div>
    );
  }
}

export default index;
