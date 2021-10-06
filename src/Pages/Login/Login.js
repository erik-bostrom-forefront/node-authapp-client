import './Login.css';
import {
    TextField,
    Button,
    Box,
    Typography
} from '@mui/material';

function Login () {
    return (
        <Box>
        <div className="login">
            <Typography variant='h3' component='div' sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    m: 5
                }}>
                Login
            </Typography>
            <TextField id="login-email" label="Email" />
            <TextField id="login-password" label="Password" type="password" />
            <Button variant='contained'>Login</Button>
        </div>
        </Box>
    );
}

export default Login;

