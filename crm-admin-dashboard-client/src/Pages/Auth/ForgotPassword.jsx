import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { Box, Button, CircularProgress, FormControl, Typography } from '@mui/material';
import Error from '../../Components/Error/Error';
import { VscUnlock } from 'react-icons/vsc';
export default function ForgotPassword () {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        navigate('/verify-otp');
        console.log(data);
    };
    const loading = false;
    const error = '';
    return (
        <Box component='section' width='100%' minHeight='100vh' display='inline-flex' alignItems='center' py={{ xs: 5, sm: 0 }}>
            <Helmet>
                <title>CRM Admin Dashboard | Forgot Password</title>
            </Helmet>
            <Box component='div' width={{ xs: '100%', sm: 600 }} px={2} mx='auto'>
                <Box component='form' bgcolor='white' boxShadow='0 10px 20px #00000030, 0 6px 6px #0000003b' 
                autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                    <Box component='div' bgcolor='#b1d3db' display='flex' alignItems='center' gap={2} p={2}>
                        <VscUnlock fontSize='40px'/>
                        <Box component='div'>
                            <Typography component='h3' fontSize={{ xs: 'large', sm: 20 }}>
                                Forgot Password
                            </Typography>
                            <Typography component='p' fontSize={{ xs: 'small', sm: 15 }}>
                                Please enter your email to forgot password.
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
                        <FormControl sx={{ mt: 2 }} fullWidth>
                            <Button varient='text' type='submit' sx={{ height: 50, background: 'var(--main)', 
                            color: 'white', fontWeight: 500 }} disabled={loading}>
                                { loading ? <CircularProgress size={25} sx={{ color: 'white' }}/> : 'Next' }
                            </Button>
                        </FormControl>
                        { error && <Error message={error} sx={{ justifyContent: 'center' }}/> }
                        <Box component='div' textAlign='center' mt={2}>
                            <Typography component='p' fontSize={{ xs: 'small', sm: 14 }} fontWeight={600}>
                                Back to - <Link to='/login' className='form-link text-main'>Login</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );  
};