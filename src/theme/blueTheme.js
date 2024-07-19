import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#1C408A',
    },
    secondary: {
      main: '#3E70C9',
    },
    error: {
      main: red.A400,
    },
  },
});
