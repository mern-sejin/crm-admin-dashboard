import PropTypes from 'prop-types';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import { AiOutlineFullscreenExit } from 'react-icons/ai';
import { FaMinus } from 'react-icons/fa';
import { IoIosMove } from 'react-icons/io';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
export const PanelHeader = ({ title, enableDrag, setEnableDrag, fullscreen }) => {
    return (
        <Box component='div' bgcolor='#e8f1f3' display='flex' alignItems='center' justifyContent='space-between' 
        px={2} py={1} borderBottom='1px solid #b7b9bf' sx={{ cursor: enableDrag && 'move' }}>
            <Typography component='h5' fontSize={20} fontWeight={500} whiteSpace='nowrap' overflow='hidden' 
            textOverflow='ellipsis'>
                { title }
            </Typography>
            <Box component='div' display='flex' alignItems='center' gap={1}>
                <Tooltip title='Unpin' arrow>
                    <Button varient='text' sx={{ height: 30, minWidth: 30, color: 'black', p: 0, fontSize: 15, 
                    borderRadius: '50%' }} onClick={() => setEnableDrag(!enableDrag)}>
                        { enableDrag ? <AiOutlineFullscreenExit size={18}/> : <IoIosMove/> }
                    </Button>
                </Tooltip>
                <Tooltip title='Minimize' arrow>
                    <Button varient='text' sx={{ height: 30, minWidth: 30, color: 'black', p: 0, fontSize: 12, 
                    borderRadius: '50%' }}>
                        <FaMinus/>
                    </Button>
                </Tooltip>
                <Tooltip title='Fullscreen' arrow>
                    <Button varient='text' sx={{ height: 30, minWidth: 30, color: 'black', p: 0, fontSize: 20, 
                    borderRadius: '50%' }} onClick={fullscreen.active === false ? fullscreen.enter : fullscreen.exit}>
                        { fullscreen.active === false ? <MdFullscreen/> : <MdFullscreenExit/> }
                    </Button>
                </Tooltip>
            </Box>
        </Box>
    );
};
PanelHeader.propTypes = {
    title: PropTypes.string,
    enableDrag: PropTypes.bool,
    setEnableDrag: PropTypes.func,
    fullscreen: PropTypes.object,
};