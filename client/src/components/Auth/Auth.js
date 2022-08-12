import React, { useState, useEffect} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, Slide} from "@material-ui/core";
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { GoogleLogin, GoogleLogout, GoogleOAuthProvider } from '@react-oauth/google';





const Auth = () => {
    const classes = useStyles();
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
    const googleSuccess = async (res) => {
        console.log(res);
    };
    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In failed! Try again later.")
    };

    return (
        <GoogleOAuthProvider client_id="145427410552-m2jo2tjp9806irhjvluhkmsjbiofsa9k.apps.googleusercontent.com"> 
        <Container component="main" maxWidth="xs">
            <Slide in direction="up" mountOnEnter unmountOnExit>
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                
                    </Avatar>
                    <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
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
                        
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <GoogleLogin
                                onSuccess={(response) => console.log(response)}
                                onError={() => console.log('Error')}
                        />
                        
                        <Grid className={classes.alreadyHave}container justifyContent="flex-end">
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
        </GoogleOAuthProvider>
    );
};

export default Auth;