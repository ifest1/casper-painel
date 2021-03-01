import React, { Component } from 'react';
import InputPin from './input-pin';
import Button from './login-button';
import baseUrl from '../api';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: '',
      redirect: false,
    }

    if (localStorage.getItem('jwt')) {
      this.state.redirect = true;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({pin: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { pin } = this.state;
    axios.post(`${baseUrl}/login/`, {pin: pin})
      .then(res => {
        if (res.data.auth == true) {
          localStorage.setItem('jwt', res.data.token);
          this.setState({redirect: true});
        }
      })
  }

  

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/dashboard'/>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <InputPin onChange={this.handleChange}/>
          <Button/>
        </form>
        
      </div>
    )
  }
}

export default Login;