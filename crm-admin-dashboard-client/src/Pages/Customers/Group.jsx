import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Controller, useForm } from 'react-hook-form';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Draggable from 'react-draggable';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Heading, Bold, Italic, Underline, FontColor, FontBackgroundColor } from 'ckeditor5';
import { Box, Button, Fade, FormControl, FormControlLabel, Modal, Paper, Popper, Radio, RadioGroup, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useDropdown } from '../../Hooks/useDropdown';
import PageHeader from '../../Components/PageHeader/PageHeader';
import { PanelHeader } from '../../Components/PanelHeader/PanelHeader';
import Error from '../../Components/Error/Error';
import Footer from '../../Components/Footer/Footer';
import { FaUsers, FaPen, FaRegFilePdf, FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import { TiUserAdd } from 'react-icons/ti';
import { BsFiletypePng } from 'react-icons/bs';
export default function Group () {
    const fullscreen = useFullScreenHandle();
    const [enableDrag, setEnableDrag] = useState();
    const element = useRef(null);
    const popperRef = useRef(null);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    useDropdown(popperRef, anchorEl, () => setOpenDropdown(false));
    const toggleDropdown = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenDropdown(!openDropdown);
    };
    return (
        <Box component='section' className='page-layout'>
            <Helmet>
                <title>CRM Admin Dashboard | Group</title>
            </Helmet>
            <PageHeader icon={<FaUsers/>} title='Customers' subTitle='Customer List'/>
            <Box component='div' p={4} px={{ xs: 2, sm: 4 }} pb={7}>
                <FullScreen handle={fullscreen}>
                    <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                        <Box component='div' height={fullscreen.active && '100vh'} bgcolor='white' ref={element}
                        boxShadow='0 3px 6px #00000029,0 3px 6px #0000003b'>
                            <PanelHeader title='Customers List' enableDrag={enableDrag} setEnableDrag={setEnableDrag} 
                            fullscreen={fullscreen}/>
                            <Box component='div' display='flex' alignItems='center' justifyContent='space-between' 
                            px={2} pt={2}>
                                <Box component='div'>
                                    <Link to='/add-customer'>
                                        <Button variant='text' sx={{ bgcolor: 'var(--main)', color: 'white', px: 2, gap: 1 }}>
                                            <TiUserAdd size={20}/>
                                            Add New Group
                                        </Button>
                                    </Link>
                                </Box>
                                <Box component='div'>
                                    <Button varient='text' sx={{ color: 'black', gap: 1 }} onClick={toggleDropdown}>
                                        Export Data
                                        { openDropdown ? <IoIosArrowUp size={15}/> : <IoIosArrowDown size={15}/> }
                                    </Button>
                                    <Popper sx={{ zIndex: 998746 }} open={openDropdown} anchorEl={anchorEl} placement='bottom-end' 
                                    transition ref={popperRef}>
                                        {({ TransitionProps }) => (
                                            <Fade {...TransitionProps} timeout={350}>
                                                <Paper sx={{ border: '1px solid lightgray', mt: 1, p: 1 }}>
                                                    <Box component='div'>
                                                        <Button varient='text' sx={{ minWidth: 150, color: 'black', justifyContent: 'start', 
                                                        gap: 1, borderRadius: 0, px: 2 }}>
                                                            <BsFiletypePng size={20}/>
                                                            PNG
                                                        </Button>
                                                    </Box>
                                                    <Box component='div'>
                                                        <Button varient='text' sx={{ minWidth: 150, color: 'black', justifyContent: 'start', 
                                                        gap: 1, borderRadius: 0, px: 2 }}>
                                                            <FaRegFilePdf size={20}/>
                                                            PDF
                                                        </Button>
                                                    </Box>
                                                </Paper>
                                            </Fade>
                                        )}
                                    </Popper>
                                </Box>
                            </Box>
                            <ListContainer/>
                        </Box>
                    </Draggable>
                </FullScreen>
            </Box>
            <Footer/>
        </Box>
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
const ListContainer = () => {
    const listHead = [
        { id: crypto.randomUUID(), title: 'Name', size: { xs: 4, sm: 1.7 }},
        { id: crypto.randomUUID(), title: 'CID', size: { xs: 4, sm: 1.7 }},
        { id: crypto.randomUUID(), title: 'Price', display: { xs: 'none', sm: 'inherit' } },
        { id: crypto.randomUUID(), title: 'Description', display: { xs: 'none', sm: 'inherit' } },
        { id: crypto.randomUUID(), title: 'Date', display: { xs: 'none', sm: 'inherit' } },
        { id: crypto.randomUUID(), title: 'Status', display: { xs: 'none', sm: 'inherit' } },
        { id: crypto.randomUUID(), title: 'Action', size: 'auto', flex: 1 },
    ];
    const customers = [
        { 
            id: crypto.randomUUID(),
            name: 'Sejin Ahmed', 
            cid: 'Adn4541',
            price: 210,
            description: 'Web Design',
            date: '27th April, 2017',
            status: 'active',
        },
        { 
            id: crypto.randomUUID(),
            name: 'Sejin Ahmed', 
            cid: 'Adn4541',
            price: 210,
            description: 'Web Design',
            date: '27th April, 2017',
            status: 'inactive',
        },
        { 
            id: crypto.randomUUID(),
            name: 'Sejin Ahmed', 
            cid: 'Adn4541',
            price: 210,
            description: 'Web Design',
            date: '27th April, 2017',
            status: 'active',
        },
    ];
    return (
        <Box component='div' p={2}>
            <Box component='div'>
                <Grid component='div' container bgcolor='#d9edf7' color='#374767' border='1px solid lightgray'>
                    { listHead.map(head => 
                        <Grid size={head.size || 1.7} borderRight='1px solid lightgray' display={head.display || 'inherit'} 
                        p={1} px={2} key={head.id} flex={head.flex}>
                            <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                { head.title }
                            </Typography>
                        </Grid>
                    )}
                </Grid>
                <Box component='div' height={200} maxHeight={410} sx={{ overflowY: 'auto', '::-webkit-scrollbar': { width: 2 }}}>
                    { customers.map(customer => 
                        <Grid component='div' container bgcolor='white' border='1px solid lightgray' key={customer.id}>
                            <Grid size={{ xs: 4, sm: 1.7 }} display='flex' alignItems='center' p={1} px={2} borderRight='1px solid lightgray'>
                                <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                    { customer.name }
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 4, sm: 1.7 }} display='flex' alignItems='center' p={1} px={2} borderRight='1px solid lightgray'>
                                <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                    { customer.cid }
                                </Typography>
                            </Grid>
                            <Grid size={1.7} display={{ xs: 'none', sm: 'flex' }} alignItems='center' p={1} px={2} borderRight='1px solid lightgray'>
                                <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                    { customer.price }
                                </Typography>
                            </Grid>
                            <Grid size={1.7} display={{ xs: 'none', sm: 'flex' }} alignItems='center' p={1} px={2} borderRight='1px solid lightgray'>
                                <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                    { customer.description }
                                </Typography>
                            </Grid>
                            <Grid size={1.7} display={{ xs: 'none', sm: 'flex' }} alignItems='center' p={1} px={2} 
                            borderRight='1px solid lightgray'>
                                <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                    { customer.date }
                                </Typography>
                            </Grid>
                            <Grid size={1.7} display={{ xs: 'none', sm: 'flex' }} alignItems='center' p={1} px={2} borderRight='1px solid lightgray'>
                                <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                    { customer.status === 'active' ? 
                                        <Typography component='span' color='var(--main)' px={1} fontWeight={600}>Active</Typography> :
                                        <Typography component='span' color='red' px={1} fontWeight={600}>Inactive</Typography> 
                                    }
                                </Typography>
                            </Grid>
                            <Grid size='auto' display='flex' alignItems='center' gap={1} p={1} borderRight='1px solid lightgray' 
                            whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis' flex={1}>
                                <UpdateCustomer/>
                                <DeleteCustomer/>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Box>
        </Box>
    );
};
const UpdateCustomer = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit, control, setValue, setError, clearErrors, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Box component='div'>
            <Button varient='text' sx={{ height: 30, minWidth: 30, color: 'black', p: 0, borderRadius: '50%' }} 
            onClick={handleOpen}>
                <FaPen size={15}/>
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby='edit-modal' aria-describedby='edit-modal' 
            closeAfterTransition sx={{ zIndex: 998746998746 }}>
                <Box sx={style}> 
                    <Box component='div' bgcolor='#f7f9fa' display='flex' alignItems='center' justifyContent='space-between' 
                    borderBottom='1px solid lightgray' p={2}>
                        <Box component='div' display='flex' alignItems='center' gap={1} color='#374767'>
                            <FaUser size={20}/>
                            <Typography component='span' fontSize='large' fontWeight={600}>Update Customer</Typography>
                        </Box>
                        <Box component='div'>
                            <Button varient='text' sx={{ height: 30, minWidth: 30, color: 'black', p: 0, borderRadius: 0 }} 
                            onClick={handleClose}>
                                <IoMdClose size={20}/>
                            </Button>
                        </Box>
                    </Box>
                    <Box component='form' px={3} py={2} autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                        <Grid component='div' container spacing={2}>
                            <Grid component='div' size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Customer Name
                                    </Typography>
                                    <Box component='input' type='text' name='name' id='name' placeholder='Name' 
                                    {...register('name', { required: true })} sx={{ color: '#555555', fontSize: 14, 
                                    fontWeight: 500, p: 2, border: '1px solid #cccccc', borderRadius: '5px', outline: 0, ':focus': 
                                    { outline: '1px solid var(--main)' }}} maxLength={30}/>
                                    { errors?.name?.type === 'required' && <Error message='Customer Name is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid component='div' size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        CID
                                    </Typography>
                                    <Box component='input' type='number' {...register('cid', { required: true })} 
                                    name='cid' id='cid' placeholder='CID' 
                                    sx={{ color: '#555555', fontSize: 14, fontWeight: 500, p: 2, border: '1px solid #cccccc', 
                                    borderRadius: '5px', outline: 0, ':focus': { outline: '1px solid var(--main)' }}}/>
                                    { errors?.cid?.type === 'required' && <Error message='CID is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid component='div' size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Price
                                    </Typography>
                                    <Box component='input' type='number' {...register('price', { required: true })} 
                                    name='price' id='price' placeholder='Price' 
                                    sx={{ color: '#555555', fontSize: 14, fontWeight: 500, p: 2, border: '1px solid #cccccc', 
                                    borderRadius: '5px', outline: 0, ':focus': { outline: '1px solid var(--main)' }}}/>
                                    { errors?.price?.type === 'required' && <Error message='Price is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid component='div' size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Status
                                    </Typography>
                                    <RadioGroup row name='status'>
                                        <FormControlLabel value='Active' control={
                                            <Radio size='small' sx={{ color: 'var(--main)', '&.Mui-checked': { color: 'var(--main)' }}}/>
                                        } label='Active' {...register('status', { required: true })}/>
                                        <FormControlLabel value='Inactive' control={
                                            <Radio size='small' sx={{ color: 'var(--main)', '&.Mui-checked': { color: 'var(--main)' }}}/>
                                        } label='Inactive' {...register('status', { required: true })}/>
                                    </RadioGroup>
                                    { errors?.status?.type === 'required' && <Error message='Status is required!'/> }
                                </FormControl>
                            </Grid>
                        </Grid>
                        <FormControl sx={{ mt: 2 }} fullWidth>
                            <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                            fontWeight={600} mb={1}>
                                Description
                            </Typography>
                            <Controller
                                name='description'
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <>
                                    <CKEditor onChange={(event, editor) => {
                                        clearErrors('description');
                                        const data = editor.getData();
                                        if (data === '') setError('description', { type: 'required' }); 
                                        setValue('description', data);
                                    }} editor={ ClassicEditor } data={field.value} config={{
                                        licenseKey: 'GPL',
                                        plugins: [ 
                                            Essentials, Paragraph, Heading, Bold, Italic, Underline, FontColor, 
                                            FontBackgroundColor, 
                                        ],
                                        toolbar: [ 
                                            'undo', 'redo', '|', 'heading', '|', 'bold', 'italic', '|', 'fontColor', 
                                            'fontBackgroundColor', '|', 'underline' 
                                        ],
                                        placeholder: 'Description',
                                    }}/>
                                    </>
                                )}
                            />
                            { errors?.description?.type === 'required' && <Error message='Description is required!'/> }
                        </FormControl>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 2, mt: 2 }}>
                            <Button varient='text' type='reset' sx={{ bgcolor: 'red', color: 'white', px: 2 }} 
                            onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button varient='text' type='submit' sx={{ bgcolor: 'var(--main)', color: 'white', px: 2 }}>
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};
const DeleteCustomer = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box component='div'>
            <Button varient='text' sx={{ height: 30, minWidth: 30, color: 'black', p: 0, borderRadius: '50%' }} 
            onClick={handleOpen}>
                <MdDelete size={20}/>
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby='edit-modal' aria-describedby='edit-modal' 
            closeAfterTransition sx={{ zIndex: 998746998746 }}>
                <Box sx={style}> 
                    <Box component='div' bgcolor='#f7f9fa' display='flex' alignItems='center' justifyContent='space-between' 
                    borderBottom='1px solid lightgray' p={2}>
                        <Box component='div' display='flex' alignItems='center' gap={1} color='#374767'>
                            <MdDelete size={30}/>
                            <Typography component='span' fontSize='large' fontWeight={600}>Delete Customer</Typography>
                        </Box>
                        <Box component='div'>
                            <Button varient='text' sx={{ height: 30, minWidth: 30, color: 'black', p: 0, borderRadius: 0 }} 
                            onClick={handleClose}>
                                <IoMdClose size={20}/>
                            </Button>
                        </Box>
                    </Box>
                    <Box component='div' p={3}>
                        <Typography component='p' fontWeight={600}>
                            Are you sure you want to delete this customer?
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 2, mt: 2, p: 2 }}>
                        <Button varient='text' sx={{ bgcolor: 'var(--main)', color: 'white', px: 2 }} 
                        onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button varient='text' sx={{ bgcolor: 'red', color: 'white', px: 2 }}>
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};