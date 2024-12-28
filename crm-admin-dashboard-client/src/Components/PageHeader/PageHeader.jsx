import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
export default function PageHeader ({ icon, title, subTitle }) {
    return (
        <Box component='div' bgcolor='white' px={3} py={1} display='flex' alignItems='center' 
        gap={2} boxShadow='0 1px 3px #0000001f, 0 1px 2px #0000003d' position='sticky' top={0} 
        zIndex={998746}>
            <Typography component='span' color='var(--main)' fontSize={40} display='flex' alignItems='center'>
                { icon }
            </Typography>
            <Box component='div'>
                <Typography component='h1' fontSize={20} fontWeight={500}>
                    { title }
                </Typography>
                <Typography component='p' fontSize={13} fontWeight={500}>
                    { subTitle }
                </Typography>
            </Box>
        </Box>
    );
};
PageHeader.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    subTitle: PropTypes.string,
};