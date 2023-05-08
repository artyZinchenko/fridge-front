import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      color: '#232323',
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: '1rem',
      fontWeight: '600',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: '430',
      color: 'gray',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: '300',
    },
    h1: {
      fontSize: '2rem',
      '@media (max-width:20em)': {
        fontSize: '1.7rem',
      },
      fontWeight: '500',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '150',
    },
    h3: {
      fontSize: '1.5rem',
      '@media (max-width:20em)': {
        fontSize: '1.3rem',
      },
      fontWeight: '300',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#444444',
    },
  },
  palette: {
    primary: {
      main: '#00a878',
    },
    secondary: {
      main: '#d8f1a0',
    },
    background: {
      default: '#fafafa',
    },
    text: {
      primary: '#232323',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1em',
          textTransform: 'none',
          fontWeight: '600',
          borderRadius: '1.3em',
          padding: '0.1em 1.2em 0.2em 1.2em',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: 'red',
        },
      },
    },
  },
});

export default theme;
