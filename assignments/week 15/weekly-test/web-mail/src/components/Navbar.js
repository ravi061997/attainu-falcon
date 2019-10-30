import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMails, receiveMails } from "../actions/mailActions";

const Navbar = props => {
  return (
    <div className="list-group">
      <Link
        to={"/"}
        className="list-group-item list-group-item-action"
        onClick={props.fetch}
      >
        Inbox
      </Link>
      <Link
        to={"/sent"}
        className="list-group-item list-group-item-action"
        onClick={props.fetch}
      >
        Sent
      </Link>
      <Link
        to={"/drafts"}
        className="list-group-item list-group-item-action"
        onClick={props.fetch}
      >
        Drafts
      </Link>
      <Link
        to={"/trash"}
        className="list-group-item list-group-item-action"
        onClick={props.fetch}
      >
        Trash
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: e => {
      dispatch(fetchMails());
      const category = e.target.innerHTML;
      fetch(
        "https://raw.githubusercontent.com/attainu-falcon/falcon-course-module/master/assignments/data/mail.json"
      )
        .then(res => res.json())
        .then(result => {
          let mails = [];
          for (var i = 0; i < result.length; i++) {
            if (result[i].category === category) {
              mails.push(result[i]);
            }
          }
          return dispatch(receiveMails(mails));
        });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
