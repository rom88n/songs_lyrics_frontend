'use client';
import React, { memo } from 'react';
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
import { useParams } from 'next/navigation';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { TAlbum } from '@/config/types';
import QUERIES from '@/schema/queries';
import ROUTES from '@/config/routes';

const AlbumPage = memo(() => {
  const { classes } = useStyles();
  const { album_slug: slug } = useParams();
  const { data } = useSuspenseQuery<{
    album: TAlbum,
  }>(QUERIES.GET_ALBUM_QUERY, {
    variables: { slug },
  });

  const { album } = data;

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
              src={album.picture}
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
                Album {album.name} Lyrics
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center'
                }}
              >
                {album.description || <span style={{ display: 'block', height: '5rem' }}>No description</span>}
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
                label: 'Albums',
                href: ROUTES.albums
              },
              {
                label: album.name,
                href: `${ROUTES.albums}/${album.slug}`
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
          Additional information about Album Lyrics
        </Typography>
        <AdditionalInfo type="album" data={album}/>
      </Box>

      <Box
        component="section"
        sx={{ m: '4rem 0' }}
      >
        <AlbumsExplore
          songs={album.songs}
          artists={album.artists}
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
          type="album"
          slug={album.slug}
          initialComments={album.comments}
        />
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
