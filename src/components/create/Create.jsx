import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Create.css';

const Create = () => {
  const location = useLocation();
  const { zoneName } = location.state || {}; // Destructure zoneName from location.state
  const [a, setA] = useState(zoneName);
  const [activeLink, setActiveLink] = useState(''); // Track the currently active link

  function handleClick(link) {
    setActiveLink(link); // Set the clicked link as active
  }

  return (
    <div className="container">
      <div>
        <div className="header">
          <h1 className='zoneName'>{a}</h1> 
          <div className="navButtons">
            <Link
              onClick={() => handleClick('upcoming')}
              className={activeLink === 'upcoming' ? 'link-createquiz-bg' : 'link-createquiz'}
              to='upcoming'
            >
              Upcoming
            </Link>
            <Link
              onClick={() => handleClick('completed')}
              className={activeLink === 'completed' ? 'link-createquiz-bg' : 'link-createquiz'}
              to='#'
            >
              Completed
            </Link>
            <Link
              onClick={() => handleClick('createquiz')}
              className={activeLink === 'createquiz' ? 'link-createquiz-bg' : 'link-createquiz'}
              to='createquiz'
            >
              Create quiz
            </Link>
            <Link
              onClick={() => handleClick('createcontest')}
              className={activeLink === 'createcontest' ? 'link-createquiz-bg' : 'link-createquiz'}
              to='createcontest'
            >
              Create contest
            </Link>
            <Link
              onClick={() => handleClick('unassigned')}
              className={activeLink === 'unassigned' ? 'link-createquiz-bg' : 'link-createquiz'}
              to='unassigned'
            >
              Unassigned
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Create;
