import PropTypes from 'prop-types';
import { useState } from 'react';
import { SidebarContext } from '../Hooks/useSidebar';
export default function SidebarProvider ({ children }) {
    const [open, setOpen] = useState(true);
    const toggleSidebar = () => setOpen(!open);
    return (
        <SidebarContext.Provider value={{ open, toggleSidebar }}>
            { children }
        </SidebarContext.Provider>
    );  
};
SidebarProvider.propTypes = {
    children: PropTypes.node,
};