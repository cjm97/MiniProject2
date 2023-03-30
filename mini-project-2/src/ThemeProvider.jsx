import { createTheme } from "@mui/material/styles";

//creates a new theme containing overrides for any defaults
//see https://mui.com/material-ui/customization/theming/#theme-configuration-variables for more
export const Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
      },
});
