import React, { Component } from 'react';
import { object, string, ref, boolean } from 'yup';
import './LoginForm.css';

const emailScheme = string().required().email();

const loginSchema = object({ 
  email: emailScheme,
  password: string().required(),
  confirmPassword: string().required().oneOf([ref('password')]),
  role: string().oneOf(['admin', 'user']).required(),
});

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      errors: {},
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();

    // validate
    try {
      await loginSchema.validate(this.state);
    } catch (error) {
      console.log(error.message);

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
      role: '',
      confirmPassword: '',
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
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          onChange={this.onChange}
          value={this.state.confirmPassword}
          className={"input " + (this.state.errors.confirmPassword ? "error" : "")}
        />

        <input
          className={(this.state.errors.role ? "errorRadio" : "")}
          type="radio" name="role" value="admin"
          onChange={this.onChange}
        />
        <input
          className={(this.state.errors.role ? "errorRadio" : "")}
          type="radio" name="role" value="user"
          onChange={this.onChange}
        />

        <button type="submit">Войти</button>
      </form>
    );
  }
}

export default LoginForm;
