import React, { FC, memo } from 'react';
import ExploreAlbums from '@/containers/ArtistPage/ArtistExplore/ExploreAlbums';
import ExploreSongs from '@/containers/ArtistPage/ArtistExplore/ExploreSongs';
import ExploreEvents from '@/containers/ArtistPage/ArtistExplore/ExploreEvents';
import { Paper } from '@mui/material';
import { TAlbum, TSong } from '@/config/types';

const ArtistExplore: FC<{ songs: TSong[], albums: TAlbum[] }> = memo(({ songs, albums }) => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: '.5rem', borderRadius: '1.5rem' }}
    >
      <ExploreAlbums albums={albums}/>
      <ExploreSongs songs={songs}/>
      <ExploreEvents artistName={songs[0]?.artists?.[0]?.name}/>
    </Paper>
  );
});

ArtistExplore.displayName = 'ArtistExplore';

export default ArtistExplore;
