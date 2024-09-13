import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [color,setcolor]=useState('');
  function fun(x){
     setcolor(x);
  }
  return (
    <div className='head'>
      <div className='header'>
        <h1 className='logo'>Web Weavers</h1>
        <ul className='header-list'>
          <li onClick={()=>fun('skillspace')}><Link to='skillspace' className='a'><p   className={color==='skillspace' ? 'aaa' : 'aa'}>Skill Space</p></Link></li>
          <li onClick={()=>fun('classzone')}><Link to='classzone' className='a' ><p className={color==='classzone' ? 'aaa' : 'aa'}>Class Zone</p></Link></li>
          <li onClick={()=>fun('login')}><Link to='login' className='a' ><p className={color==='login' ? 'aaa' : 'aa'} >Login</p ></Link></li>
          <li onClick={()=>fun('register')}><Link to='register' className='a'><p  className={color==='register' ? 'aaa' : 'aa'}>Register</p></Link></li>
          <img className='img-header' src="https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg"  width='50px' alt="" />
        </ul>
      </div>      
    </div>
  );
};
export default Header;
