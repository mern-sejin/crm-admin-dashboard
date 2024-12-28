import { createBrowserRouter } from 'react-router-dom';
import Animation from '../Components/Animation/Animation';
import App from '../App';
import Root from '../Pages/Root/Root';
import Dashboard from '../Pages/Dashboard/Dashboard';
import AddCustomer from '../Pages/Customers/AddCustomer';
import CustomerList from '../Pages/Customers/CustomerList';
import Group from '../Pages/Customers/Group';
import RunningTask from '../Pages/Task/RunningTask';
import ArchiveTask from '../Pages/Task/ArchiveTask';
import Register from '../Pages/Auth/Register';
import Login from '../Pages/Auth/Login';
import ForgotPassword from '../Pages/Auth/ForgotPassword';
import VerifyOtp from '../Pages/Auth/VerifyOtp';
import NotFound from '../Pages/NotFound/NotFound';
export const router = createBrowserRouter([
    { 
        path: '/',
        element: <Animation><App/></Animation>,
        children: [
            {
                path: '/',
                element: <Root/>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard/>,
                    },
                    {
                        path: '/add-customer',
                        element: <AddCustomer/>,
                    },
                    {
                        path: '/customer-list',
                        element: <CustomerList/>,
                    },
                    {
                        path: '/group',
                        element: <Group/>,
                    },
                    {
                        path: '/running-task',
                        element: <RunningTask/>,
                    },
                    {
                        path: '/archive-task',
                        element: <ArchiveTask/>,
                    },
                    {
                        path: '*',
                        element: <NotFound/>,
                    },
                ],
            },
            {
                path: '/register',
                element: <Register/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword/>,
            },
            {
                path: '/verify-otp',
                element: <VerifyOtp/>,
            },
        ],
    }
]);