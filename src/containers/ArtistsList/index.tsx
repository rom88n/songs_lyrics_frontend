import React, { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { songsColors } from '@/config/theme/songs.colors';
import ArtistItem from '@/components/extra/ArtistItem';

const ArtistsList = memo(() => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: '3rem',
          mb: '1rem',
        }}
      >
        List of Artists
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {new Array(10).fill(0).map((_, index) => (
          <ArtistItem withAdditionalInfo key={index} color={songsColors[index]}/>
        ))}
      </Box>
    </Box>
  );
});

ArtistsList.displayName = 'ArtistsList';

export default ArtistsList;
