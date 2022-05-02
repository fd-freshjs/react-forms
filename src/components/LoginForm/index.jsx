
import React, { Component } from 'react';

class LoginForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    // do smth

    this.setState({
      email: '',
      password: '',
    });
  }

  onChangeEmail = (event) => {
    const value = event.target.value;

    this.setState((state) => {
      return {
        ...state,
        email: value,
      }
    });
  }

  onChangePassword = (event) => {
    const value = event.target.value;

    this.setState((state) => {
      return {
        ...state,
        password: value,
      }
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>

        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={this.onChangeEmail}
          value={this.state.email}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.onChangePassword}
          value={this.state.password}
        />

        <button type="submit">Войти</button>
      </form>
    )
  }
}

export default LoginForm;
