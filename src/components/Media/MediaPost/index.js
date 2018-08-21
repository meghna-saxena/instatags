import React from "react";

//receiving props.url
const index = ({ url }) => {
  return (
    <div className="row">
      <div>
        <img src={url} alt="post" />
      </div>
    </div>
  );
};

export default index;
