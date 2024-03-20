import React, { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { songsColors } from '@/config/theme/songs.colors';
import AlbumItem from '@/components/extra/AlbumItem';

const AlbumsList = memo(() => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: '3rem',
          mb: '1rem',
        }}
      >
        List of Albums
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {new Array(10).fill(0).map((_, index) => (
          <AlbumItem withAdditionalInfo key={index} color={songsColors[index]}/>
        ))}
      </Box>
    </Box>
  );
});

AlbumsList.displayName = 'AlbumsList';

export default AlbumsList;
