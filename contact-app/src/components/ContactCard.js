import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div
      className="item"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content" style={{ flexGrow: 1 }}>
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <Link
        to={{ pathname: `/delete/${id}`, state: { contact: props.contact } }}
      >
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
        ></i>
      </Link>
      <Link to={`/edit`} state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginLeft: "10px", cursor: "pointer" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
