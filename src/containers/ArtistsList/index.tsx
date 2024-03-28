'use client';
import React, { memo, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { songsColors } from '@/config/theme/songs.colors';
import ArtistItem from '@/components/extra/ArtistItem';
import SearchComponent from '@/components/extra/SearchComponent';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { TArtist } from '@/config/types';
import QUERIES from '@/schema/queries';
import { useSearchParams } from 'next/navigation';
import Pagination from '@/components/extra/Pagination';

const COUNT = 10;

const ArtistsList = memo(() => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') as string || '1';
  const { data } = useSuspenseQuery<{
    artists: TArtist[],
    totalArtists: number
  }>(QUERIES.GET_ARTISTS_QUERY, {
    variables: { skip: COUNT * (Number(page) - 1), first: COUNT, search: searchParams.get('search') || undefined },
  });

  const count = useMemo(() => {
    if (data?.totalArtists) {
      return Math.ceil(data.totalArtists / COUNT);
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
        List of Artists
      </Typography>
      <SearchComponent
        placeholder="Search for artist"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {data.artists.map((artist, index) => (
          <ArtistItem
            withAdditionalInfo
            artist={artist}
            key={artist.slug}
            color={songsColors[index]}
          />
        ))}
      </Box>
      <Pagination count={count}/>
    </Box>
  );
});

ArtistsList.displayName = 'ArtistsList';

export default ArtistsList;
