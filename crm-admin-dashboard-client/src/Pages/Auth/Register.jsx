import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Button, CircularProgress, FormControl, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Error from '../../Components/Error/Error';
import { VscUnlock } from 'react-icons/vsc';
import { IoEye, IoEyeOff } from 'react-icons/io5';
export default function Register () {
    const navigate = useNavigate();
    const { register, handleSubmit, setError, clearErrors, formState: { errors }} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const loading = false;
    const error = '';
    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            return setError('confirmPassword', { 
                type: 'not-matched',
            });
        }
        clearErrors('confirmPassword');
        console.log(data);
        navigate('/dashboard');
    };
    return (
        <Box component='section' width='100%' minHeight='100vh' display='inline-flex' alignItems='center' py={{ xs: 5, sm: 0 }}>
            <Helmet>
                <title>CRM Admin Dashboard | Register</title>
            </Helmet>
            <Box component='div' width={{ xs: '100%', sm: 800 }} px={2} mx='auto'>
                <Box component='form' bgcolor='white' boxShadow='0 10px 20px #00000030, 0 6px 6px #0000003b' 
                autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                    <Box component='div' bgcolor='#b1d3db' display='flex' alignItems='center' gap={2} p={2}>
                        <VscUnlock fontSize='40px'/>
                        <Box component='div'>
                            <Typography component='h3' fontSize={{ xs: 'large', sm: 20 }}>
                                Register
                            </Typography>
                            <Typography component='p' fontSize={{ xs: 'small', sm: 15 }}>
                                Please enter your data to register.
                            </Typography>
                        </Box>
                    </Box>
                    <Box component='div' bgcolor='white' p={3}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Name
                                    </Typography>
                                    <Box component='input' type='text' name='name' id='name' placeholder='Name' 
                                    {...register('name', { required: true })} sx={{ color: '#555555', fontSize: 14, 
                                    fontWeight: 500, p: 2, border: '1px solid #cccccc', borderRadius: '5px', outline: 0, ':focus': 
                                    { outline: '1px solid var(--main)' }}} maxLength={30}/>
                                    <Typography component='small' color='#737373' fontSize={13} mt={0.5}>
                                        Your name to app
                                    </Typography>
                                    { errors?.name?.type === 'required' && <Error message='Name is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                    fontWeight={600} mb={1}>
                                        Email Address
                                    </Typography>
                                    <Box component='input' type='email' name='email' id='email' placeholder='Email Address' 
                                    {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} 
                                    sx={{ color: '#555555', fontSize: 14, fontWeight: 500, p: 2, border: '1px solid #cccccc', 
                                    borderRadius: '5px', outline: 0, ':focus': { outline: '1px solid var(--main)' }}}/>
                                    <Typography component='small' color='#737373' fontSize={13} mt={0.5}>
                                        Your email address to app
                                    </Typography>
                                    { errors?.email?.type === 'required' && <Error message='Email Address is required!'/> }
                                    { errors?.email?.type === 'pattern' && <Error message='Valid Email Address is required!'/> }
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box component='div'>
                                    <FormControl fullWidth>
                                        <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                        fontWeight={600} mb={1}>
                                            Password
                                        </Typography>
                                        <Box component='input' type={!showPassword ? 'password' : 'text'} name='password' id='password' 
                                        placeholder='Password' {...register('password', { required: true, minLength: 8 })} maxLength={30}
                                        sx={{ color: '#555555', fontSize: 14, fontWeight: 500, p: 2, border: '1px solid #cccccc', 
                                        borderRadius: '5px', outline: 0, ':focus': { outline: '1px solid var(--main)' }}}/>
                                        <Button variant='text' sx={{ height: 40, minWidth: 40, color: 'gray', fontSize: 'x-large', 
                                        borderRadius: '50%', position: 'absolute', right: 10, bottom: 5 }} 
                                        onClick={() => setShowPassword(!showPassword)}> 
                                            { showPassword ? <IoEye/> : <IoEyeOff/> }
                                        </Button>
                                    </FormControl>
                                    <Typography component='small' color='#737373' fontSize={13} mt={0.5}>
                                        Your strong password
                                    </Typography>
                                    { errors?.password?.type === 'required' && <Error message='Password is required!'/> }
                                    { errors?.password?.type === 'minLength' && <Error message='Password must contain at least 8 characters!'/> }
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box component='div'>
                                    <FormControl fullWidth>
                                        <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                                        fontWeight={600} mb={1}>
                                            Confirm Password
                                        </Typography>
                                        <Box component='input' type={!showConfirmPassword ? 'password' : 'text'} name='confirm-password' 
                                        id='confirm-password' placeholder='Confirm Password' {...register('confirmPassword', { required: true, 
                                        minLength: 8 })} maxLength={30} sx={{ color: '#555555', fontSize: 14, fontWeight: 500, p: 2, 
                                        border: '1px solid #cccccc', borderRadius: '5px', outline: 0, ':focus': 
                                        { outline: '1px solid var(--main)' }}}/>
                                        <Button variant='text' sx={{ height: 40, minWidth: 40, color: 'gray', fontSize: 'x-large', 
                                        borderRadius: '50%', position: 'absolute', right: 10, bottom: 5 }} 
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}> 
                                            { showConfirmPassword ? <IoEye/> : <IoEyeOff/> }
                                        </Button>
                                    </FormControl>
                                    <Typography component='small' color='#737373' fontSize={13} mt={0.5}>
                                        Confirm your password
                                    </Typography>
                                    { errors?.confirmPassword?.type === 'required' && <Error message='Retype Password is required!'/> }
                                    { errors?.confirmPassword?.type === 'minLength' && <Error message='Retype Password must contain at least 8 characters!'/> }
                                    { errors?.confirmPassword?.type === 'not-matched' && <Error message='Passwords did not match!'/> }
                                </Box>
                            </Grid>
                        </Grid>
                        <FormControl sx={{ mt: 2 }} fullWidth>
                            <Button varient='text' type='submit' sx={{ height: 50, background: 'var(--main)', 
                            color: 'white', fontWeight: 500 }} disabled={loading}>
                                { loading ? <CircularProgress size={25} sx={{ color: 'white' }}/> : 'Register' }
                            </Button>
                        </FormControl>
                        { error && <Error message={error} sx={{ justifyContent: 'center' }}/> }
                        <Box component='div' textAlign='center' mt={2}>
                            <Typography component='p' fontSize={{ xs: 'small', sm: 14 }} fontWeight={600}>
                                Already have an account ? <Link to='/login' className='form-link text-main'>Login here</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );  
};