import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import Axios from "axios";
import { history } from "../routers/AppRouter";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };



  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const requestURL = `https://reqres.in/api/login`;
    if (!email || !password) {
      this.setState({
        error: "Los campos email y contraseña son requeridos."
      });
    } else {
      this.setState({ error: "" });
      Axios.post(requestURL, { email, password })
        .then(res => {
          //a parte de guardar el token en el store habria de añadirselo a la cabecera del axios para futuras llamadas
          // y en el storage del navegador para evitar que se borre cuando se actualize con F5.
          this.props.startLogin(res.data.token);

          history.push("/home");
        })
        .catch(err => this.setState({ error: err.error }));
    }
  };
  render() {
    return (
      <div className="content">
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="text-input"
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            className="text-input"
            placeholder="Contraseña"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button className="btn btn-login">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  startLogin: token => dispatch(login(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);