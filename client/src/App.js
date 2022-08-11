import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { getManga } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
    const [currentId, setCurrentId] = useState(null);
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
       
    }, [currentId, dispatch]);

    return (
        <MuiThemeProvider theme={theme}>
            <Navbar />
            <Container className={classes.mainContain} maxWidth="lg">
                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form  currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </MuiThemeProvider>
    )
}

export default App;

