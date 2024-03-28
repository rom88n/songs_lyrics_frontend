import React, { FC, memo } from 'react';
import ExploreArtists from '@/containers/AlbumPage/AlbumsExplore/ExploreArtists';
import ExploreSongs from '@/containers/AlbumPage/AlbumsExplore/ExploreSongs';
import { Paper } from '@mui/material';
import { TArtist, TSong } from '@/config/types';

type TAlbumsExploreProps = {
  songs: TSong[];
  artists: TArtist[];
}

const AlbumsExplore: FC<TAlbumsExploreProps> = memo(({ songs, artists }) => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: '.5rem', borderRadius: '1.5rem' }}
    >
      <ExploreSongs songs={songs}/>
      <ExploreArtists artists={artists}/>
    </Paper>
  );
});

AlbumsExplore.displayName = 'AlbumsExplore';

export default AlbumsExplore;
