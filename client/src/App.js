import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { getManga } from './actions/posts';
import useStyles from './styles';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google';


const App = () => {
    const [resourceType, setResourceType] = useState('q=chain');
    const classes = useStyles();
    const client_id = "145427410552-m2jo2tjp9806irhjvluhkmsjbiofsa9k.apps.googleusercontent.com";

    const theme = createTheme({
        palette: {
            primary: {
                main: '#1de9b6',
            },
            secondary: {
                main: '#F491AA',
            },
        },
        typography: {
            fontFamily: [
                'Roboto Slab',
                'cursive',
            ].join(','),
        },
    });

    useEffect(() => {
        fetch('/manga')
            .then(response => response.json())
            .then(json => console.log(json));

    }, [resourceType]);

    return (

        <GoogleOAuthProvider client_id="145427410552-m2jo2tjp9806irhjvluhkmsjbiofsa9k.apps.googleusercontent.com"> 
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <Navbar />
                    <Container className={classes.mainContain} maxWidth="lg">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/auth" exact component={Auth} />
                        </Switch>
                    </Container>
                </BrowserRouter>
            </MuiThemeProvider>
        </GoogleOAuthProvider>
    );
};

export default App;

