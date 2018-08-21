import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Media from "../Media";

class index extends Component {
  renderContent() {
    // console.log("tagsCount inside searchbar comp", this.props.tagsCount)
    if (this.props.tagsCount) {
      return <Media media={this.props.tagsCount} />;
    }
  }

  render() {
    // console.log("reduxform", this.props.handleSubmit);
    const { handleSubmit } = this.props;
    return (
      <div>
        <form
        //onSubmit calling the action creator and passing the hashtag.value and state.auth (accessToken) as parameters
          onSubmit={handleSubmit(() =>
            this.props.fetchTagCount(this.refs.hashtag.value, this.props.auth)
          )}
        >
          <Field
            className="input-field"
            ref="hashtag"
            name="search"
            component="input"
            type="text"
            placeholder="#"
          />
          <button
            className="red accent-2 btn-flat right white-text"
            type="submit"
          >
            Search
          </button>
        </form>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth, tagsCount }) {
  return { auth, tagsCount };
}

index = connect(
  mapStateToProps,
  actions
)(index);

export default reduxForm({
  form: "searchform" // a unique name for this form
})(index);
