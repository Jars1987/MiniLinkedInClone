import React from 'react';
import { useSelector } from 'react-redux';
import './HeaderOption.css';
import { Avatar } from '@mui/material';

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(state => state.user.currentUser);
  console.log(user.email);
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar className='headerOption__icon' src={user.photoURL}>
          {user.email ? user.email[0] : ''}
        </Avatar>
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;
