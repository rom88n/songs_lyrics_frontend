import React from 'react';
import ExploreArtists from '@/containers/AlbumPage/AlbumsExplore/ExploreArtists';
import ExploreSongs from '@/containers/AlbumPage/AlbumsExplore/ExploreSongs';
import { Paper } from '@mui/material';

const AlbumsExplore = () => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: '.5rem', borderRadius: '1.5rem' }}
    >
      <ExploreSongs/>
      <ExploreArtists/>
    </Paper>
  );
};

export default AlbumsExplore;
