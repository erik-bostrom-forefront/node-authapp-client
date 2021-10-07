import './Register.css';
import React from 'react';
import {TextField, Button, Box, Typography, Grid, Checkbox, FormControlLabel} from '@mui/material';
// import AlertBox from '../../Components/AlertBox/AlertBox';
import axios from 'axios';


function Register () {

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const firstName = data.get('firstName');
      const lastName = data.get('lastName');
      const email = data.get('email');
      const password = data.get('password');
      const confirmPassword = data.get('confirmPassword');

      if (password !== confirmPassword) {
        alert('password no match');
      }

      const payload = {
        firstName,
        lastName,
        email,
        password
      }

      try {
        const resp = await axios.post(process.env.REACT_APP_AUTH_URL + 'users/create', payload);
        if (resp.status === 200) {
          alert('User created');
        }
      } catch (err) {
        console.error(err);
        alert('user could not be created');
      }
      return
    }

    return (
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }} >
        <Typography variant='h3' component='div' sx={{
              display: 'flex',
              justifyContent: 'center',
              m: 5
          }}>
          Create account
        </Typography>
        
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField 
                id="firstName"
                name='firstName'
                label="First name"
                fullWidth
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                name='lastName'
                label="Last name"
                fullWidth
                required
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
              id="email"
              name='email'
              label="Email"
              fullWidth
              required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                name='password'
                label="Password"
                type="password"
                fullWidth
                required
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="confirmPassword"
                name='confirmPassword'
                label="Confirm password"
                type="password"
                fullWidth
                required
                />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel 
                control={<Checkbox value="acceptTerms" color="primary" />}
                label="Agree to everything"
              />
            </Grid>
          </Grid>
          <Button type='submit' fullWidth variant='contained'sx={{mt:3, mb:2}} >create</Button>
        </Box>
      </Box>
    );
}

export default Register;