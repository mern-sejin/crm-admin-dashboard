import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import Logo from '../../Assets/Logo/logo.png';
export default function Animation ({ children }) {
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    if (loading) {
        return <Loading/>;
    } 
    if (pathname === '/') {
        return <Navigate to='/login' replace/>;
    }
    return children;
};
Animation.propTypes = {
    children: PropTypes.node,
};
const Loading = () => {
    return (
        <Box component='div' width='100%' height='100vh' bgcolor='white' position='fixed' display='flex'
        alignItems='center' justifyContent='center'>
            <Box component='div'>
                <Box component='div' display='flex' alignItems='center' gap={1}>
                    <Box component='img' src={Logo} height={80} width={80} alt='logo'/>
                    <Box component='div'>
                        <Typography component='h1' fontSize={28} fontWeight={600}>
                            <Typography component='span' color='primary' fontSize={28} fontWeight={600}>CRM </Typography> 
                            ADMIN DASHBOARD
                        </Typography>
                        <Typography component='span' fontWeight={500}>By Sejin Ahmed</Typography>
                    </Box>
                </Box>
                <Box component='div' textAlign='center' py={2}>
                    <CircularProgress/>
                </Box>
            </Box>
        </Box>
    );  
};