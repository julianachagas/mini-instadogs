import React from 'react';
import Login from './Login';
import { useSelector } from 'react-redux';
import Loading from './helper/Loading';
import Photos from './Photos';

function Content() {
  const { token, user } = useSelector(state => state.login);
  const loading = token.loading || user.loading;

  if (loading) {
    return <Loading />;
  }

  if (user.data) {
    return <Photos />;
  }

  return <Login />;
}

export default Content;
