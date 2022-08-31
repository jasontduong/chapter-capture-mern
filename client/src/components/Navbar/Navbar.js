import React from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';

import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const user = null;
    return (
    <AppBar position="static" color="inherit">
        <div >

        <img  src={logo} alt="mangaboxd" height="auto" width="100" />
        <Typography component={Link} to="/" variant="h2" align="center">mangaboxd</Typography>

        </div>
        <Toolbar>
        { user ? (
            <div>
                <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.cardAt(0)}</Avatar>
                <Typography  variant="h6">{user.result.name}</Typography>
                <Button variant="contained" color="secondary">Sign Out</Button>
            </div>
        ) : (
        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>) }
        </Toolbar>
    </AppBar>
    
)};

export default Navbar;