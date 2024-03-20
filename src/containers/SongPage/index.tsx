'use client';
import React, { memo, ReactNode } from 'react';
import { tss } from 'tss-react';
import { Grid, Link, Paper } from '@mui/material';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MusicPlayer from '../../components/extra/MusicPlayer';
import BreadCrumbs from '../../components/extra/BreadCrumbs';
import AdditionalInfo from '../../components/extra/AdditionalInfo';
import SongExplore from '@/containers/SongPage/SongExplore';
import SocialSharing from '../../components/extra/SocialSharing';
import Chip from '@mui/material/Chip';
import Comments from '@/components/extra/Comments';
import ROUTES from '@/config/routes';
import Rating from '@/components/extra/Rating';

function createData(
  title1: string,
  value1: string | ReactNode,
  title2: string,
  value2: string | ReactNode,
) {
  return { title1, value1, title2, value2 };
}

const SongPage = memo(() => {
  const { classes } = useStyles();


  const rows = [
    createData('Tags', 'Tag1, Tag2, Tag3', 'Rating', <Rating type="song" id="1" defaultValue={2}/>),
    createData('Duration', '3 minutes 56 seconds', 'Song Publication Date', '2020'),
    createData('Album', <Chip label="My Album" variant="outlined" sx={{
      background: '#7487f2',
      border: 'none',
      textDecoration: 'none',
      color: '#fff',
      cursor: 'pointer'
    }} component={Link} href={`${ROUTES.albums}/my-album`}/>, 'YT View Count', '1 500 342'),
    createData('Album duration', '243', 'Count of words', '243'),
    createData('Album Publication Date', '2020', 'Artist', <Chip label="Kanye West" variant="outlined" sx={{
      background: '#7487f2',
      border: 'none',
      textDecoration: 'none',
      color: '#fff',
      cursor: 'pointer'
    }} component={Link} href={`${ROUTES.artists}/tyga`}/>),
    createData('About album', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique turpis facilisis purus sodales tempus. Curabitur gravida sed nibh sit amet varius. Proin id justo vitae nulla finibus consectetur et id lectus. Suspendisse potenti. Cras condimentum, ex vel auctor ultricies, erat erat tincidunt nisi, eu laoreet lectus leo vel turpis. Donec quis urna hendrerit, semper erat at, mollis tellus. Duis finibus enim sed risus condimentum, quis semper sem vulputate.', 'About Artist', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique turpis facilisis purus sodales tempus. Curabitur gravida sed nibh sit amet varius. Proin id justo vitae nulla finibus consectetur et id lectus. Suspendisse potenti. Cras condimentum, ex vel auctor ultricies, erat erat tincidunt nisi, eu laoreet lectus leo vel turpis. Donec quis urna hendrerit, semper erat at, mollis tellus. Duis finibus enim sed risus condimentum, quis semper sem vulputate.'),
  ];

  return (
    <Box component="article">
      <Box
        sx={{
          p: '.5rem',
          flexGrow: 1
        }}
        component="section"
      >
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: {
              xs: 'column',
              md: 'row',
            },

          }}
        >
          <Grid item xs={12} md={5}>
            <Image
              src="https://media.pitchfork.com/photos/5b1160a8d8c21c49d0ae4eef/1:1/w_800,h_800,c_limit/Kanye%20Ye.png"
              width={0}
              height={0}
              sizes="100vw"
              className={classes.image}
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={7}>
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
                Lyrics Tyga - Taste (feat. Offset)
              </Typography>
              <MusicPlayer
                mediaId="6CHs4x2uqcQ"
                duration={131}
                sx={{
                  mt: '1rem'
                }}
              />
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
                label: 'Songs',
                href: '/songs'
              },
              {
                label: 'Tyga',
                href: `${ROUTES.artists}/tyga`
              },
              {
                label: 'Taste (feat. Offset)',
                href: `${ROUTES.songs}/taste`
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
          Additional information about Songs
        </Typography>
        <AdditionalInfo rows={rows}/>
      </Box>
      <Box
        component="section"
        sx={{ m: '4rem 0 2rem' }}
      >
        <SongExplore/>
      </Box>
      <Box
        component="section"
        sx={{ mb: '2rem', width: '100%', display: 'flex' }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              md: '70%',
            },
            height: {
              xs: '22rem',
              md: '30rem',
            },
            margin: 'auto',
          }}
        >
          <iframe
            allowFullScreen
            loading="lazy"
            frameBorder="0"
            src="https://www.youtube.com/embed/438cAHlVbRw"
            width="100%"
            height="100%"
          />
        </Box>
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
    </Box>
  );
});

SongPage.displayName = 'SongPage';

const useStyles = tss.create({
  root: {
    borderRadius: '.5rem',
    padding: '.5rem',
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    objectFit: 'cover',
    height: '15rem',
    verticalAlign: 'middle',
    borderRadius: '8px',
    transition: 'all .5s',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  }
});

export default SongPage;
