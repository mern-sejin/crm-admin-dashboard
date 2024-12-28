import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
export const SelectComponent = () => {
    const [selected, setSelected] = useState('');
    const Select = ({ open, setOpen, option }) => {
        const handleOpen = () => setOpen(!open);
        return (
            <Box component='div'>
                <Button varient='text' sx={{ height: 50, width: '100%', color: 'black', px: 2, justifyContent: 'space-between', 
                border: '1px solid #cccccc' }} onClick={handleOpen}>
                    { selected || 'Select' }
                    { open ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/> }
                </Button>
                <Option open={open} data={option} close={() => setOpen(false)}/>
            </Box>
        );
    };
    const Option = ({ open, data, close }) => {
        useEffect(() => {
            if (!selected && data) return setSelected(data[0]);
        }, [data]);
        const handleSelect = (event) => {
            setSelected(event.target.value);
            close();
        };
        return (
            <Box component='div' width='100%' display={open ? 'inherit' : 'none'} bgcolor='white' sx={{ opacity: open ? 1 : 1, 
            position: 'absolute', transition: 'height 1s ease', p: 1, boxShadow: '0 3px 6px #00000029,0 3px 6px #0000003b',
            border: '1px solid lightgray', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'clip', zIndex: 1, mt: 1 }}>
                <Box component='div' maxHeight={150} pr={1} sx={{ overflowY: 'auto', '::-webkit-scrollbar': { width: 2 }}}>
                    { data?.map(option => 
                        <Box component='div' key={crypto.randomUUID()}>
                            <Button varient='text' value={option} sx={{ width: '100%', color: 'black', justifyContent: 'normal', 
                            px: 2, borderRadius: 0, ':hover': { bgcolor: 'var(--main)', color: 'white' }}} onClick={handleSelect}>
                                { option }
                            </Button>
                        </Box>
                    )}
                </Box>
            </Box>
        );
    };
    Select.propTypes = {
        open: PropTypes.bool,
        setOpen: PropTypes.func,
        option: PropTypes.any,
    };
    Option.propTypes = {
        open: PropTypes.bool,
        data: PropTypes.any,
        close: PropTypes.func,
    };
    return { Select };
};