import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import PageHeader from '../../Components/PageHeader/PageHeader';
import { MdErrorOutline } from 'react-icons/md';
export default function NotFound () {
    return (
        <Box component='section' className='page-layout'>
            <Helmet>
                <title>404 Page Not Found</title>
            </Helmet>
            <PageHeader icon={<MdErrorOutline/>} title="Oops! You're lost." subTitle='Page Not Found'/>
            <Box component='div' display='flex' alignItems='center' justifyContent='center' gap={1} 
            px={2} minHeight={400}>
                <Typography component='h1' fontSize={60} color='primary'>404</Typography>
                <Box component='div'>
                    <Typography component='h5' fontSize={20} fontWeight={600} color='primary'>
                        Oops! You&apos;re Lost.
                    </Typography>
                    <Typography component='p' fontSize={15}>
                        The page you are looking for was not found!
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};