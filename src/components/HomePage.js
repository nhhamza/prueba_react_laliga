import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { history } from "../routers/AppRouter";
import LoginPage from "./LoginPage";
import UserList from "./UserList";

class HomePage extends Component {
  state = {};

  render() {
    if (!this.props.auth.token) {
      return <LoginPage />;
    }
    return (
      <div>
        <Header />
        <UserList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
  auth: state.auth
});

export default connect(mapStateToProps)(HomePage);
