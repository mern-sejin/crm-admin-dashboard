import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Controller, useForm } from 'react-hook-form';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Draggable from 'react-draggable';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Heading, Bold, Italic, Underline, FontColor, FontBackgroundColor, Link } from 'ckeditor5';
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Grid from '@mui/material/Grid2';
import PageHeader from '../../Components/PageHeader/PageHeader';
import { PanelHeader } from '../../Components/PanelHeader/PanelHeader';
import Error from '../../Components/Error/Error';
import Footer from '../../Components/Footer/Footer';
import { FaUsers } from 'react-icons/fa';
import { IoCloudUpload } from 'react-icons/io5';
export default function AddCustomer () {
    return (
        <Box component='section' className='page-layout'>
            <Helmet>
                <title>CRM Admin Dashboard | Add Customer</title>
            </Helmet>
            <PageHeader icon={<FaUsers/>} title='Add Customer' subTitle='Customer List'/>
            <CustomerForm/>
            <Footer/>
        </Box>
    );
};
const CustomerForm = () => {
    const { control, register, handleSubmit, setValue, setError, clearErrors, formState: { errors }} = useForm();
    const fullscreen = useFullScreenHandle();
    const [enableDrag, setEnableDrag] = useState();
    const element = useRef(null);
    const [base64Image, setBase64Image] = useState('');
    const [picName, setPicName] = useState('');
    const handleUploadPicture = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPicName(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setBase64Image(reader.result);
                clearErrors('picture'); 
            };
            reader.readAsDataURL(file); 
        }
    };
    const onSubmit = (data) => {
        const date = new Date(data.birthDate.$d).getUTCDate().toString().padStart(2, '0');
        const month = parseInt(new Date(data.birthDate.$d).getUTCMonth() + 1).toString().padStart(2, '0');
        const year = new Date(data.birthDate.$d).getUTCFullYear().toString();
        if (date > new Date().getUTCDate() || month > new Date().getUTCMonth() + 1 || year > new Date().getUTCFullYear()) {
            return setError('birthDate', {
                type: 'invalid',
            });
        }
        clearErrors('birthDate');
        const birthDate = `${date}/${month}/${year}`;
        data.birthDate = birthDate;
        if (base64Image) data.picture = base64Image;
        console.log(data);
    };
    return (
        <Box component='div' p={4} px={{ xs: 2, sm: 4 }}>
            <FullScreen handle={fullscreen}>
                <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                    <Box component='form' bgcolor='white' boxShadow='0 3px 6px #00000029, 0 3px 6px #0000003b' 
                    height={fullscreen.active && '100vh'} ref={element} onSubmit={handleSubmit(onSubmit)} 
                    autoComplete='off'>
                        <PanelHeader title='Add Customer' enableDrag={enableDrag} setEnableDrag={setEnableDrag} fullscreen={fullscreen}/>
                        <Grid container spacing={3} p={3}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        First Name
                                    </Typography>
                                    <Box component='input' type='text' name='firstName' id='firstName' placeholder='First Name' 
                                    {...register('firstName', { required: true })} sx={{ color: '#555555', fontSize: 14, 
                                    fontWeight: 500, p: 2, border: '1px solid #cccccc', borderRadius: '5px', outline: 0, ':focus': 
                                    { outline: '1px solid var(--main)' }}} maxLength={30}/>
                                    { errors?.firstName?.type === 'required' && <Error message='First Name is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Last Name
                                    </Typography>
                                    <Box component='input' type='text' name='lastName' id='lastName' placeholder='Last Name' 
                                    {...register('lastName', { required: true })} sx={{ color: '#555555', fontSize: 14, 
                                    fontWeight: 500, p: 2, border: '1px solid #cccccc', borderRadius: '5px', outline: 0, ':focus': 
                                    { outline: '1px solid var(--main)' }}} maxLength={30}/>
                                    { errors?.lastName?.type === 'required' && <Error message='Last Name is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Email Address
                                    </Typography>
                                    <Box component='input' type='text' {...register('email', { required: true, 
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} name='email' id='email' placeholder='Email Address' 
                                    sx={{ color: '#555555', fontSize: 14, fontWeight: 500, p: 2, border: '1px solid #cccccc', 
                                    borderRadius: '5px', outline: 0, ':focus': { outline: '1px solid var(--main)' }}}/>
                                    { errors?.email?.type === 'required' && <Error message='Email Address is required!'/> }
                                    { errors?.email?.type === 'pattern' && <Error message='Valid Email Address is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Mobile
                                    </Typography>
                                    <Box component='input' type='number' {...register('mobile', { required: true })} 
                                    name='mobile' id='mobile' placeholder='Mobile' 
                                    sx={{ color: '#555555', fontSize: 14, fontWeight: 500, p: 2, border: '1px solid #cccccc', 
                                    borderRadius: '5px', outline: 0, ':focus': { outline: '1px solid var(--main)' }}}/>
                                    { errors?.mobile?.type === 'required' && <Error message='Mobile is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Bank Details
                                    </Typography>
                                    <Box component='input' type='text' {...register('bankDetails', { required: true })} 
                                    name='bankDetails' id='bankDetails' placeholder='Bank Details' 
                                    sx={{ color: '#555555', fontSize: 14, fontWeight: 500, p: 2, border: '1px solid #cccccc', 
                                    borderRadius: '5px', outline: 0, ':focus': { outline: '1px solid var(--main)' }}}/>
                                    { errors?.bankDetails?.type === 'required' && <Error message='Bank Details is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Passport Details
                                    </Typography>
                                    <Box component='input' type='text' {...register('passportDetails', { required: true })} 
                                    name='passportDetails' id='passportDetails' placeholder='Passport Details' 
                                    sx={{ color: '#555555', fontSize: 14, fontWeight: 500, p: 2, border: '1px solid #cccccc', 
                                    borderRadius: '5px', outline: 0, ':focus': { outline: '1px solid var(--main)' }}}/>
                                    { errors?.passportDetails?.type === 'required' && <Error message='Passport Details is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Facebook Id
                                    </Typography>
                                    <Box component='input' type='text' {...register('facebookId', { required: true })} 
                                    name='facebookId' id='facebookId' placeholder='Facebook Id' 
                                    sx={{ color: '#555555', fontSize: 14, fontWeight: 500, p: 2, border: '1px solid #cccccc', 
                                    borderRadius: '5px', outline: 0, ':focus': { outline: '1px solid var(--main)' }}}/>
                                    { errors?.facebookId?.type === 'required' && <Error message='Facebook Id is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }} sx={{ 'input': { height: 52, py: 0 } }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600}>
                                        Date Of Birth
                                    </Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <Controller name='birthDate' control={control} rules={{ required: true }}
                                                render={({ field }) => (
                                                    <DatePicker {...field} label='Date Of Birth' value={field.value || null}
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
                                    { errors?.birthDate?.type === 'required' && <Error message='Date Of Birth is required!'/> }
                                    { errors?.birthDate?.type === 'invalid' && <Error message='Invalid Date Of Birth!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Gender
                                    </Typography>
                                    <RadioGroup row name='gender'>
                                        <FormControlLabel value='Male' control={
                                            <Radio size='small' sx={{ color: 'var(--main)', '&.Mui-checked': { color: 'var(--main)' }}}/>
                                        } label='Male' {...register('gender', { required: true })}/>
                                        <FormControlLabel value='Female' control={
                                            <Radio size='small' sx={{ color: 'var(--main)', '&.Mui-checked': { color: 'var(--main)' }}}/>
                                        } label='Female' {...register('gender', { required: true })}/>
                                    </RadioGroup>
                                    { errors?.gender?.type === 'required' && <Error message='Gender is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
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
                            <Grid size={12}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Address
                                    </Typography>
                                    <Controller 
                                        name='address'
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <>
                                            <CKEditor onChange={(event, editor) => {
                                                clearErrors('address');
                                                const data = editor.getData();
                                                if (data === '') setError('address', { type: 'required' }); 
                                                setValue('address', data);
                                            }} editor={ ClassicEditor } data={field.value} config={{
                                                licenseKey: 'GPL',
                                                plugins: [ 
                                                    Essentials, Paragraph, Heading, Bold, Italic, Underline, FontColor, 
                                                    FontBackgroundColor, Link 
                                                ],
                                                toolbar: [ 
                                                    'undo', 'redo', '|', 'heading', '|', 'bold', 'italic', '|', 'fontColor', 
                                                    'fontBackgroundColor', '|', 'underline', 'link' 
                                                ],
                                                placeholder: 'Address',
                                            }}/>
                                            </>
                                        )}
                                    />
                                    { errors?.address?.type === 'required' && <Error message='Address is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Upload Picture
                                    </Typography>
                                    <Button variant='text' component='label' color='black' sx={{ width: 'auto', justifyContent: 'normal', 
                                    gap: 2, p: 1, px: 2, border: '1px solid #cccccc' }}>
                                        <IoCloudUpload fontSize={48}/>
                                        <Typography component='span' fontSize={14} fontWeight={600}>
                                            { picName || 'Upload Picture' }
                                        </Typography>
                                        <Box component='input'  {...register('picture', { required: true })} type='file' name='picture' 
                                        id='picture'accept='image/*' hidden onChange={handleUploadPicture}/>
                                    </Button>
                                    { errors?.picture?.type === 'required' && <Error message='Picture is required!'/> }
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3 }}>
                            <Button varient='text' type='reset' color='error' sx={{ height: 50, px: 3, fontWeight: 500, 
                            border: '1px solid red' }}>
                                Reset
                            </Button>
                            <Button varient='text' type='submit' sx={{ height: 50, px: 3, background: 'var(--main)', 
                            color: 'white', fontWeight: 500 }}>
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Draggable>
            </FullScreen>
        </Box>  
    );
};