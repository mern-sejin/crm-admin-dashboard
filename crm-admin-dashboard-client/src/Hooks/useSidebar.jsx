import { createContext, useContext } from 'react';
export const SidebarContext = createContext(null);
export const useSidebar = () => {
    return useContext(SidebarContext);
};