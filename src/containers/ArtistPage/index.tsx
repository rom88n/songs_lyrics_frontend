'use client';
import React, { memo, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { tss } from 'tss-react';
import BreadCrumbs from '../../components/extra/BreadCrumbs';
import AdditionalInfo from '@/components/extra/AdditionalInfo';
import ArtistExplore from '@/containers/ArtistPage/ArtistExplore';
import SocialSharing from '../../components/extra/SocialSharing';
import ROUTES from '@/config/routes';
import Comments from '@/components/extra/Comments';

function createData(
  title1: string,
  value1: string | ReactNode,
  title2: string,
  value2: string | ReactNode,
) {
  return { title1, value1, title2, value2 };
}

const ArtistPage = memo(() => {
  const { classes } = useStyles();

  const rows = [
    createData('Artist name', 'Tyga', 'Artist Subscribers', '622532'),
    createData('Artist Songs', '34', 'Artist albums', '12'),
    createData('Artist Bio', '243', 'Songs at Album', '5'),
  ];

  return (
    <>
      <Box
        sx={{
          p: '.5rem',
        }}
        component="section"
      >
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Image
              src="https://media.pitchfork.com/photos/5b1160a8d8c21c49d0ae4eef/1:1/w_800,h_800,c_limit/Kanye%20Ye.png"
              width={0}
              height={0}
              sizes="100vw"
              className={classes.image}
              alt=""
            />
          </Grid>
          <Grid item xs={7}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <Typography variant="h1" fontSize="2rem" fontWeight={400} mt="1.5rem">
                Artist Name Lyrics
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="section"
        sx={{ m: '2rem 0' }}
      >
        <Paper variant="outlined" sx={{ p: '.5rem', borderRadius: '1.5rem' }}>
          <BreadCrumbs
            paths={[
              {
                label: 'Song Lyrics',
                href: ROUTES.songs
              },
              {
                label: 'Taste (feat. Offset)',
              },
            ]}
          />
        </Paper>
      </Box>
      <Box
        component="section"
        sx={{ m: '4rem 0' }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: '1.5rem',
            textAlign: 'center',
            mb: '1rem'
          }}
        >
          Additional information about Artist
        </Typography>
        <AdditionalInfo rows={rows}/>
      </Box>

      <Box
        component="section"
        sx={{ m: '4rem 0' }}
      >
        <ArtistExplore/>
      </Box>

      <Box
        component="section"
        sx={{ mb: '2rem' }}
      >
        <SocialSharing/>
      </Box>

      <Box
        component="section"
        sx={{ mb: '2rem' }}
      >
        <Comments/>
      </Box>
    </>
  );
});

ArtistPage.displayName = 'ArtistPage';

const useStyles = tss.create({
  image: {
    width: '100%',
    objectFit: 'cover',
    // maxHeight: '20rem',
    height: '15rem',
    verticalAlign: 'middle',
    borderRadius: '8px',
    transition: 'all .5s',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  }
});

export default ArtistPage;
