import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import logo from './images/logo.png';
import useStyles from './styles';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Roboto Slab',
            'cursive',
          ].join(','),
        },});

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <MuiThemeProvider theme={theme}>
            <Container maxWidth="xl">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <img className={classes.image} src={logo} alt="chapter capture" height="auto" width="100" />
                    <Typography className={classes.heading} variant="h2" align="center">mangaboxd</Typography>
                </AppBar>
            
                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </MuiThemeProvider>
    )
}

export default App;

