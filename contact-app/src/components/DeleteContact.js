import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const DeleteContact = (props) => {
  const {removeContactHandler} = useContactsCrud();

  const deleteContact = (id) => {
    removeContactHandler(id);
  }
  const { id } = useParams()

  return (
    <div className="main" style={{ textAlign: "center" }}>
      <div className="content">
        <h2>Are you sure you want to delete?</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Link to="/">
        <button className="ui button blue" onClick= {() => deleteContact(id)} >Yes</button>
        </Link>
        <Link to="/">
        <button className="ui button red">No</button>
        </Link>
      </div>
    </div>
  );
};

export default DeleteContact;
