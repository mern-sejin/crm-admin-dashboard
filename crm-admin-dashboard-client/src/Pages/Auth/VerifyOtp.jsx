import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { Box, Button, FormControl, Typography } from '@mui/material';
import Error from '../../Components/Error/Error';
import { VscUnlock } from 'react-icons/vsc';
export default function VerifyOtp () {
    const { register, handleSubmit } = useForm();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < 5) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '') {
            if (index > 0) {
                document.getElementById(`otp-input-${index - 1}`).focus();
            }
        }
    };
    const onSubmit = (data) => {
        const otp = data.otp.join(''); 
        console.log(otp);
    };
    const loading = false;
    const error = '';
    return (
        <Box component='section' width='100%' minHeight='100vh' display='inline-flex' alignItems='center' py={{ xs: 5, sm: 0 }}>
            <Helmet>
                <title>CRM Admin Dashboard | Verify OTP</title>
            </Helmet>
            <Box component='div' width={{ xs: '100%', sm: 600 }} px={2} mx='auto'>
                <Box component='form' bgcolor='white' boxShadow='0 10px 20px #00000030, 0 6px 6px #0000003b' 
                autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                    <Box component='div' bgcolor='#b1d3db' display='flex' alignItems='center' gap={2} p={2}>
                        <VscUnlock fontSize='40px'/>
                        <Box component='div'>
                            <Typography component='h3' fontSize={{ xs: 'large', sm: 20 }}>
                                Verify OTP
                            </Typography>
                            <Typography component='p' fontSize={{ xs: 'small', sm: 15 }}>
                                Please enter your otp to verify.
                            </Typography>
                        </Box>
                    </Box>
                    <Box component='div' bgcolor='white' p={3}>
                        <FormControl fullWidth>
                            <Typography component='span' color='#374767' fontSize={{ xs: 'small', sm: 14 }} 
                            fontWeight={600} mb={1}>
                                OTP
                            </Typography>
                            <Box component='div' display='flex' alignItems='center' gap={1}>
                                { otp.map((digit, index) => 
                                    <input key={index} {...register(`otp[${index}]`)} id={`otp-input-${index}`} type='number' 
                                    value={digit} maxLength='1' onChange={(e) => handleChange(e, index)} 
                                    onKeyDown={(e) => handleKeyDown(e, index)}/>
                                )}
                            </Box>
                            <Typography component='small' color='#737373' fontSize={13} mt={0.5}>
                                Your OTP app
                            </Typography>
                        </FormControl>
                        <FormControl sx={{ mt: 2 }} fullWidth>
                            <Button varient='text' type='submit' sx={{ height: 50, background: 'var(--main)', 
                            color: 'white', fontWeight: 500 }} disabled={loading}>
                                Verify
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