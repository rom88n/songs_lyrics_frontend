import React from 'react';
import ExploreArtists from '@/containers/AlbumPage/AlbumsExplore/ExploreArtists';
import Index from '@/containers/AlbumPage/AlbumsExplore/ExploreSongs';
import { Divider, Paper } from '@mui/material';

const AlbumsExplore = () => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: '.5rem', borderRadius: '1.5rem' }}
    >
      <Index/>
      <ExploreArtists/>
    </Paper>
  );
};

export default AlbumsExplore;
