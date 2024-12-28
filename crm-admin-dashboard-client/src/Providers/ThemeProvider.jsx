import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material';
export default function AppTheme ({ children }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#009688',
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 700,
                md: 991,
                lg: 1150,
            },
        },
        typography: {
            fontFamily: 'space-grotesk',
        },
        button: {
            fontFamily: 'space-grotesk',
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontWeight: 400,
                        textTransform: 'capitalize',
                        letterSpacing: '1px',
                    }
                }
            }
        },
    });
    return (
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
    );  
};
AppTheme.propTypes = {
    children: PropTypes.node,
};