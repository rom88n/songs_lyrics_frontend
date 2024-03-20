import React, { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { songsColors } from '@/config/theme/songs.colors';
import { Link } from '@mui/material';
import Chip from '@mui/material/Chip';
import AlbumItem from '@/components/extra/AlbumItem';

const ExploreSongs = memo(() => {
  return (
    <Box>
      <Typography component="h2" fontSize="1.5rem" fontWeight="400" sx={{ margin: '1.5rem 1rem 1rem' }}>
        Arist's albums lyrics
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
          <AlbumItem withAdditionalInfo key={index} color={songsColors[index]}/>
        ))}
        <Chip
          label="Explore more tracks from the album"
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
});

ExploreSongs.displayName = 'ExploreSongs';

export default ExploreSongs;
