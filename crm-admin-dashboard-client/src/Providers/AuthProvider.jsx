import PropTypes from 'prop-types';
// import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Hooks/useAuth';
import { useAxios } from '../Hooks/useAxios';
export default function AuthProvider ({ children }) {
    const { axiosPublic } = useAxios();
    // Current User
    // const { data: user, isLoading } = useQuery({
    //     queryKey: ['user'],
    //     queryFn: async () => {
    //         const response = await axiosPublic.get('/user');
    //         const data = await response.data;
    //         return data;
    //     },
    // });
    // Register User
    const register = (data) => {
        return axiosPublic.post('/registration', data);
    };
    const login = (data) => {
        return axiosPublic.post('/login', data);
    };
    const authInfo = {
        // user,
        // isLoading,
        register,
        login,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );  
};
AuthProvider.propTypes = {
    children: PropTypes.node,
};