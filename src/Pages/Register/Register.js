import './Register.css';
import {TextField, Button, Box, Typography} from '@mui/material';


function Register () {
    return (
      <Box>
          <div className="register">
          <Typography variant='h3' component='div' sx={{
                display: 'flex',
                justifyContent: 'center',
                m: 5
            }}>
            Register
          </Typography>
          <TextField id="register-email" label="Email" />
          <TextField id="register-first-name" label="First name" />
          <TextField id="register-last-name" label="Last name" />
          <TextField id="register-password" label="Password" type="password" />
          <TextField id="register-confirm-password" label="Confirm password" type="password" />
          <Button variant='contained'>Register</Button>
        </div>
      </Box>
    );
}

export default Register;