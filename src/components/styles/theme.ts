import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.9em',
          textTransform: 'none',
          fontWeight: 'bold',
          borderRadius: '1.3em',
          padding: '0.3em 0.7em',
          margin: '0.3em 0.7em',
        },
      },
    },
  },
});

export default theme;
