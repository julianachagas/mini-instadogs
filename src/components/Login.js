import React from 'react';
import styles from './Login.module.css';
import { login } from '../store/login';
import { useDispatch } from 'react-redux';

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form className={`${styles.login} anime`} onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
