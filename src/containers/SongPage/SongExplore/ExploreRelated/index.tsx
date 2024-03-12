import { memo, useMemo } from 'react';
import SongsItem from '@/components/extra/SongsItem';
import { songsColors } from '@/config/theme/songs.colors';
import Box from '@mui/material/Box';

const ExploreRelated = memo(() => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        p: '.5rem 1rem'
      }}
    >
      {new Array(5).fill(0).map((_, index) => (
        <SongsItem key={index} color={songsColors[index]}/>
      ))}
    </Box>
  );
});

ExploreRelated.displayName = 'ExploreRelated';

export default ExploreRelated;
