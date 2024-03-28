'use client'
import React, { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SongsItem from '@/components/extra/SongsItem';
import { songsColors } from '@/config/theme/songs.colors';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { TSong } from '@/config/types';
import QUERIES from '@/schema/queries';

const ExplorePopularSongs = memo(() => {
  const { data } = useSuspenseQuery<{
    popularSongs: TSong[],
  }>(QUERIES.GET_POPULAR_SONGS_QUERY);

  return (
    <Box>
      <Typography component="h2" fontSize="1.5rem" fontWeight="400" sx={{ margin: '1.5rem 1rem 1rem' }}>
        Popular Song Lyrics Now
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          p: '.5rem'
        }}
      >
        {data.popularSongs.map((song, index) => (
          <SongsItem withAdditionalInfo song={song} key={song.slug} color={songsColors[index]}/>
        ))}
      </Box>
    </Box>
  );
});

ExplorePopularSongs.displayName = 'ExplorePopularSongs';

export default ExplorePopularSongs;
