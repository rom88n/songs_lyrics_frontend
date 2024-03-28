'use client';
import React, { memo } from 'react';
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
import { useParams } from 'next/navigation';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { TArtist } from '@/config/types';
import QUERIES from '@/schema/queries';


const ArtistPage = memo(() => {
  const { classes } = useStyles();
  const { artist_slug: slug } = useParams();
  const { data } = useSuspenseQuery<{
    artist: TArtist,
  }>(QUERIES.GET_ARTIST_QUERY, {
    variables: { slug },
  });

  const { artist } = data;

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
              src={artist.picture}
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
              <Typography variant="h1" fontSize="2rem" fontWeight={400} mt="1.5rem" mb="1.5rem">
                Artist {artist.name} Lyrics
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center'
                }}
              >
                {artist.bio || <span style={{ display: 'block', height: '5rem' }}>No Bio</span>}
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
        <AdditionalInfo type="artist" data={data.artist}/>
      </Box>

      <Box
        component="section"
        sx={{ m: '4rem 0' }}
      >
        <ArtistExplore
          albums={artist.albums}
          songs={artist.songs}
        />
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
        <Comments
          type="artist"
          slug={artist.slug}
          initialComments={artist.comments}
        />
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
