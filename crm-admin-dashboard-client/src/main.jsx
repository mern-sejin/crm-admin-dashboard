import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppTheme from './Providers/ThemeProvider.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import TanstackProvider from './Providers/TanstackProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router.jsx';
import SidebarProvider from './Providers/SidebarProvider.jsx';
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppTheme>
            <TanstackProvider>
                <AuthProvider>
                    <HelmetProvider>
                        <SidebarProvider>
                            <RouterProvider router={router}/>
                        </SidebarProvider>
                    </HelmetProvider>
                </AuthProvider>
            </TanstackProvider>
        </AppTheme>
    </StrictMode>
);