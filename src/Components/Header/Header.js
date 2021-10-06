import './Header.css';
import {
    Box,
    AppBar,
    Button,
    Toolbar,
    Container
} from '@mui/material';
import {Link} from 'react-router-dom';

export default function Header () {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static'>
                <Container maxWidth='lg'>
                <Toolbar>
                    <Box sx={{flexGrow: 1}}>
                        <Button color='inherit' variant='h6' component={Link} to='/'> Auth App </Button>
                    </Box>
                    <Box>
                        <Button color='inherit' component={Link} to='/login'>Login</Button>
                        <Button color='inherit' component={Link} to='/register'>Register</Button>
                    </Box>
                </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}