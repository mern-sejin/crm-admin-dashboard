import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Controller, useForm } from 'react-hook-form';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Draggable from 'react-draggable';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Heading, Bold, Italic, Underline, FontColor, FontBackgroundColor } from 'ckeditor5';
import { Box, Button, Fade, FormControl, FormControlLabel, Modal, Paper, Popper, Radio, RadioGroup, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useDropdown } from '../../Hooks/useDropdown';
import PageHeader from '../../Components/PageHeader/PageHeader';
import { PanelHeader } from '../../Components/PanelHeader/PanelHeader';
import Error from '../../Components/Error/Error';
import Footer from '../../Components/Footer/Footer';
import { FaPen, FaRegFilePdf } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import { BsFiletypePng } from 'react-icons/bs';
import { LuChartColumnIncreasing } from 'react-icons/lu';
import { GrUpdate } from 'react-icons/gr';
export default function ArchiveTask () {
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
                <title>CRM Admin Dashboard | Archive Tasks</title>
            </Helmet>
            <PageHeader icon={<LuChartColumnIncreasing/>} title='Archive Tasks' subTitle='Archive Tasks details'/>
            <Box component='div' p={4} px={{ xs: 2, sm: 4 }} pb={10}>
                <FullScreen handle={fullscreen}>
                    <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                        <Box component='div' height={fullscreen.active && '100vh'} bgcolor='white' ref={element}
                        boxShadow='0 3px 6px #00000029,0 3px 6px #0000003b'>
                            <PanelHeader title='Tasks details' enableDrag={enableDrag} setEnableDrag={setEnableDrag} 
                            fullscreen={fullscreen}/>
                                <Box component='div' textAlign='right' px={3} pt={1}>
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
                            <TaskContainer/>
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
const TaskContainer = () => {
    const listHead = [
        { id: crypto.randomUUID(), title: 'Task Name', size: { xs: 4, sm: 2 }},
        { id: crypto.randomUUID(), title: 'Due Date', size: { xs: 4, sm: 2 }},
        { id: crypto.randomUUID(), title: 'Description', display: { xs: 'none', sm: 'inherit' } },
        { id: crypto.randomUUID(), title: 'Assign To', display: { xs: 'none', sm: 'inherit' } },
        { id: crypto.randomUUID(), title: 'Status', display: { xs: 'none', sm: 'inherit' } },
        { id: crypto.randomUUID(), title: 'Action', size: 'auto', flex: 1 },
    ];
    const tasks = [
        { 
            id: crypto.randomUUID(),
            name: 'Networking', 
            date: '01/05/2017',
            description: 'Lan, Wi-Fi config',
            assign: 'Smith',
            status: 'submit',
        },
        { 
            id: crypto.randomUUID(),
            name: 'Accounts', 
            date: '01/05/2017',
            description: 'Financial Supports',
            assign: 'Smith',
            status: 'warning',
        },
        { 
            id: crypto.randomUUID(),
            name: 'Accounts', 
            date: '01/05/2017',
            description: 'Financial Supports',
            assign: 'Smith',
            status: 'failed',
        },
        { 
            id: crypto.randomUUID(),
            name: 'Accounts', 
            date: '01/05/2017',
            description: 'Financial Supports',
            assign: 'Smith',
            status: '',
        },
    ];
    return (
        <Box component='div' p={2}>
            <Box component='div'>
                <Grid component='div' container bgcolor='#d9edf7' color='#374767' border='1px solid lightgray'>
                    { listHead.map(head => 
                        <Grid size={head.size || 2} borderRight='1px solid lightgray' display={head.display || 'inherit'} 
                        p={1} px={2} key={head.id} flex={head.flex}>
                            <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                { head.title }
                            </Typography>
                        </Grid>
                    )}
                </Grid>
                <Box component='div' maxHeight={410} sx={{ overflowY: 'auto', '::-webkit-scrollbar': { width: 2 }}}>
                    { tasks.map(task => 
                        <Grid component='div' container bgcolor='white' border='1px solid lightgray' key={task.id}>
                            <Grid size={{ xs: 4, sm: 2 }} display='flex' alignItems='center' p={1} px={2} borderRight='1px solid lightgray'>
                                <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                    { task.name }
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 4, sm: 2 }} display='flex' alignItems='center' p={1} px={2} borderRight='1px solid lightgray'>
                                <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                    { task.date }
                                </Typography>
                            </Grid>
                            <Grid size={2} display={{ xs: 'none', sm: 'flex' }} alignItems='center' p={1} px={2} borderRight='1px solid lightgray'>
                                <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                    { task.description }
                                </Typography>
                            </Grid>
                            <Grid size={2} display={{ xs: 'none', sm: 'flex' }} alignItems='center' p={1} px={2} 
                            borderRight='1px solid lightgray'>
                                <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                    { task.assign }
                                </Typography>
                            </Grid>
                            <Grid size={2} display={{ xs: 'none', sm: 'flex' }} alignItems='center' p={1} px={2} borderRight='1px solid lightgray'>
                                <Typography component='span' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                                    { task.status === 'submit' ? 
                                        <Typography component='span' color='var(--main)' px={1} fontWeight={600}>Submit</Typography> :
                                      task.status === 'warning' ?
                                        <Typography component='span' color='orange' px={1} fontWeight={600}>Warning</Typography> :
                                        <Typography component='span' color='red' px={1} fontWeight={600}>Failed</Typography> 
                                    }
                                </Typography>
                            </Grid>
                            <Grid size='auto' display='flex' alignItems='center' gap={1} p={1} borderRight='1px solid lightgray' 
                            whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis' flex={1}>
                                <UpdateTask/>
                                <DeleteTask/>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Box>
        </Box>
    );
};
const UpdateTask = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit, control, setValue, setError, clearErrors, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        const dateSelected = new Date(data.date.$d).getUTCDate().toString().padStart(2, '0');
        const month = parseInt(new Date(data.date.$d).getUTCMonth() + 1).toString().padStart(2, '0');
        const year = new Date(data.date.$d).getUTCFullYear().toString();
        if (dateSelected > new Date().getUTCDate() || month > new Date().getUTCMonth() + 1 || year > new Date().getUTCFullYear()) {
            return setError('date', {
                type: 'invalid',
            });
        }
        clearErrors('date');
        const newDate = `${dateSelected}/${month}/${year}`;
        data.date = newDate;
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
                            <GrUpdate size={20}/>
                            <Typography component='span' fontSize='large' fontWeight={600}>Update Task</Typography>
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
                                        Task Name
                                    </Typography>
                                    <Box component='input' type='text' name='name' id='name' placeholder='Task Name' 
                                    {...register('name', { required: true })} sx={{ color: '#555555', fontSize: 14, 
                                    fontWeight: 500, p: 2, border: '1px solid #cccccc', borderRadius: '5px', outline: 0, ':focus': 
                                    { outline: '1px solid var(--main)' }}} maxLength={30}/>
                                    { errors?.name?.type === 'required' && <Error message='Task Name is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid component='div' size={{ xs: 12, sm: 6 }}>
                            <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600}>
                                        Due Date
                                    </Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <Controller name='date' control={control} rules={{ required: true }}
                                                render={({ field }) => (
                                                    <DatePicker {...field} label='Due Date' value={field.value || null}
                                                        onChange={(newValue) => field.onChange(newValue)}
                                                        sx={{
                                                            width: '100%',
                                                            'input': { height: 50, py: 0 },
                                                            'label': { fontSize: { xs: 'small', sm: 14 } },
                                                            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                                                border: '1px solid #cccccc',
                                                            },
                                                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                                                border: '1px solid #cccccc',
                                                            },
                                                            '& .css-lsiij9-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                                                                color: 'var(--main)',
                                                            },
                                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                border: '1px solid var(--main)',
                                                            },
                                                        }}
                                                    />
                                                )}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    { errors?.date?.type === 'required' && <Error message='Due Date is required!'/> }
                                    { errors?.date?.type === 'invalid' && <Error message='Invalid Due Date!'/> }
                                </FormControl>
                            </Grid>
                            <Grid component='div' size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Assign To
                                    </Typography>
                                    <Box component='input' type='text' name='assign' id='assign' placeholder='Assign To' 
                                    {...register('assign', { required: true })} sx={{ color: '#555555', fontSize: 14, 
                                    fontWeight: 500, p: 2, border: '1px solid #cccccc', borderRadius: '5px', outline: 0, ':focus': 
                                    { outline: '1px solid var(--main)' }}} maxLength={30}/>
                                    { errors?.assign?.type === 'required' && <Error message='Assign To is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid component='div' size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Status
                                    </Typography>
                                    <RadioGroup row name='status'>
                                        <FormControlLabel value='Submit' control={
                                            <Radio size='small' sx={{ color: 'var(--main)', '&.Mui-checked': { color: 'var(--main)' }}}/>
                                        } label='Submit' {...register('status', { required: true })}/>
                                        <FormControlLabel value='Warning' control={
                                            <Radio size='small' sx={{ color: 'var(--main)', '&.Mui-checked': { color: 'var(--main)' }}}/>
                                        } label='Warning' {...register('status', { required: true })}/>
                                        <FormControlLabel value='Failed' control={
                                            <Radio size='small' sx={{ color: 'var(--main)', '&.Mui-checked': { color: 'var(--main)' }}}/>
                                        } label='Failed' {...register('status', { required: true })}/>
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
                                Update
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};
const DeleteTask = () => {
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
                            <Typography component='span' fontSize='large' fontWeight={600}>Delete Task</Typography>
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
                            Are you sure you want to delete this task?
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