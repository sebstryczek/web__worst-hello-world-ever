import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const [redirect, setRedirect] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { from } = props.location.state || { from: { pathname: "/" } };
  
  if (redirect) {
    return <Redirect to='/page' />
  }

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const { signIn } = props;
    setRedirect(true)
    signIn(email, password, from);
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <form name='login' onSubmit={handleSubmit}>
        <input type='text' name='email' onChange={handleEmailChange} />
        <input type='password' name='password' onChange={handlePasswordChange} />
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
}

export default Login;
