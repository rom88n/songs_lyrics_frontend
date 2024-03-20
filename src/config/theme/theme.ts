'use client';
import { createTheme } from '@mui/material/styles';
import { roboto } from '@/config/theme/fonts';
import Link from '@/components/common/Link';

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    caption: {
      fontSize: '1.2rem',
      lineHeight: '1.7rem',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1rem',
          minWidth: '2rem',
        }
      }
    },
    MuiLink: {
      defaultProps: {
        component: Link
      }
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: Link
      }
    }
  },
  zIndex: {
    modal: 9999,
  },
});

export default theme;
