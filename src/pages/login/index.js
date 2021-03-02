import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';

function Login() {
  const [pin, setPin] = useState('');
  const redirect = localStorage.getItem('jwt') ? true : false;

  useEffect(() => {
    api.post('/login').then(response => {
      console.log(response);
    })
  }, [])

  if (redirect) {
    return <Redirect to='/news'/>
  }
    return (
      <div>
        <h1>teste</h1>
      </div>
    )
  }


export default Login;