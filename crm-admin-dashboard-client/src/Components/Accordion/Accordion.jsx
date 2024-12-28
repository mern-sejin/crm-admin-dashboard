import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useSidebar } from '../../Hooks/useSidebar';
import { Box, Button, Typography } from '@mui/material';
import CustomLink from '../CustomLink/CustomLink';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
export default function Accordion ({ data }) {
    const { open } = useSidebar();
    const { pathname } = useLocation();
    const [show, setShow] = useState(false);
    useEffect(() => {
        data?.items?.map(item => {
            if (pathname === item.link) setShow(true);
        });
    }, [pathname, data]);
    useEffect(() => {
        if (!open) return setShow(false);
        if (open && show) setShow(true);
    }, [open, show]);
    return (
        <>
        <Button variant='text' sx={{ width: '100%', color: 'white', px: 2, py: 1, pr: 3, justifyContent: 'normal', 
        gap: 2, borderRadius: 0 }} onClick={() => setShow(!show)}>
            <Typography component='span' fontSize={25}>
                { data.icon }
            </Typography>
            <Typography component='span' className='title' mb={0.6}>
                { data.title }
            </Typography>
            <Typography component='span' overflow='hidden' ml='auto'>
                { show ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/> }
            </Typography>
        </Button>
        <Box component='div' maxHeight={show ? 400 : 0} bgcolor='#07161e' whiteSpace='nowrap' overflow='hidden' 
        textOverflow='clip' pl={7} sx={{ transition: 'max-height 0.5s ease' }} className='accordion'>
            { data.items.map(item => 
                <Box component='div' key={item.link}>
                    <Button variant='text' sx={{ width: '100%', color: 'white', px: 2, py: 0, justifyContent: 'normal', 
                    gap: 2, borderLeft: `2px solid ${pathname === item.link ? 'white' : '#3b464880'}`, 
                    borderRadius: 0, background: pathname === item.link && 'var(--main)'}}>
                        <CustomLink to={item.link} className='link'>
                            <Typography component='span' className='title'>
                                { item.title }
                            </Typography>
                        </CustomLink>
                    </Button>
                </Box>
            )}
        </Box>
        </>
    );  
};
Accordion.propTypes = {
    data: PropTypes.object,
};