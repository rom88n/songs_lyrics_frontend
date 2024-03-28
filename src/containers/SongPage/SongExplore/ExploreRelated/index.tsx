import React, { FC, memo } from 'react';
import SongsItem from '@/components/extra/SongsItem';
import { songsColors } from '@/config/theme/songs.colors';
import Box from '@mui/material/Box';
import { TSong } from '@/config/types';
import { Typography } from '@mui/material';

const ExploreRelated: FC<{ songs: TSong[] }> = memo(({ songs }) => {
  if (!songs.length) {
    return (
      <Typography
        sx={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        No Related songs
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        p: '.5rem 1rem'
      }}
    >
      {songs.map((song, index) => (
        <SongsItem key={index} song={song} color={songsColors[index]}/>
      ))}
    </Box>
  );
});

ExploreRelated.displayName = 'ExploreRelated';

export default ExploreRelated;
