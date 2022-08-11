import React from 'react';
import { AppBar, Typography } from "@material-ui/core";
import useStyles from './styles';
import logo from '../../images/logo.png';

const Navbar = () => {
    const classes = useStyles();
    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={logo} alt="mangaboxd" height="auto" width="100" />
        <Typography className={classes.heading} variant="h2" align="center">mangaboxd</Typography>
    </AppBar>
)};

export default Navbar;