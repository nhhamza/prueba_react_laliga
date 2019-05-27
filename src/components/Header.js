import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

export const Header = ({ logout }) => (
  <header>
    <Link to="/home">Home</Link>
    <button className="btn btn-logout" onClick={logout}>
      Cerrar sesión
    </button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
