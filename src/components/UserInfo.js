import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import Axios from "axios";
import { history } from "../routers/AppRouter";

class UserInfo extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      LastName: "",
      email: "",
      userId: this.props.match.params ? this.props.match.params.id : null
    };
  }
  handleRemove = () => {
    const requestURL = `https://reqres.in/api/users/${this.state.userId}`;
    Axios.delete(requestURL)
      .then(res => {
        if (res.status === 204) {
          console.log("usuari borrado.");
          history.push("/home");
        }
      })
      .catch(err => console.log(err));
  };

  handleEdit = () => {
    const requestURL = `https://reqres.in/api/users/${this.state.userId}`;
    Axios.put(requestURL)
      .then(res => {
        console.log("fasdsdfasd",res);
        if (res.status === 200) {
          console.log("usuario editado.");
          history.push("/home");
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    if (!this.state.userId) {
      return;
    }
    const requestURL = `https://reqres.in/api/users/${this.state.userId}`;
    Axios.get(requestURL)
      .then(response => {
        this.setState({
          avatar: response.data.data.avatar,
          firstName: response.data.data.first_name,
          lastName: response.data.data.last_name,
          email: response.data.data.email
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    const { firstName } = this.state;
    console.log("STATE", this.state);
    if (!firstName) {
      return "loading";
    }

    console.log(this.props.match.path);
    if (this.props.match.path.includes("edit")) {
      return this.getUserEdit();
    } else {
      return this.getUserReadOnly();
    }
  }

  getUserReadOnly() {
    const { firstName, lastName, email, avatar } = this.state;

    return (
      <div>
        <Header />
        <h2 className="list-title">Información del usuario</h2>
        <div className="content-user_info">
          <img src={avatar} className="list-item__avatar" />
          <h3>{`${firstName} ${lastName}`}</h3>
          <span>{email}</span>
          <div>
            <button className="btn" onClick={this.handleRemove}>
              Borrar usuario
            </button>
          </div>
        </div>
      </div>
    );
  }

  getUserEdit() {
    const { firstName, lastName, email, avatar } = this.state;

    return (
      <div>
        <Header />
        <h2 className="list-title">Información del usuario</h2>
        <div className="content-user_info">
          <img src={avatar} className="list-item__avatar" />
          <div>
            <input
              type="text"
              value={firstName}
              className="text-input"
              placeholder="username"
              onChange={e => this.setState({ firstName: e.target.value })}
            />
            <input
              type="text"
              value={lastName}
              className="text-input"
              placeholder="last name"
              onChange={e => this.setState({ lastName: e.target.value })}
            />
            <input
              type="text"
              value={email}
              className="text-input"
              placeholder="email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <button className="btn" onClick={this.handleEdit}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
