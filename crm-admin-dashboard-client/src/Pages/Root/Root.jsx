import { Outlet } from 'react-router-dom';
import { useSidebar } from '../../Hooks/useSidebar';
import { Box } from '@mui/material';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
export default function Root () {
    const { open } = useSidebar();
    return (
        <Box component='div' display='flex'>
            <Box component='div' width={open ? 270 : 70} sx={{ transition: 'width 0.5s ease' }} 
            display={{ xs: 'none', md: 'block' }}>
                <Sidebar/>
            </Box>
            <Box component='div' flex={1} sx={{ transition: 'width 0.5s ease' }}>
                <Body/>
            </Box>
        </Box>
    );  
};
const Body = () => {
    return (
        <Box component='div' width='100%'>
            <Header/>
            <Outlet/>
        </Box>
    );
};