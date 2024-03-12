import React, { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons';
import { usePathname } from 'next/navigation';

const SocialSharing = memo(() => {
  const pathname = usePathname()

  const config = [
    {
      label: 'facebook',
      href: 'https://www.facebook.com/sharer/sharer.php?u='
    },
    {
      label: 'google',
      href: ''
    },
    {
      label: 'twitter',
      href: 'https://twitter.com/intent/tweet?url='
    },
    {
      label: 'rss',
      href: ''
    },
    {
      label: 'email',
      href: 'mailto:?body='
    },
  ];
  return (
    <Box>
      <Typography variant="h2" fontSize="1.2rem" fontWeight={400}>
        Share with friends:
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '.2rem',
          mt: '.5rem',
          '> *': {
            height: '3rem',
            width: '3rem',
            p: '0 .5rem',
          }
        }}
      >

        {config.map(network => (
            <SocialIcon
              network={network.label}
              key={network.label}
              href={`${network.href}https://my.site.com${pathname}`}
              url={network.label}
              target="_blank"
              rel="nofollow"
              style={{
                width: '2rem',
                height: '2rem',
              }}
            />
        ))}
      </Box>
    </Box>
  );
});

SocialSharing.displayName = 'SocialSharing';

export default SocialSharing;
