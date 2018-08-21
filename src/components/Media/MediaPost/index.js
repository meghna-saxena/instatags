import React from "react";

//receiving props.url
const index = ({ url }) => {
  return (
    <div className="row">
      <div className="media-post">
        <div className="postimg-container">
          <img className="postimg" src={url} alt="post" />
        </div>
      </div>
    </div>
  );
};

export default index;
