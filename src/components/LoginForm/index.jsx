
import React, { Component } from 'react'

class LoginForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>

        <input
          type="text"
          placeholder="Email"
          name="email"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
        />

        <button type="submit">Войти</button>
      </form>
    )
  }
}

export default LoginForm;
//rce
