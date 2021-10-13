import './Login.css';
import {
    TextField,
    Button,
    Box,
    Typography,
    Grid
} from '@mui/material';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

function Login () {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        if(!(email, password)) {
            alert('You must provide email and password');
        }
        const payload = {
            email,
            password
        }

        try {
            const resp = await axios.post(process.env.REACT_APP_AUTH_URL + 'users/login', payload);
            if (resp.status === 200) {
                alert('User logged in');
                console.log(resp.data);
                const user = jwt_decode(resp.data.token);
                console.log(user);
            }
        } catch (err) {
            console.error(err);
            alert('no login for you');
        }

    }
    return (
        <Box sx={{
            marginTop:8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography variant='h3' component='div' sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    m: 5
                }}>
                Login
            </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        id='email'
                        name='email'
                        label='Email'
                        fullWidth
                        />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        id='password'
                        name='password'
                        label='Password'
                        type='password' 
                        fullWidth
                        />
                </Grid>
            </Grid>
            <Button 
                type='submit'
                fullWidth
                variant='contained'
                sx={{mt:3, mb:2}}
            >Login</Button>
        </Box>
        </Box>
    );
}

export default Login;

