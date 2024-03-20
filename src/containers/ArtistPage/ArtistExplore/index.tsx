import React, { memo } from 'react';
import ExploreAlbums from '@/containers/ArtistPage/ArtistExplore/ExploreAlbums';
import ExploreSongs from '@/containers/ArtistPage/ArtistExplore/ExploreSongs';
import ExploreEvents from '@/containers/ArtistPage/ArtistExplore/ExploreEvents';
import { Paper } from '@mui/material';

const ArtistExplore = memo(() => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: '.5rem', borderRadius: '1.5rem' }}
    >
      <ExploreAlbums/>
      <ExploreSongs/>
      <ExploreEvents/>
    </Paper>
  );
});

ArtistExplore.displayName = 'ArtistExplore';

export default ArtistExplore;
