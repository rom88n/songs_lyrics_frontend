'use client'
import React, { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SongsItem from '@/components/extra/SongsItem';
import { songsColors } from '@/config/theme/songs.colors';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { TSong } from '@/config/types';
import QUERIES from '@/schema/queries';

const ExploreMoreSongs = memo(() => {
  const { data } = useSuspenseQuery<{
    songs: TSong[],
  }>(QUERIES.GET_LAST_ADDED_SONGS_QUERY);

  return (
    <Box>
      <Typography component="h2" fontSize="1.5rem" fontWeight="400" sx={{ margin: '1.5rem 1rem 1rem' }}>
        Last added Songs Lyrics
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          p: '.5rem'
        }}
      >
        {data.songs.map((song, index) => (
          <SongsItem withAdditionalInfo song={song} key={song.slug} color={songsColors[index]}/>
        ))}
      </Box>
    </Box>
  );
});

ExploreMoreSongs.displayName = 'ExploreMoreSongs';

export default ExploreMoreSongs;
