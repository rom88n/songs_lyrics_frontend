'use client';
import React, { memo, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SongsItem from '@/components/extra/SongsItem';
import { songsColors } from '@/config/theme/songs.colors';
import SearchComponent from '@/components/extra/SearchComponent';
import Pagination from '@/components/extra/Pagination';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import songsQueries from '@/schema/queries';
import { useSearchParams } from 'next/navigation';
import { TSong } from '@/config/types';

const COUNT = 10;

const SongsList = memo(() => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') as string || '1';
  const { data } = useSuspenseQuery<{
    songs: TSong[],
    totalSongs: number
  }>(songsQueries.GET_SONGS_QUERY, {
    variables: { skip: COUNT * (Number(page) - 1), first: COUNT, search: searchParams.get('search') || undefined },
  });

  const count = useMemo(() => {
    if (data?.totalSongs) {
      return Math.ceil(data.totalSongs / COUNT);
    }

    return 0;
  }, [data]);

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
      <SearchComponent placeholder="Search for song" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {data.songs.map((song, index) => (
          <SongsItem
            withAdditionalInfo
            key={song.slug}
            song={song}
            color={songsColors[index]}
          />
        ))}
      </Box>
      <Pagination count={count}/>
    </Box>
  );
});

SongsList.displayName = 'SongsList';

export default SongsList;
