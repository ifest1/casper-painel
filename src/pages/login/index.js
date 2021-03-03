import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';
import { LoginContainer } from './styles';
import GenericButton from '../../components/genericbutton/index';
import Input from '../../components/input/index';

function Login() {
  const [pin, setPin] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      setRedirect(true);
    }
  }, [])

  function onClickHandler(e) {
    e.preventDefault();
    api.post('/login', {pin}).then(response => {
      console.log(response);
      if (response.data.auth) {
        localStorage.setItem('jwt', response.data.token);
        setRedirect(true);
      }
    })
  }

  if (redirect) {
    return <Redirect to='/panel'/>
  }
    return (
      <LoginContainer>
        <Input type="password" onChange={(e) => setPin(e.target.value)}></Input>
        <GenericButton type="button" onClick={onClickHandler}>Logar</GenericButton>
      </LoginContainer>
    )
  }


export default Login;