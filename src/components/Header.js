import React from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../state/action-creators';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  const dispatch = useDispatch();

  const logOutApp = () => {
    dispatch(logoutUser());
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='./images/linkedin.png'
          alt='Done by www.flaticon.com and made by wwww.freepik.com'
        />

        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search' type='text' className='' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption title='home' Icon={HomeIcon} />
        <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
        <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
        <HeaderOption title='Messaging' Icon={ChatIcon} />
        <HeaderOption title='Notifications' Icon={NotificationsIcon} />
        <HeaderOption title='me' avatar={true} onClick={logOutApp} />
      </div>
    </div>
  );
}

export default Header;
