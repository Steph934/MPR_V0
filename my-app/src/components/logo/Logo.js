import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link } from '@mui/material';
//img
import logoMPR from './logo.png';
// ----------------------------------------------------------------------

const Logo = forwardRef(({ sx,  }) => {

  const logo = (
    <Box
      component="img"
      src={logoMPR}
      sx={{ 
        width: 75,
        height: 75,
        margin:'0 auto',
        borderRadius: '11px',
        cursor: 'pointer',
         ...sx 
        }}
    />
  );

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});


Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};


export default Logo;
