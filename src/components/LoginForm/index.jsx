import React, { Component } from 'react';
import { object, string, ref, boolean } from 'yup';
import Input from '../Input';
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

  setError(error) {
    this.setState((state) => {
      return {
        ...state,
        errors: { [error.path]: true },
      }
    })
  }

  onSubmit = async (e) => {
    e.preventDefault();

    // validate
    try {
      await loginSchema.validate(this.state);
    } catch (error) {
      this.setError(error);
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

  // var 1
  onChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    // validate
    try {
      const result = loginSchema.validateSync(this.state);
      console.log(result);
    } catch (error) {
      this.setError(error);
      return;
    }

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

  // var 2
  getValue = (inputState) => {
    this.setState((state) => {
      return {
        ...state,
        ...inputState,
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          onChange={this.onChange} // var1
          // getValue={this.getValue} // var2
          value={this.state.email}
          className={"input input2" + (this.state.errors.email ? " error" : "")}

        />

        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.onChange} // var1
          // getValue={this.getValue} // var2
          value={this.state.password}
          className={"input " + (this.state.errors.password ? "error" : "")}
        />
        <Input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          onChange={this.onChange} // var1
          // getValue={this.getValue} // var2
          value={this.state.confirmPassword}
          className={"input " + (this.state.errors.confirmPassword ? "error" : "")}
        />

        <Input
          className={(this.state.errors.role ? "errorRadio" : "")}
          type="radio" name="role" value="admin"
          onChange={this.onChange} // var1
          // getValue={this.getValue} // var2
        />
        <Input
          className={(this.state.errors.role ? "errorRadio" : "")}
          type="radio" name="role" value="user"
          onChange={this.onChange} // var1
          // getValue={this.getValue} // var2
        />

        <button type="submit">Войти</button>
      </form>
    );
  }
}

export default LoginForm;
