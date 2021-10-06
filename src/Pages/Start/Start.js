import { Box, Typography } from '@mui/material';
import './Start.css';


export default function Start () {
    return (
        <Box>
            <Typography variant='h3' component='div' sx={{
                display: 'flex',
                justifyContent: 'center',
                m: 5
            }}>
            Welcome
            </Typography>
            <Typography variant='p' component='div' sx={{
                display: 'flex',
                justifyContent: 'center',
                m: 5
            }}>
            Please login or register to continue using the site
            </Typography>
        </Box>
    );
}