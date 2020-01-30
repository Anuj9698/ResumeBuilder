import React from 'react';
import './Loginform.css';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    alert('hjkl');
    localStorage.setItem('login', JSON.stringify(this.state));
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Form Validation</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
