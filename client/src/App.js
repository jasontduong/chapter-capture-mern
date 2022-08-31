import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material'
import { getManga } from './actions/posts';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';


const App = () => {
    const [resourceType, setResourceType] = useState('q=chain');

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

        <GoogleOAuthProvider clientId={client_id}> 
          <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Navbar />
                    <Container maxWidth="lg">
                        <Routes>
                            <Route path="/" exact element={<Home/>} />
                            <Route path="/auth" exact element={<Auth/>} />
                        </Routes>
                    </Container>
                </BrowserRouter>
            </ThemeProvider>
        </GoogleOAuthProvider>
    );
};

export default App;

