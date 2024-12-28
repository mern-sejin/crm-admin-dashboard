import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Draggable from 'react-draggable';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useCount } from '../../Hooks/useCount';
import { Box, LinearProgress, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { BarChart } from '@mui/x-charts';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import PageHeader from '../../Components/PageHeader/PageHeader';
import { PanelHeader } from '../../Components/PanelHeader/PanelHeader';
import Footer from '../../Components/Footer/Footer';
import { FaBan, FaMoneyBillAlt, FaRegDotCircle, FaTachometerAlt, FaUserTie } from 'react-icons/fa';
import { VscFiles } from 'react-icons/vsc';
import { HiUserPlus } from 'react-icons/hi2';
export default function Dashboard () {
    return (
        <Box component='section' className='page-layout'>
            <Helmet>
                <title>CRM Admin Dashboard | Dashboard</title>
            </Helmet>
            <PageHeader icon={<FaTachometerAlt/>} title='CRM Admin Dashboard' subTitle='Very detailed & featured admin.'/>
            <Box component='div' maxWidth='lg' p={3} px={{ xs: 2, sm: 3 }} mx='auto'>
                <Information/>
                <PanelsContainer/>
            </Box>
            <Footer/>
        </Box>
    );  
};
const Information = () => {
    const [clients] = useCount(11);
    const [admins] = useCount(4);
    const [expenses] = useCount(965);
    const [projects] = useCount(11);
    const informations = [
        { icon: <HiUserPlus size={40}/>, title: 'Active Client', number: clients },
        { icon: <FaUserTie size={40}/>, title: 'Active Admin', number: admins },
        { icon: <FaMoneyBillAlt size={40}/>, title: 'Total Expenses', number: expenses },
        { icon: <VscFiles size={40}/>, title: 'Running Projects', number: projects },
    ];
    return (
        <Grid component='div' container spacing={4}>
            { informations.map(info => 
                <Grid component='div' size={{ xs: 12, sm: 6, lg: 3 }} bgcolor='var(--main)' color='white' p={3} 
                display='flex' justifyContent='space-between' gap={2} borderRadius={1.5} 
                sx={{ transition: '0.5s', ':hover': { bgcolor: '#010a0f' } }} key={crypto.randomUUID()}>
                    <Box component='div'>
                        { info.icon }
                        <Typography component='h4' fontSize={18} fontWeight={500}>
                            { info.title }
                        </Typography>
                    </Box>
                    <Box component='div'>
                        <Typography component='h4' fontSize={20} fontWeight={700}>
                            { info.number }
                        </Typography>
                    </Box>
                </Grid>
            )}
        </Grid>
    );
};
const PanelsContainer = () => {
    return (
        <Grid container spacing={3} py={3} wrap='wrap'>
            <Grid size={{ xs: 12, sm: 6 }}>
                <UpcomingEvents/>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <RunningProjects/>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <PendingWorks/>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <WorksDeadlines/>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <WorksAnnouncements/>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <NoticeBoard/>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
                <YearEarningsAndExpenses/>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
                <WeeklyEarningsAndExpenses/>
            </Grid>
            <Grid size={{ xs: 12, lg: 7 }}>
                <GoogleMap/>
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
                <Calender/>
            </Grid>
        </Grid>
    );
};
const UpcomingEvents = () => {
    const fullscreen = useFullScreenHandle();
    const element = useRef(null);
    const [enableDrag, setEnableDrag] = useState(false);
    const events = [
        { date: 28, month: 'APR', title: 'Marketing Policy', address: 'Green Road - Dhaka, Bangladesh', work: 'Email' },
        { date: 2, month: 'APR', title: 'Accounting Policy', address: 'Kolkata, India', work: 'Skype' },
        { date: 17, month: 'MRC', title: 'Marketing Policy', address: 'Madrid, Spain', work: 'Phone' },
        { date: 3, month: 'JAN', title: 'Finance Policy', address: 'South Australia, Australia', work: 'Mobile' },
    ];
    return (
        <FullScreen handle={fullscreen}>
            <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                <Box component='div' bgcolor='white' boxShadow='0 3px 6px #00000029, 0 3px 6px #0000003b' 
                height={fullscreen.active && '100vh'} ref={element}>
                    <PanelHeader title='Upcoming Events' enableDrag={enableDrag} setEnableDrag={setEnableDrag} fullscreen={fullscreen}/>
                    <Box component='div' bgcolor='white' px={2} pt={1} pb={3}>
                        { events.map(event => 
                            <Box component='div' display='flex' alignItems='center' justifyContent='space-between' gap={1} 
                            py={1.5} borderBottom='1px solid gray' key={crypto.randomUUID()}>
                                <Box component='div' display='flex' alignItems='center' gap={1.5}>
                                    <Box component='div' height={40} width={40} textAlign='center' border='1px solid gray'>
                                        <Typography component='p' fontSize='small' height='50%'>
                                            { event.date }
                                        </Typography>
                                        <Typography component='p' bgcolor='var(--main)' color='white' fontSize='small' 
                                        height='50%'>
                                            { event.month }
                                        </Typography>
                                    </Box>
                                    <Box component='div'>
                                        <Typography component='h5' fontSize={15} fontWeight={600}>
                                            { event.title }
                                        </Typography>
                                        <Typography component='p' fontSize={14}>
                                            { event.address }
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box component='div' bgcolor='var(--main)' color='white' px={1} py={0.2} fontSize='small' 
                                borderRadius={0.5}>
                                    { event.work }
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Draggable>
        </FullScreen>
    );
};
const RunningProjects = () => {
    const fullscreen = useFullScreenHandle();
    const element = useRef(null);
    const [enableDrag, setEnableDrag] = useState(false);
    const projects = [
        { title: 'Database Configuration', progress: 30, status: 'failed' },
        { title: 'Design Tool', progress: 25, status: 'warning' },
        { title: 'Internet Configuration', progress: 100, status: 'success' },
        { title: 'Banner Completation', progress: 75, status: 'progressing' },
        { title: 'IT Solution', progress: 100, status: 'success' },
    ];
    return (
        <FullScreen handle={fullscreen}>
            <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                <Box component='div' bgcolor='white' boxShadow='0 3px 6px #00000029, 0 3px 6px #0000003b' 
                height={fullscreen.active && '100vh'} ref={element}>
                    <PanelHeader title='Running Projects' enableDrag={enableDrag} setEnableDrag={setEnableDrag} fullscreen={fullscreen}/>
                    <Box component='div' bgcolor='white' px={2} pt={1} pb={2}>
                        { projects.map(project => 
                            <Box component='div' display='flex' justifyContent='space-between' gap={2} 
                            py={1} key={crypto.randomUUID()}>
                                <Box component='div' width='100%' display='flex' gap={1.5}>
                                    <Typography component='span' mt={0.5}>
                                        <FaRegDotCircle fontSize={20}/>
                                    </Typography>
                                    <Box component='div' width='100%'>
                                        <Typography component='h5' fontSize={15} fontWeight={600}>
                                            { project.title }
                                        </Typography>
                                        <LinearProgress variant='determinate' value={project.progress} 
                                        sx={{ '.css-l16vtb-MuiLinearProgress-bar1': { bgcolor: 'var(--main)' }, 
                                        height: 6, bgcolor: 'lightgray', mt: 1.5 }}/>
                                    </Box>
                                </Box>
                                <Box component='div' bgcolor={
                                    project.status === 'success' ? 'green' : 
                                    project.status === 'failed' ? 'red' :
                                    project.status === 'progressing' ? 'var(--main)' : 
                                    project.status === 'warning' ? 'orange' : 'var(--main)'
                                } 
                                color='white' px={1} py={0.2} fontSize='small' textTransform='capitalize' position='absolute' 
                                right={20} borderRadius={0.5}>
                                    { project.status }
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Draggable>
        </FullScreen>
    );
};
const PendingWorks = () => {
    const fullscreen = useFullScreenHandle();
    const element = useRef(null);
    const [enableDrag, setEnableDrag] = useState(false);
    const works = [
        { title: 'Database Tools', date: 'Jul 25, 2017 for Alimul Alrazy', status: 'progressing' },
        { title: 'Cables', date: 'Jul 25, 2017 for Alimul', status: 'success' },
        { title: 'Technologycal Tools', date: 'Feb 25, 2017 for Alrazy', status: 'failed' },
        { title: 'Transaction', date: 'Apr 25, 2017 for Mahfuz', status: 'progressing' },
        { title: 'Training Tools', date: 'Jun 25, 2017 for Alrazy', status: 'success' },
    ];
    return (
        <FullScreen handle={fullscreen}>
            <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                <Box component='div' bgcolor='white' boxShadow='0 3px 6px #00000029, 0 3px 6px #0000003b' 
                height={fullscreen.active && '100vh'} ref={element}>
                    <PanelHeader title='Pending Works' enableDrag={enableDrag} setEnableDrag={setEnableDrag} fullscreen={fullscreen}/>
                    <Box component='div' bgcolor='white' px={2} pt={1} pb={2}>
                        { works.map(work => 
                            <Box component='div' display='flex' justifyContent='space-between' gap={2} 
                            py={0.5} key={crypto.randomUUID()}>
                                <Box component='div' width='100%' display='flex' gap={1.5}>
                                    <Typography component='span' mt={0.5}>
                                        <FaBan fontSize={20} color='red'/>
                                    </Typography>
                                    <Box component='div' width='100%'>
                                        <Typography component='h5' fontSize={15} fontWeight={600}>
                                            { work.title }
                                        </Typography>
                                        <Typography component='small' fontSize={12}>
                                            Jul 25, 2017 for Alimul Alrazy
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box component='div' bgcolor={
                                    work.status === 'success' ? 'green' : 
                                    work.status === 'failed' ? 'red' :
                                    work.status === 'progressing' ? 'orange' : 'var(--main)'
                                } 
                                color='white' px={1} py={0.2} fontSize='small' textTransform='capitalize' position='absolute' 
                                right={20} borderRadius={0.5}>
                                    { work.status }
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Draggable>
        </FullScreen>
    );
};
const WorksDeadlines = () => {
    const fullscreen = useFullScreenHandle();
    const element = useRef(null);
    const [enableDrag, setEnableDrag] = useState(false);
    const tasks = [
        { name: 'Alrezy', deadline: 'Feb 25, 2017' },
        { name: 'Jahir', deadline: 'Jun 05, 2017' },
        { name: 'Sayeed', deadline: 'Feb 05, 2017' },
        { name: 'Shipon', deadline: 'Jun 25, 2017' },
        { name: 'Rafi', deadline: 'Jul 15, 2017' },
    ];
    return (
        <FullScreen handle={fullscreen}>
            <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                <Box component='div' bgcolor='white' boxShadow='0 3px 6px #00000029, 0 3px 6px #0000003b' 
                height={fullscreen.active && '100vh'} ref={element}>
                    <PanelHeader title='Works Deadlines' enableDrag={enableDrag} setEnableDrag={setEnableDrag} fullscreen={fullscreen}/>
                    <Grid component='div' container spacing={2} bgcolor='white' p={2}>
                        <Grid component='div' size={6}>
                            <Typography component='h5' color='#374767' fontWeight={600}>
                                Task Name
                            </Typography>
                        </Grid>
                        <Grid component='div' size={6}>
                            <Typography component='h5' color='#374767' fontWeight={600}>
                                End Deadlines
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box component='div' bgcolor='white' px={2} pb={3.2}>
                        { tasks.map(task => 
                            <Grid component='div' container spacing={2} mb={2} key={crypto.randomUUID()}>
                                <Grid component='div' size={6}>
                                    <Typography component='p' color='#374767' fontWeight={600}>
                                        { task.name }
                                    </Typography>
                                </Grid>
                                <Grid component='div' size={6}>
                                    <Typography component='p' fontSize={14}>
                                        { task.deadline }
                                    </Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Box>
                </Box>
            </Draggable>
        </FullScreen>
    );
};
const WorksAnnouncements = () => {
    const fullscreen = useFullScreenHandle();
    const element = useRef(null);
    const [enableDrag, setEnableDrag] = useState(false);
    const announcements = [
        { type: 'Web Design', worker: 'Jr. Developer Alrazy' },
        { type: 'Networking', worker: 'Jr. Developer Jahir' },
        { type: 'Megento', worker: 'Jr. Developer Sayeed' },
        { type: 'Php, Laravel', worker: 'Jr. Developer Muhim' },
        { type: 'Html, Css', worker: 'Frontend Developer Rafi' },
    ];
    return (
        <FullScreen handle={fullscreen}>
            <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                <Box component='div' bgcolor='white' boxShadow='0 3px 6px #00000029, 0 3px 6px #0000003b' 
                height={fullscreen.active && '100vh'} ref={element}>
                    <PanelHeader title='Works Announcements' enableDrag={enableDrag} setEnableDrag={setEnableDrag} fullscreen={fullscreen}/>
                    <Grid component='div' container spacing={2} bgcolor='white' p={2}>
                        <Grid component='div' size={6}>
                            <Typography component='h5' color='#374767' fontWeight={600}>
                                Works Type
                            </Typography>
                        </Grid>
                        <Grid component='div' size={6}>
                            <Typography component='h5' color='#374767' fontWeight={600}>
                                Name Of Worker
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box component='div' bgcolor='white' px={2} pb={2}>
                        { announcements.map(announcement => 
                            <Grid component='div' container spacing={2} mb={2} key={crypto.randomUUID()}>
                                <Grid component='div' size={6}>
                                    <Typography component='p' fontSize={14}>
                                        { announcement.type }
                                    </Typography>
                                </Grid>
                                <Grid component='div' size={6}>
                                    <Typography component='p' fontSize={14}>
                                        { announcement.worker }
                                    </Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Box>
                </Box>
            </Draggable>
        </FullScreen>
    );
};
const NoticeBoard = () => {
    const fullscreen = useFullScreenHandle();
    const element = useRef(null);
    const [enableDrag, setEnableDrag] = useState(false);
    const notices = [
        { type: 'New Notice', publishedBy: 'Mr. Alrazy', date: '20th April 2017' },
        { type: 'Urgent Notice', publishedBy: 'Mr. Alrazy', date: '20th June 2017' },
        { type: 'Urgent Notice', publishedBy: 'Mr. Jahir', date: '26th June 2017' },
        { type: 'Urgent Notice', publishedBy: 'Mr. Leo', date: '3rd June 2017' },
        { type: 'Notice', publishedBy: 'Mr. Karim', date: '3rd July 2017' },
    ];
    return (
        <FullScreen handle={fullscreen}>
            <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                <Box component='div' bgcolor='white' boxShadow='0 3px 6px #00000029, 0 3px 6px #0000003b' 
                height={fullscreen.active && '100vh'} ref={element}>
                    <PanelHeader title='Notice Board' enableDrag={enableDrag} setEnableDrag={setEnableDrag} fullscreen={fullscreen}/>
                    <Grid component='div' container spacing={2} bgcolor='white' p={2}>
                        <Grid component='div' size={4}>
                            <Typography component='h5' color='#374767' fontWeight={600}>
                                Notice 
                            </Typography>
                        </Grid>
                        <Grid component='div' size={4}>
                            <Typography component='h5' color='#374767' fontWeight={600}>
                                Published By
                            </Typography>
                        </Grid>
                        <Grid component='div' size={4}>
                            <Typography component='h5' color='#374767' fontWeight={600}>
                                Date Added
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box component='div' bgcolor=' pwhite' px={2} pb={2}>
                        { notices.map(notice => 
                            <Grid component='div' container spacing={2} mb={2} key={crypto.randomUUID()}>
                                <Grid component='div' size={4}>
                                    <Typography component='p' fontSize={14}>
                                        { notice.type }
                                    </Typography>
                                </Grid>
                                <Grid component='div' size={4}>
                                    <Typography component='p' fontSize={14}>
                                        { notice.publishedBy }
                                    </Typography>
                                </Grid>
                                <Grid component='div' size={4}>
                                    <Typography component='p' fontSize={14}>
                                        { notice.date }
                                    </Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Box>
                </Box>
            </Draggable>
        </FullScreen>
    );
};
const YearEarningsAndExpenses = () => {
    const fullscreen = useFullScreenHandle();
    const element = useRef(null);
    const [enableDrag, setEnableDrag] = useState(false);
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 4000, 3000, 2000, 2780, 1890, 2390];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 2400, 1398, 9800, 3908, 4800, 3800];
    const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (
        <FullScreen handle={fullscreen}>
            <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                <Box component='div' bgcolor='white' boxShadow='0 3px 6px #00000029, 0 3px 6px #0000003b' 
                height={fullscreen.active && '100vh'} ref={element}>
                    <PanelHeader title='This Year Earnings & Expenses' enableDrag={enableDrag} setEnableDrag={setEnableDrag} 
                    fullscreen={fullscreen}/>
                    <Box component='div'>
                        <BarChart
                            sx={{ width: '100%' }}
                            height={fullscreen.active ? 550 : 350}
                            series={[
                              { data: pData, label: 'First Dataset', id: 'first' },
                              { data: uData, label: 'Second Dataset', id: 'second' },
                            ]}
                            xAxis={[{ data: xLabels, scaleType: 'band' }]}
                            yAxis={[
                                {
                                  valueFormatter: (value) => `${(value / 100).toLocaleString()}`,
                                }
                            ]}
                            skipAnimation={true}
                        />        
                    </Box>                  
                </Box>
            </Draggable>
        </FullScreen>
    );
};
const WeeklyEarningsAndExpenses = () => {
    const fullscreen = useFullScreenHandle();
    const element = useRef(null);
    const [enableDrag, setEnableDrag] = useState(false);
    const pData = [3800, 2400, 1398, 9800, 3908, 4800, 3800];
    const xLabels = ['Son', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <FullScreen handle={fullscreen}>
            <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                <Box component='div' bgcolor='white' boxShadow='0 3px 6px #00000029, 0 3px 6px #0000003b' 
                height={fullscreen.active && '100vh'} ref={element}>
                    <PanelHeader title='Weekly Earnings & Expenses' enableDrag={enableDrag} setEnableDrag={setEnableDrag} 
                    fullscreen={fullscreen}/>
                    <Box component='div'>
                        <BarChart
                            sx={{ width: '100%' }}
                            height={fullscreen.active ? 450 : 350}
                            series={[
                              { data: pData, label: 'First Dataset', id: 'first' },
                            ]}
                            xAxis={[{ data: xLabels, scaleType: 'band' }]}
                            yAxis={[
                                {
                                  valueFormatter: (value) => `${(value / 100).toLocaleString()}`,
                                }
                            ]}
                            skipAnimation={true}
                        />        
                    </Box>                  
                </Box>
            </Draggable>
        </FullScreen>
    );
};
const GoogleMap = () => {
    const fullscreen = useFullScreenHandle();
    const element = useRef(null);
    const [enableDrag, setEnableDrag] = useState(false);
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid';
    return (
        <FullScreen handle={fullscreen}>
            <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                <Box component='div' bgcolor='white' boxShadow='0 3px 6px #00000029, 0 3px 6px #0000003b' 
                height={fullscreen.active && '100vh'} ref={element}>
                    <PanelHeader title='Google Map' enableDrag={enableDrag} setEnableDrag={setEnableDrag} 
                    fullscreen={fullscreen}/>
                    <Box component='div' p={2}>
                        <Box component='iframe' src={map} height={fullscreen.active ? '80vh' : 300} width='100%' 
                        sx={{ border: 0 }} allowFullScreen/>    
                    </Box>        
                </Box>
            </Draggable>
        </FullScreen>
    );
};
const Calender = () => {
    const fullscreen = useFullScreenHandle();
    const element = useRef(null);
    const [enableDrag, setEnableDrag] = useState(false);
    return (
        <FullScreen handle={fullscreen}>
            <Draggable nodeRef={element} disabled={!enableDrag} position={{ x: 0, y: 0 }}>
                <Box component='div' bgcolor='white' boxShadow='0 3px 6px #00000029, 0 3px 6px #0000003b' 
                height={fullscreen.active && '100vh'} ref={element}>
                    <PanelHeader title='Google Map' enableDrag={enableDrag} setEnableDrag={setEnableDrag} 
                    fullscreen={fullscreen}/>
                    <Box component='div'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar sx={{ 
                                '.MuiDayCalendar-root .Mui-selected': { bgcolor: 'var(--main)' },
                                '.css-qtsu69-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)': { 
                                    border: '1px solid var(--main)',
                                    color: 'var(--main)',
                                    fontWeight: 'bold',
                                },
                                '.css-1vdehpx-MuiPickersYear-yearButton.Mui-selected': { bgcolor: 'var(--main)' }
                            }}/>
                        </LocalizationProvider>
                    </Box>        
                </Box>
            </Draggable>
        </FullScreen>
    );
};