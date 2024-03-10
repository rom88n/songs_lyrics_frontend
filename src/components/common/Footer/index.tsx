import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider, Link } from '@mui/material';

const Footer = () => {
  const config = [
    {
      label: 'About Site',
      href: '/'
    },
    {
      label: 'For Rights holders',
      href: '/'
    },
    {
      label: 'Copyright© 2024 My Site. All rights reserved',
    },
    {
      label: 'Privacy Policy',
      href: '/'
    },
    {
      label: 'Terms & Conditions',
      href: '/'
    },
  ];
  return (
    <Box
      component="footer"
      sx={{
        height: '1.5rem',
        backgroundColor: '#7487f2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: '0.7rem',
        borderTopRightRadius: '0.7rem',
      }}
    >
      {config.map((item, index) => (
        <Fragment key={item.label}>
          <Typography
            sx={{
              fontSize: '.7rem',
              color: '#fff',
            }}
            component={item.href ? Link : 'span'}
            href={item.href}
          >
            {item.label}
          </Typography>
          {index !== config.length - 1 && (
            <Divider
              orientation="vertical"
              sx={{
                height: '.8rem',
                m: 'auto .5rem',
                borderColor: '#fff',
              }}
            />
          )}
        </Fragment>
      ))}
    </Box>
  );
};

export default Footer;
