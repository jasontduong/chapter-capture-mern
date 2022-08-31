import React, { useState, useEffect} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, Slide} from '@mui/material'
import useStyles from './styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Input from './Input';
import { GoogleLogin, GoogleLogout, GoogleOAuthProvider } from '@react-oauth/google';





const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(true);
    
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    
    const handleSubmit = () => {
        


    };

    const handleChange = () => {

    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);

    };


    return (
         
        <Container component="main" maxWidth="xs">
            <Slide in direction="up" mountOnEnter unmountOnExit>
                <Paper elevation={3}>
                    <Avatar>
                        <LockOutlinedIcon />
                
                    </Avatar>
                    <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                    <form  onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignup && (
                                    <>
                                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                            <Input name="firstName" label="First Name" handleChange={handleChange} half/>
                                    </>
                                )}
                                <Input name="email" label="E-mail" handleChange={handleChange} type="email"/>
                                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                                { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                        </Grid>
                        
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <GoogleLogin
                                onSuccess={(response) => console.log(response)}
                                onError={() => console.log('Error')}
                        />
                        
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    { isSignup ? 'Already have an account? Sign In!' : "Don't have an account? Sign Up!"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Slide>
        </Container>
    );
};

export default Auth;