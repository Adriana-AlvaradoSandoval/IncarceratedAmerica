import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <IconButton size="small" component={Link} to="/">
            <p>Home</p>
        </IconButton>
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
  );
}

export default Header