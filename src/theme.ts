import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "Lato, sans-serif",
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;