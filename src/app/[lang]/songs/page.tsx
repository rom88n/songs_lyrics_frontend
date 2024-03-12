import Box from '@mui/material/Box';
import * as React from 'react';
import SongsList from '@/components/extra/SongsList';
import Typography from '@mui/material/Typography';

export default function Songs() {
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
      <SongsList/>
    </Box>
  );
}
