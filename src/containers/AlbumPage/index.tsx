'use client';
import React, { memo, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { tss } from 'tss-react';
import BreadCrumbs from '../../components/extra/BreadCrumbs';
import AdditionalInfo from '@/components/extra/AdditionalInfo';
import AlbumsExplore from '@/containers/AlbumPage/AlbumsExplore';
import SocialSharing from '../../components/extra/SocialSharing';
import Comments from '@/components/extra/Comments';

function createData(
  title1: string,
  value1: string | ReactNode,
  title2: string,
  value2: string | ReactNode,
) {
  return { title1, value1, title2, value2 };
}

const AlbumPage = memo(() => {
  const { classes } = useStyles();

  const rows = [
    createData('Album title', 'Tyga', 'Album Publication Date', '2020'),
    createData('Album Publication Date', '2020', 'Album YT view count', '2 442 252'),
    createData('Album duration', '243', 'Songs at Album', '5'),
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
                Album Title Lyrics
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique turpis facilisis purus sodales tempus. Curabitur gravida sed nibh sit amet varius. Proin id justo vitae nulla finibus consectetur et id lectus. Suspendisse potenti. Cras condimentum, ex vel auctor ultricies, erat erat tincidunt nisi, eu laoreet lectus leo vel turpis. Donec quis urna hendrerit, semper erat at, mollis tellus. Duis finibus enim sed risus condimentum, quis semper sem vulputate.
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
                label: 'Artists',
                href: '/artists'
              },
              {
                label: 'Albums',
                href: '/artist/1/Albums'
              },
              {
                label: 'Taste (feat. Offset)',
                href: '/songs/taste'
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
          Additional information about Album
        </Typography>
        <AdditionalInfo rows={rows}/>
      </Box>

      <Box
        component="section"
        sx={{ m: '4rem 0' }}
      >
        <AlbumsExplore/>
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

AlbumPage.displayName = 'AlbumPage';

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

export default AlbumPage;
