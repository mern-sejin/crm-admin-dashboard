import { Box, Button, Typography } from '@mui/material';
import Accordion from '../Accordion/Accordion';
import { navAccordionLink } from './nav-accordion-link';
import CustomLink from '../CustomLink/CustomLink';
import Logo from '../../Assets/Logo/logo.png';
import { FaTachometerAlt } from 'react-icons/fa';
export default function Sidebar () {
    return (
        <Box component='aside' height='100vh' bgcolor='#010a0f' position='relative' zIndex={998746}>
            <Brand/>
            <Box component='div' height='calc(100vh - 66px)' sx={{ overflowY: 'auto', '::-webkit-scrollbar': 
            { width: '2.5px', bgcolor: '#07161e' }}}> 
                <Navigation/>
            </Box>
        </Box>
    );  
};
const Brand = () => {
    return (
        <Box component='div' display='flex' alignItems='center' gap={1} p={1} position='relative'>
            <Box component='img' src={Logo} height={50} width={50} alt='logo'/>
            <Typography component='h1' color='white' fontSize={28} fontWeight={600} className='title'>
                <Typography component='span' color='var(--main)' fontSize={28} fontWeight={600}>CRM</Typography> ADMIN
            </Typography>
        </Box>
    );
};
const Navigation = () => {
    const { customers, transactions, sales, tasks, accountings, reports } = navAccordionLink();
    return (
        <Box component='div' display='flex' flexDirection='column' gap={2}>
            <Box component='div'>
                <CustomLink to='/dashboard' className='sidebar-link'>
                    <Button variant='text' sx={{ width: '100%', color: 'white', px: 2, py: 1, justifyContent: 'normal', 
                    gap: 2, borderRadius: 0 }}>
                        <Typography component='span'>
                            <FaTachometerAlt style={{ fontSize: 30 }}/>
                        </Typography>
                        <Typography component='span' className='title' mb={0.6}>Dashboard</Typography>
                    </Button>
                </CustomLink>
                <Accordion data={customers}/>
                <Accordion data={tasks}/>
                <Accordion data={transactions}/>
                <Accordion data={sales}/>
                <Accordion data={accountings}/>
                <Accordion data={reports}/>
            </Box>
        </Box>
    );
};