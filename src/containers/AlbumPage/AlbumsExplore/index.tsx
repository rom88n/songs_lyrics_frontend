import React, { memo } from 'react';
import ExploreArtists from '@/containers/AlbumPage/AlbumsExplore/ExploreArtists';
import ExploreSongs from '@/containers/AlbumPage/AlbumsExplore/ExploreSongs';
import { Paper } from '@mui/material';

const AlbumsExplore = memo(() => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: '.5rem', borderRadius: '1.5rem' }}
    >
      <ExploreSongs/>
      <ExploreArtists/>
    </Paper>
  );
});

AlbumsExplore.displayName = 'AlbumsExplore';

export default AlbumsExplore;
