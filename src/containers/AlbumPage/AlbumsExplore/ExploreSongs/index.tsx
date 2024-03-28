import React, { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SongsItem from '@/components/extra/SongsItem';
import { songsColors } from '@/config/theme/songs.colors';
import { TSong } from '@/config/types';

const ExploreSongs: FC<{ songs: TSong[] }> = memo(({ songs }) => {
  return (
    <Box>
      <Typography component="h2" fontSize="1.5rem" fontWeight="400" sx={{ margin: '1.5rem 1rem 1rem' }}>
        Album's songs' lyrics
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          p: '.5rem'
        }}
      >
        {songs.map((song, index) => (
          <SongsItem withAdditionalInfo key={song.slug} song={song} color={songsColors[index]}/>
        ))}
        {/*<Chip*/}
        {/*  label="Explore more tracks from the album"*/}
        {/*  variant="outlined"*/}
        {/*  sx={{*/}
        {/*    background: '#7487f2',*/}
        {/*    border: 'none',*/}
        {/*    textDecoration: 'none',*/}
        {/*    color: '#fff',*/}
        {/*    cursor: 'pointer',*/}
        {/*    margin: '0 auto',*/}
        {/*  }}*/}
        {/*  component={Link}*/}
        {/*  href="/"*/}
        {/*/>*/}
      </Box>
    </Box>
  );
});

ExploreSongs.displayName = 'ExploreSongs';

export default ExploreSongs;
