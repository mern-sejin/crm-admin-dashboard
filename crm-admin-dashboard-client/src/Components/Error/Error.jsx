import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { VscError } from 'react-icons/vsc';
export default function Error ({ message, mt, sx }) {
    return (
        <Box component='div' display='flex' alignItems='center' gap={1} mt={mt || 1} sx={sx}>
            <VscError color='red'/>
            <Typography component='span' color='red' fontSize={{ xs: 'small', sm: 14 }}>
                { message }
            </Typography>
        </Box>
    );  
};
Error.propTypes = {
    message: PropTypes.string,
    mt: PropTypes.any,
    sx: PropTypes.any,
};