import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import UserListItem from "./UserListItem";

class UserList extends Component {
  state = {
    users:[]
  };
  componentDidMount = () => {
    Axios.get("https://reqres.in/api/users")
      .then(res => {
        this.setState({users:res.data.data});
      })
      .catch(err => console.log(err));
  };

  render() {
    const { users } = this.state;
    console.log("users",users);
    return (
      <div>
        <h1 className="list-title">Listado Usuarios</h1>
        {users.map(user => (
          <UserListItem key={user.id} {...user} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users, auth }) => ({
  users,
  auth
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);