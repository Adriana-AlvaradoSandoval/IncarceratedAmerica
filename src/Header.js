import React from 'react'
import './Header.css'
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>

      <Link to='/'>
        <img className="header__icon"
        src={require('./logo.png')} />
      </Link>


      <div className='header__center'>
        <input type='text' />
        <SearchIcon />
      </div>

          <div className='header__right'>
              <IconButton size="small" component={Link} to="/">
                   <p>Home</p>
              </IconButton>
              <p>/</p>
              <IconButton size="small" component={Link} to="/report">
                  <p>Reports</p>
              </IconButton>
              <IconButton size="small" component={Link} to="/learnMore">
                  <p>Learn More</p>
              </IconButton>
              <IconButton size="small" component={Link} to="/getInvolved">
                  <p>Get Involved</p>
              </IconButton>
              <IconButton size="small" component={Link} to="/resources">
                  <p>Resources</p>
              </IconButton>
              <IconButton size="small" component={Link} to="/about">
                  <p>About</p>
              </IconButton>
      </div>
    </div>
  )
}

export default Header