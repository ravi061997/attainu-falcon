import React from "react";
import { connect } from "react-redux";
import {
  fetchingComments,
  retrievedComments
} from "../actions/commentsActions";
import { fetchVideoComments } from "../api";

class CommentsThread extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.getComments(this.props.videoId);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div className="container comments-thread">
        {this.props.commentsThread ? (
          <ul>
            {this.props.commentsThread.map((item, i) => (
              <li key={i.toString()} className="card">
                <div className="card-header alert-danger">
                  <img
                    className="rounded-circle mr-2"
                    src={
                      item.snippet.topLevelComment.snippet.authorProfileImageUrl
                    }
                  />
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span className="float-right">
                    <i className="far fa-thumbs-up" />
                    &nbsp;
                    {item.snippet.topLevelComment.snippet.likeCount}
                  </span>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    {item.snippet.topLevelComment.snippet.textOriginal}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps");
  return { commentsThread: state.commentsReducer.commentsThread };
}

function mapActionToProps(dispatch) {
  console.log("mapActionToProps");
  return {
    getComments: function(videoId) {
      dispatch(fetchingComments());
      fetchVideoComments(videoId).then(result =>
        dispatch(retrievedComments(result))
      );
    }
  };
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(CommentsThread);
