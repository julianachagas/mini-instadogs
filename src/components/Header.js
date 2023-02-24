import React from 'react';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../store/login';

function Header() {
  const { token, user } = useSelector(state => state.login);
  const loading = token.loading || user.loading;
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(userLogout());
  }

  return (
    <header className={styles.header}>
      <h1>Mini Dogs</h1>
      <button
        onClick={handleClick}
        aria-label="Logout"
        className={loading ? styles.loading : user.data ? styles.logged : ''}
      ></button>
    </header>
  );
}

export default Header;
