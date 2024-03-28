'use client';
import React, { memo } from 'react';
import { tss } from 'tss-react';
import { Grid, Paper } from '@mui/material';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MusicPlayer from '../../components/extra/MusicPlayer';
import BreadCrumbs from '../../components/extra/BreadCrumbs';
import AdditionalInfo from '../../components/extra/AdditionalInfo';
import SongExplore from '@/containers/SongPage/SongExplore';
import SocialSharing from '../../components/extra/SocialSharing';
import Comments from '@/components/extra/Comments';
import ROUTES from '@/config/routes';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { TSong } from '@/config/types';
import QUERIES from '@/schema/queries';
import { useParams } from 'next/navigation';
import { API_URL } from '@/config/apollo';

const SongPage = memo(() => {
  const { classes } = useStyles();
  const { song_slug: slug } = useParams();
  const { data } = useSuspenseQuery<{
    song: TSong,
    relatedSongs: TSong[]
  }>(QUERIES.GET_SONG_QUERY, {
    variables: { slug },
  });

  const { song, relatedSongs } = data;

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
              src={`${API_URL}/songs/image/${song.slug}/`}
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
                {song.title} Lyrics
              </Typography>
              <MusicPlayer
                mediaId={song.id}
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
                href: ROUTES.songs,
              },
              // ...song.artists.map(artist => ({ label: artist.name, href:`${ROUTES.artists}/${artist.slug}` })),
              {
                label: song.name,
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
        <AdditionalInfo type="song" data={song}/>
      </Box>
      <Box
        component="section"
        sx={{ m: '4rem 0 2rem' }}
      >
        <SongExplore
          song={song}
          relatedSongs={relatedSongs}
        />
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
            src={`https://www.youtube.com/embed/${song.id}`}
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
        <Comments
          type="song"
          slug={song.slug}
          initialComments={song.comments}
        />
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
