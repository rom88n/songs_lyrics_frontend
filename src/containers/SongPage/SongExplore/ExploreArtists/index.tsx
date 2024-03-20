import React, { memo } from 'react';
import { artistsColors } from '@/config/theme/songs.colors';
import Box from '@mui/material/Box';
import ArtistItem from '@/components/extra/ArtistItem';

const ExploreArtists = memo(() => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        p: '.5rem 1rem'
      }}
    >
      {new Array(3).fill(0).map((_, index) => (
        <ArtistItem key={index} color={artistsColors[index]}/>
      ))}
    </Box>
  );
});

ExploreArtists.displayName = 'ArtistSongs';

export default ExploreArtists;
