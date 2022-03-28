import React from 'react'
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <AppBar position='static'>
            <Grid container justify={'center'}>
                <Toolbar>
                <MenuItem component={Link} to="/">
                    <p>Home</p>
                </MenuItem>
                <MenuItem component={Link} to="/report">
                    <p>Reports</p>
                </MenuItem>
                <MenuItem size="small" component={Link} to="/learnMore">
                    <p>Learn More</p>
                </MenuItem>
                <MenuItem size="small" component={Link} to="/getInvolved">
                    <p>Get Involved</p>
                </MenuItem>
                <MenuItem size="small" component={Link} to="/resources">
                    <p>Resources</p>
                </MenuItem>
                <MenuItem size="small" component={Link} to="/about">
                    <p>About</p>
                </MenuItem>
                </Toolbar>
            </Grid>
        </AppBar>
    </div>
  );
}

export default Header