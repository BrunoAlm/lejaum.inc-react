import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5400',
      dark: '#ff4c29',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#1a1918',
    },
  },

  typography: {
    fontFamily: 'Georama',
    h1: {
      fontSize: 96,
      fontWeight: 900,
    },
    h2: {
      fontSize: 60,
      fontWeight: 700,
    },
    h3: {
      fontSize: 48,
    },
    h4: {
      fontSize: 34,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontSize: 20,
    },
    subtitle1: {
      fontSize: 16,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 14,
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 10,
    },
  },
});
