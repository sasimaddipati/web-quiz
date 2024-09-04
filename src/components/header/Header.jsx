import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='head'>
      <div className='header'>
        <h1 className='logo'>LOGO</h1>
        <ul className='header-list'>
          <li ><Link to='skillspace' className='a'><p className='aa'>Skill Space</p></Link></li>
          <li ><Link to='classzone' className='a'><p className='aa'>Class Zone</p></Link></li>
          <li><Link to='login' className='a'><p className='aa'>Login</p></Link></li>
          <li><Link to='register' className='a'><p className='aa'>Register</p></Link></li>
          <img className='img-header' src="https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg"  width='50px' alt="" />
        </ul>
      </div>      
    </div>
  );
};
export default Header;
