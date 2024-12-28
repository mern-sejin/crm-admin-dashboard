import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Button, CircularProgress, FormControl, Typography } from '@mui/material';
import Error from '../../Components/Error/Error';
import { VscUnlock } from 'react-icons/vsc';
import { IoEye, IoEyeOff } from 'react-icons/io5';
export default function Login () {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const onSubmit = (data) => {
        console.log(data);
        navigate('/dashboard');
    };
    const loading = false;
    const error = '';
    return (
        <Box component='section' width='100%' minHeight='100vh' display='inline-flex' alignItems='center' py={{ xs: 5, sm: 0 }}>
            <Helmet>
                <title>CRM Admin Dashboard | Login</title>
            </Helmet>
            <Box component='div' width={{ xs: '100%', sm: 600 }} px={2} mx='auto'>
                <Box component='form' bgcolor='white' boxShadow='0 10px 20px #00000030, 0 6px 6px #0000003b' 
                autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                    <Box component='div' bgcolor='#b1d3db' display='flex' alignItems='center' gap={2} p={2}>
                        <VscUnlock fontSize='40px'/>
                        <Box component='div'>
                            <Typography component='h3' fontSize={{ xs: 'large', sm: 20 }}>
                                Login
                            </Typography>
                            <Typography component='p' fontSize={{ xs: 'small', sm: 15 }}>
                                Please enter your credentials to login.
                            </Typography>
                        </Box>
                    </Box>
                    <Box component='div' bgcolor='white' p={3}>
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
                        <Box component='div' mt={2}>
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
                            <Box component='div' display='flex' alignItems='center' justifyContent='space-between' mt={0.6}>
                                <Typography component='small' color='#737373' fontSize={13}>
                                    Your strong password
                                </Typography>
                                <Link to='/forgot-password'>
                                    <Typography component='small' color='var(--main)' fontSize={{ xs: 12, sm: 14 }} 
                                    borderBottom='1px solid var(--main)'>
                                        Forgot Password
                                    </Typography>
                                </Link>
                            </Box>
                            { errors?.password?.type === 'required' && <Error message='Password is required!'/> }
                            { errors?.password?.type === 'minLength' && <Error message='Password must contain at least 8 characters!'/> }
                        </Box>
                        <FormControl sx={{ mt: 2 }} fullWidth>
                            <Button varient='text' type='submit' sx={{ height: 50, background: 'var(--main)', 
                            color: 'white', fontWeight: 500 }} disabled={loading}>
                                { loading ? <CircularProgress size={25} sx={{ color: 'white' }}/> : 'Login' }
                            </Button>
                        </FormControl>
                        { error && <Error message={error} sx={{ justifyContent: 'center' }}/> }
                        <Box component='div' textAlign='center' mt={2}>
                            <Typography component='p' fontSize={{ xs: 'small', sm: 14 }} fontWeight={600}>
                                New User ? <Link to='/register' className='form-link text-main'>Register here</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );  
};