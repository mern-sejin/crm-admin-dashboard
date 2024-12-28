import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
export default function TanstackProvider ({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            { children }
        </QueryClientProvider>
    );  
};
TanstackProvider.propTypes = {
    children: PropTypes.node,
};