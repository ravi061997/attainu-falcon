import React from "react";
import { connect } from "react-redux";
import { readAction } from "../actions/mailActions";

const Mails = props => {
  const mailsList = props.fetched ? (
    props.mails.map((item, index) => (
      <li className="list-group-item list-group-item-primary" key={index}>
        <input type="checkbox" checked={props.read} onChange={props.isRead} />
        <span>{item.mail}</span>
      </li>
    ))
  ) : (
    <li className="list-group-item list-group-item-danger">
      Click on any category to view mails
    </li>
  );
  return <ul className="list-group">{mailsList}</ul>;
};

const mapStateToProps = state => {
  return {
    fetched: state.fetched,
    mails: state.mails,
    read: state.read
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isRead: e => dispatch(readAction(e.target.nextSibling.innerHTML))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mails);
