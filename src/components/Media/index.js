import React, { Component } from "react";
import MediaPost from "./MediaPost";

class index extends Component {
  render(props) {
    const searchedTagName = this.props.media.hashtag.data.name; //hastag name
    const tagCount = this.props.media.hashtag.data.media_count; //hashtag count
    const userData = this.props.media.data; // recent user's media data
    console.log("userData", userData);

    //filter the user data which contains the searched tagname in its 'tags' property

    const filteredUserTags = userData.filter(el => {
      const hasTagName = el.tags.includes(searchedTagName);

      return hasTagName;
    });

    console.log("filteredUserTags", filteredUserTags);

    const mediaPost = filteredUserTags.map(el => {
      const postUrl = el.images.low_resolution.url;
      return <MediaPost key={el.id} url={postUrl} />;
    });

    return (
      <div className="media-content">
        #{searchedTagName}: {tagCount} posts
        <div>{mediaPost}</div>
      </div>
    );
  }
}

export default index;
