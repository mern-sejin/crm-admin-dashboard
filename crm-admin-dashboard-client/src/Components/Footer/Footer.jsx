import { Box, Typography } from '@mui/material';
export default function Footer () {
    return (
        <Box component='footer' bgcolor='#dedede' textAlign='center' borderTop='1px solid #d2d6de' p={2}>
            <Typography component='p' fontWeight={500}>
                &copy; Copyright {new Date().getUTCFullYear()}. 
                All rights reserved.
            </Typography>
        </Box>
    );
};