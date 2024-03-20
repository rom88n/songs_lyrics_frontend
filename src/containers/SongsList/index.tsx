import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SongsItem from '@/components/extra/SongsItem';
import { songsColors } from '@/config/theme/songs.colors';

const SongsList = memo(() => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: '3rem',
          mb: '1rem',
        }}
      >
        List of Songs
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {new Array(10).fill(0).map((_, index) => (
          <SongsItem withAdditionalInfo key={index} color={songsColors[index]}/>
        ))}
      </Box>
    </Box>
  );
});

SongsList.displayName = 'SongsList';

export default SongsList;
