import React from 'react';
import Header from './components/Header';
import './App.css';
import { useDispatch } from 'react-redux';
import { autoLogin } from './store/login';
import Content from './components/Content';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
