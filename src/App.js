import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { isLogedIn } from './state/action-creators';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => dispatch(isLogedIn()), []);

  const appBody = () => {
    if (user.loading) {
      return (
        <>
          <h4>Loading</h4>
          <div class='loader'></div>;
        </>
      );
    } else {
      return !user.loggedIn ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      );
    }
  };

  console.log(user);
  return (
    <div className='app'>
      {/* Header */}
      <Header />
      {/* App Body */}
      {appBody()}
    </div>
  );
}

export default App;
