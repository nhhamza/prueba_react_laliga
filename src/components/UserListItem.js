import React from "react";
import { Link } from "react-router-dom";

export const UserListItem = ({ id, first_name, last_name, avatar, email }) => (
  <Link to={`/user/${id}`} className="list-item">
    <div>
      <img src={avatar} className="list-item__avatar" />
      <div>
        <h3 className="list-item__title">{`${first_name} ${last_name}`}</h3>
        <span className="list-item__data">{email}</span>
      </div>
      <Link to={`/edit/${id}`}>
        <button className="btn btn-edit">Editar</button>
      </Link>
    </div>
  </Link>
);

export default UserListItem;