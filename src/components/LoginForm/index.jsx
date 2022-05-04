import React, { Component } from 'react';
import { object, string, boolean } from 'yup';
import './LoginForm.css';

const loginSchema = object({ 
  email: string().required().email(),
  password: string().required(),
});

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();

    // validate
    try {
      await loginSchema.validate(this.state);
    } catch (error) {
      this.setState((state) => {
        return {
          ...state,
          errors: { [error.path]: true },
        }
      })

      return;
    }

    // do smth
    console.log(this.state);

    this.setState({
      email: '',
      password: '',
    });
  };

  onChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState((state) => {
      const newState = { ...state };
      newState[key] = value;

      return newState;

      /* return {
        ...state,
        [key]: value,
      } */
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={this.onChange}
          value={this.state.email}
          className={"input " + (this.state.errors.email ? "error" : "")}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.onChange}
          value={this.state.password}
          className={"input " + (this.state.errors.password ? "error" : "")}
        />

        <button type="submit">Войти</button>
      </form>
    );
  }
}

export default LoginForm;
