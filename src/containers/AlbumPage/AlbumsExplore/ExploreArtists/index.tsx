import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SongsItem from '@/components/extra/SongsItem';
import { songsColors } from '@/config/theme/songs.colors';
import Chip from '@mui/material/Chip';
import { Link } from '@mui/material';

const ExploreArtists = () => {
  return (
    <Box>
      <Typography component="h2" fontSize="1.5rem" fontWeight="400" sx={{ margin: '1.5rem 1rem 1rem' }}>
        Explore Album's artists
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          p: '.5rem'
        }}
      >
        {new Array(5).fill(0).map((_, index) => (
          <SongsItem withAdditionalInfo key={index} color={songsColors[index]}/>
        ))}
        <Chip
          label="Explore all songs by the artist"
          variant="outlined"
          sx={{
            background: '#7487f2',
            border: 'none',
            textDecoration: 'none',
            color: '#fff',
            cursor: 'pointer',
            margin: '0 auto',
          }}
          component={Link}
          href="/"
        />
      </Box>
    </Box>
  );
};

export default ExploreArtists;
