import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../state/action-creators';
import './Login.css';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.user.error);

  const register = () => {
    if (!name) return alert('Please enter a Full name!');
    dispatch(registerUser(name, email, password, profilePicture));
  };

  console.log(profilePicture);

  const loginApp = e => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div className='login'>
      {error && <h4 className='login__error'> {error} </h4>}
      <img
        src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
        alt=''
      />
      <form>
        <input
          placeholder='Full name (required if regestering)'
          value={name}
          onChange={e => setName(e.target.value)}
          type='text'
        />
        <input
          type='text'
          value={profilePicture}
          onChange={e => setProfilePicture(e.target.value)}
          placeholder='Profile pic URL (optional)'
        />
        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
        />
        <button type='submit' onClick={loginApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{' '}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
