import React, {useState} from "react";
import { Avatar, Button, Paper, Grid, Container, Typography } from '@material-ui/core';
import { GoogleLogin} from 'react-goolge-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';


const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  //const isSignup = true;
  const [isSignup, setIsSignup] = useState(false);
  const handleSubmit = () => {

  };
  const handleChange = () => {

  };
  const handleShowPassword = () => {setShowPassword((prevShowPassword) => !prevShowPassword); };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup); 
    handleShowPassword(false);
  };
  const googleSuccess = (res) => {
    console.log(res);
  };
  const googleFailure = () => {
    console.log("Google sign in failed");  
  };


  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar}>

      <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }

          </Grid>
          <GoogleLogin 
          clientId="74911508472-8esq5v47fdf7pivb2fn1vrl553hkuqk3.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">Google Sign In</Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode} >
                { isSignup ? 'Login Instead' : 'New? Register Here'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;