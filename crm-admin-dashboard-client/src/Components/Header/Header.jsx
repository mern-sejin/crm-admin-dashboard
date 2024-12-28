import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { TiUser } from 'react-icons/ti';
import { Avatar, Badge, Box, Button, Drawer, Fade, FormControl, Modal, Paper, Popper, Typography } from '@mui/material';
import { useSidebar } from '../../Hooks/useSidebar';
import { useDropdown } from '../../Hooks/useDropdown';
import Sidebar from '../Sidebar/Sidebar';
import Error from '../Error/Error';
import { RiMenuFold3Fill, RiMenuFold4Fill } from 'react-icons/ri';
import { BsImageAlt, BsSearch } from 'react-icons/bs';
import { PiNotepad, PiShoppingCart } from 'react-icons/pi';
import { TfiEmail } from 'react-icons/tfi';
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';
import { FaBullhorn, FaChartBar, FaChartLine, FaCheckCircle, FaInbox, FaRegDotCircle, FaSignOutAlt, FaWifi } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
export default function Header () {
    const { open, toggleSidebar } = useSidebar();
    return (
        <Box component='header' position='sticky' top={0} zIndex={998746}>
            <Box component='div' bgcolor='#2A3F54' display='flex' alignItems='center' justifyContent='space-between' 
            px={{ xs: 1, sm: 2 }} py={1}>
                <Box component='div' display='flex' alignItems='center' gap={{ sm: 1 }}>
                    <Button variant='text' sx={{ height: 40, minWidth: 40, color: 'white', fontSize: 'x-large', 
                    borderRadius: '50%', display: { xs: 'none', md: 'inherit' }}} onClick={toggleSidebar}>
                        { open ? <RiMenuFold3Fill/> : <RiMenuFold4Fill/> }
                    </Button>
                    <MobileSidebar/>
                    <SearchModal/>
                </Box>
                <Box component='div' display='flex' alignItems='center' gap={{ sm: 1.5 }}>
                    <ShopDropdown/>
                    <MessageDropdown/>
                    <NotificationDropdown/>
                    <NoteDropdown/>
                    <SettingsDropdown/>
                    <AvatarDropdown/>
                </Box>
            </Box>
        </Box>
    );  
};
const MobileSidebar = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);
    return (
        <>
        <Button sx={{ height: 40, minWidth: 40, color: 'white', fontSize: 'x-large', borderRadius: '50%', 
        display: { xs: 'inherit', md: 'none' }}} onClick={toggleDrawer}>
            <RiMenuFold3Fill/>
        </Button>
        <Drawer open={open} PaperProps={{ style: { width: 300 }}} sx={{ zIndex: 998746 }} transitionDuration={400}
        onClose={() => setOpen(false)}>
            <Sidebar/>
        </Drawer>
        </>
    );
};
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '95%', sm: 700 },
    bgcolor: 'white',
    boxShadow: 24,
};
const SearchModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Box component='div'>
            <Button variant='text' sx={{ height: 40, minWidth: 40, color: 'white', fontSize: 'large', 
            borderRadius: '50%' }} onClick={handleOpen}>
                <BsSearch/>
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby='search-modal' aria-describedby='search-modal' 
            closeAfterTransition sx={{ zIndex: 998746998746 }}>
                <Box sx={style}>
                    <Box component='div' bgcolor='#f7f9fa' display='flex' alignItems='center' justifyContent='space-between' 
                    borderBottom='1px solid lightgray' p={2}>
                        <Box component='div' px={3}>
                            <Typography component='span' fontSize='large' fontWeight={600}>Search</Typography>
                        </Box>
                        <Box component='div'>
                            <Button varient='text' sx={{ height: 30, minWidth: 30, color: 'black', p: 0, borderRadius: 0 }} 
                            onClick={handleClose}>
                                <IoMdClose size={20}/>
                            </Button>
                        </Box>
                    </Box>
                    <Box component='form' autoComplete='off' p={{ xs: 5, sm: 8 }} onSubmit={handleSubmit(onSubmit)}>
                        <FormControl fullWidth>
                            <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                            fontWeight={600} mb={1}>
                                Search Here
                            </Typography>
                            <Box component='input' type='text' name='search' id='search' placeholder='Search Here' 
                            {...register('search', { required: true })} sx={{ color: '#555555', fontSize: 14, 
                            fontWeight: 500, p: 2, border: '1px solid #cccccc', borderRadius: '5px', 
                            outline: 0, ':focus': { outline: '1px solid var(--main)' }}} maxLength={30}/>
                            <Typography component='small' color='#737373' fontSize={13} mt={0.5}>
                                Search Anything
                            </Typography>
                            { errors?.search?.type === 'required' && <Error message='Please write here something!'/> }
                        </FormControl>
                        <FormControl sx={{ mt: 2 }}>
                            <Button variant='text' type='submit' sx={{ bgcolor: 'var(--main)', color: 'white', px: 3, 
                            py: 1.5 }}>
                                Search
                            </Button>
                        </FormControl>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};
const ShopDropdown = () => {
    const popperRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    useDropdown(popperRef, anchorEl, () => setOpen(false));
    const toggleShop = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };
    const products = [
        { name: 'Polo Shirt', totalItem: 10 },
        { name: 'Kits', totalItem: 21 },
        { name: 'Football', totalItem: 30 },
    ];
    return (
        <>
        <Button sx={{ bgcolor: open && 'black', height: 40, minWidth: 40, color: 'white', fontSize: 'x-large', 
        borderRadius: '50%' }} onClick={toggleShop}>
            <Badge badgeContent={products.length} color='primary'>
                <PiShoppingCart/>
            </Badge>
        </Button>
        <Popper sx={{ zIndex: 998746 }} open={open} anchorEl={anchorEl} placement='bottom-end' transition ref={popperRef}>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper sx={{ mt: 1, p: 1 }}>
                        <Box component='div' maxHeight={150} sx={{ overflowY: 'scroll', '::-webkit-scrollbar': { width: 3, 
                        borderRadius: 1 }, '::-webkit-scrollbar-thumb': { borderRadius: 1 }}}>
                            { products.map(product => 
                                <Box component='div' pr={1} key={crypto.randomUUID()}>
                                    <Button varient='text' component='div' sx={{ minWidth: 200, color: 'black', fontSize: 'x-large', 
                                    p: 1, mb: 1, justifyContent: 'normal', gap: 1.5 }}>
                                        <BsImageAlt height='40px' width='40px'/>
                                        <Box component='div'>
                                            <Typography component='h5' fontSize={{ xs: 'large', md: 16 }} fontWeight={500}>
                                                { product.name }
                                            </Typography>
                                            <Typography component='p' fontSize={12} fontWeight={500}>
                                                { 'Total Item:' + product.totalItem }
                                            </Typography>
                                        </Box>
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Paper>
                </Fade>
            )}
        </Popper>
        </>
    );
};
const MessageDropdown = () => {
    const popperRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    useDropdown(popperRef, anchorEl, () => setOpen(false));
    const toggleShop = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };
    const items = [
        { avatar: '#', name: 'Ronaldo', message: 'Please order 10 pices of kits.', time: '15 hours ago' },
        { avatar: '#', name: 'Leo Messi', message: 'Please order 10 pices of Pizza.', time: '15 hours ago' }
    ];
    return (
        <>
        <Button sx={{ bgcolor: open && 'black', height: 40, minWidth: 40, color: 'white', fontSize: 'x-large', 
        borderRadius: '50%' }} onClick={toggleShop}>
            <Badge badgeContent={items.length} color='success'>
                <TfiEmail/>
            </Badge>
        </Button>
        <Popper sx={{ zIndex: 998746 }} open={open} anchorEl={anchorEl} placement='bottom-end' transition ref={popperRef}>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper sx={{ ml: 2, mt: 1, p: 1 }}>
                        <Box component='div' maxHeight={150} sx={{ overflowY: 'scroll', '::-webkit-scrollbar': { width: 3, 
                        borderRadius: 1 }, '::-webkit-scrollbar-thumb': { borderRadius: 1 }}}>
                            { items.map(item => 
                                <Box component='div' pr={1} key={crypto.randomUUID()}>
                                    <Button varient='text' component='div' sx={{ minWidth: '100%', color: 'black', fontSize: 'x-large', 
                                    p: 1, mb: 1, alignItems: 'start', justifyContent: 'normal', gap: 1.5 }}>
                                        <Avatar src={item.avatar} sx={{ background: 'gray' }} alt={item.name}/>
                                        <Box component='div'>
                                            <Typography component='h5' fontSize={{ xs: 'large', md: 16 }} fontWeight={500}>
                                                { item.name }
                                            </Typography>
                                            <Typography component='p' fontSize={12} fontWeight={500}>
                                                { item.message.length > 25 ? item.message.slice(0, 25) + '...' : item.message }
                                            </Typography>
                                            <Typography component='p' color='var(--main)' fontSize={12} fontWeight='bold'>
                                                { item.time }
                                            </Typography>
                                        </Box>
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Paper>
                </Fade>
            )}
        </Popper>
        </>
    );
};
const NotificationDropdown = () => {
    const popperRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    useDropdown(popperRef, anchorEl, () => setOpen(false));
    const toggleShop = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };
    const items = [
        { title: 'Change your font style' },
        { title: 'Check the system status...' },
        { title: 'Add more admin...' },
        { title: 'Add more clients and order...' },
        { title: 'Check your profile' },
        { title: 'Learn web development' },
    ];
    return (
        <>
        <Button sx={{ bgcolor: open && 'black', height: 40, minWidth: 40, color: 'white', fontSize: 'x-large', 
        borderRadius: '50%' }} onClick={toggleShop}>
            <Badge badgeContent={items.length} color='warning'>
                <IoNotificationsOutline/>
            </Badge>
        </Button>
        <Popper sx={{ zIndex: 998746 }} open={open} anchorEl={anchorEl} placement='bottom-end' transition ref={popperRef}>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper sx={{ ml: 2, mt: 1, p: 1 }}>
                        <Box component='div' maxHeight={200} sx={{ overflowY: 'scroll', '::-webkit-scrollbar': { width: 3, 
                        borderRadius: 1 }, '::-webkit-scrollbar-thumb': { borderRadius: 1 }}}>
                            { items.map(item => 
                                <Box component='div' pr={1} key={crypto.randomUUID()}>
                                    <Button varient='text' component='div' sx={{ minWidth: '100%', color: 'black', fontSize: 'x-large', 
                                    p: 1, justifyContent: 'normal', gap: 1 }}>
                                        <FaRegDotCircle fontSize='large'/>
                                        <Typography component='span' fontSize={{ xs: 'small', md: 14 }} fontWeight={500}>
                                            { item.title }
                                        </Typography>
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Paper>
                </Fade>
            )}
        </Popper>
        </>
    );
};
const NoteDropdown = () => {
    const popperRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    useDropdown(popperRef, anchorEl, () => setOpen(false));
    const toggleShop = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };
    const items = [
        { title: 'Theme color should be change', percentage: 10, bg: 'green' },
        { title: 'Fix error and bugs', percentage: 90, bg: 'orange' },
        { title: 'Sidebar color change', percentage: 80, bg: 'red' },
        { title: 'Font-family should be change', percentage: 30, bg: 'var(--main)' },
        { title: 'Fix the database error', percentage: 60, bg: 'green' },
        { title: 'Data table data missing', percentage: 20, bg: 'var(--main)' },
    ];
    return (
        <>
        <Button sx={{ bgcolor: open && 'black', height: 40, minWidth: 40, color: 'white', fontSize: 'x-large', 
        borderRadius: '50%' }} onClick={toggleShop}>
            <Badge badgeContent={items.length} color='error'>
                <PiNotepad/>
            </Badge>
        </Button>
        <Popper sx={{ zIndex: 998746 }} open={open} anchorEl={anchorEl} placement='bottom-end' transition ref={popperRef}>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper sx={{ ml: 1, mt: 1, p: 1 }}>
                        <Box component='div' maxHeight={200} sx={{ overflowY: 'scroll', '::-webkit-scrollbar': { width: 3, 
                        borderRadius: 1 }, '::-webkit-scrollbar-thumb': { borderRadius: 1 }}}>
                            { items.map(item => 
                                <Box component='div' pr={1} key={crypto.randomUUID()}>
                                    <Button varient='text' component='div' sx={{ minWidth: '100%', color: 'black', fontSize: 'x-large', 
                                    p: 1, justifyContent: 'space-between', gap: 1 }}>
                                        <Box component='div' display='flex' alignItems='center' gap={1}>
                                            <FaCheckCircle fontSize='large'/>
                                            <Typography component='span' fontSize={{ xs: 'small', md: 14 }} fontWeight={500}>
                                                { item.title }
                                            </Typography>
                                        </Box>
                                        <Typography component='span' bgcolor={item.bg} fontSize={{ xs: 'small', md: 14 }} 
                                        fontWeight={500} color='white' px={0.7} py={0.1} borderRadius='3px'>
                                            { item.percentage + '%' }
                                        </Typography>
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Paper>
                </Fade>
            )}
        </Popper>
        </>
    );
};
const SettingsDropdown = () => {
    const popperRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    useDropdown(popperRef, anchorEl, () => setOpen(false));
    const toggleShop = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };
    const items = [
        { link: '/dashboard', icon: <FaChartLine/>, title: 'Networking' },
        { link: '/dashboard', icon: <FaBullhorn/>, title: 'Lan Settings' },
        { link: '/dashboard', icon: <FaChartBar/>, title: 'Settings' },
        { link: '/dashboard', icon: <FaWifi/>, title: 'Wifi' },
    ];
    return (
        <>
        <Button sx={{ bgcolor: open && 'black', height: 40, minWidth: 40, color: 'white', fontSize: 'x-large', 
        borderRadius: '50%' }} onClick={toggleShop}>
            <IoSettingsOutline/>
        </Button>
        <Popper sx={{ zIndex: 998746 }} open={open} anchorEl={anchorEl} placement='bottom-end' transition ref={popperRef}>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper sx={{ mt: 1, p: 1 }}>
                        { items.map(item => 
                            <Box component='div' key={crypto.randomUUID()}>
                                <Link to={item.link}>
                                    <Button varient='text' sx={{ minWidth: 200, color: 'black', fontSize: 'x-large', p: 1, 
                                    justifyContent: 'normal', gap: 1 }}>
                                        { item.icon }
                                        <Typography component='span' fontSize={{ xs: 'small', md: 14 }} fontWeight={500}>
                                            { item.title }
                                        </Typography>
                                    </Button>
                                </Link>
                            </Box>
                        )}
                    </Paper>
                </Fade>
            )}
        </Popper>
        </>
    );
};
const AvatarDropdown = () => {
    const popperRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    useDropdown(popperRef, anchorEl, () => setOpen(false));
    const toggleShop = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };
    const items = [
        { link: '/profile', icon: <TiUser/>, title: 'Profile' },
        { link: '/dashboard', icon: <FaInbox/>, title: 'Inbox' },
    ];
    return (
        <>
        <Button sx={{ height: 50, minWidth: 50, color: 'white', fontSize: 'x-large', p: 0, borderRadius: '50%' }}
        onClick={toggleShop}>
            <Avatar src='#' sx={{ background: '#ed6c02' }} alt='Sejin Ahmed'/>
        </Button>
        <Popper sx={{ zIndex: 998746 }} open={open} anchorEl={anchorEl} placement='bottom-end' transition ref={popperRef}> 
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper sx={{ p: 1 }}>
                        { items.map(item => 
                            <Box component='div' key={item.link}>
                                <Link to={item.link}>
                                    <Button varient='text' sx={{ minWidth: 200, color: 'black', fontSize: 'x-large', p: 1, 
                                    justifyContent: 'normal', gap: 1 }}>
                                        { item.icon }
                                        <Typography component='span' fontSize={{ xs: 'small', md: 14 }} fontWeight={500}>
                                            { item.title }
                                        </Typography>
                                    </Button>
                                </Link>
                            </Box>
                        )}
                        <Box component='div' pt={1}>
                            <Button varient='text' sx={{ minWidth: 200, color: 'red', p: 1, justifyContent: 'normal', 
                            gap: 1, border: '1px solid red' }}>
                                <FaSignOutAlt fontSize='x-large'/>
                                <Typography component='span' fontSize={{ xs: 'small', md: 14 }} fontWeight={500}>
                                    Sign Out
                                </Typography>
                            </Button>
                        </Box>
                    </Paper>
                </Fade>
            )}
        </Popper>
        </>
    );
};