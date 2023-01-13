// source : https://mui.com/material-ui/customization/palette/#using-color-object
import * as React from 'react';
import { createTheme } from '@mui/material/styles';
// import { pink } from '@mui/material/colors';

const custom = createTheme({
    palette: {
        primary: {
          // Purple and green play nicely together.
          main: '#f0f',
        },
        secondary: {
          // This is green.A700 as hex.
          main: '#11cb5f',
        },
        maCouleurCustom: {
            main: 'purple',
        },
      },
});

export default custom