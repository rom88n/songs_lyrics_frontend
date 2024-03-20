import React from 'react';
import { IconButton, SwipeableDrawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const MobileDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <Box
      sx={{
        display: {
          xs: 'block',
          sm: 'none'
        }
      }}
    >
      <IconButton
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{
          p: 0,
          mr: '.5rem'
        }}
      >
        <MenuIcon fontSize="large"/>
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        sx={{
          '.MuiPaper-root': {
            width: '100%'
          },
        }}
      >
        <IconButton
          aria-label="close"
          sx={{
            position: 'fixed',
            top: 0,
            right: 0,
          }}
          onClick={toggleDrawer(false)}
        >
          <CloseIcon fontSize="large"/>
        </IconButton>

      </SwipeableDrawer>
    </Box>
  );
};

export default MobileDrawer;
