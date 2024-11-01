import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#6200ea',
        light: '#9d46ff',
        dark: '#0a00b6',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#03dac6',
        light: '#66fff9',
        dark: '#00a896',
        contrastText: '#000000',
      },
    },
  });

  export default theme;