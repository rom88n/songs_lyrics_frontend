'use client';

import React, { memo, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { songsColors } from '@/config/theme/songs.colors';
import AlbumItem from '@/components/extra/AlbumItem';
import SearchComponent from '@/components/extra/SearchComponent';
import { useSearchParams } from 'next/navigation';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { TAlbum } from '@/config/types';
import QUERIES from '@/schema/queries';
import Pagination from '@/components/extra/Pagination';

const COUNT_PER_PAGE = 10;

const AlbumsList = memo(() => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') as string || '1';
  const { data } = useSuspenseQuery<{
    albums: TAlbum[],
    totalAlbums: number
  }>(QUERIES.GET_ALBUMS_QUERY, {
    variables: { skip: COUNT_PER_PAGE * (Number(page) - 1), first: COUNT_PER_PAGE, search: searchParams.get('search') || undefined },
  });

  const count = useMemo(() => {
    if (data?.totalAlbums) {
      return Math.ceil(data.totalAlbums / COUNT_PER_PAGE);
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
        List of Albums
      </Typography>
      <SearchComponent
        placeholder="Search for album"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {data.albums.map((album, index) => (
          <AlbumItem
            withAdditionalInfo
            album={album}
            key={album.slug}
            color={songsColors[index]}
          />
        ))}
      </Box>
      <Pagination count={count}/>
    </Box>
  );
});

AlbumsList.displayName = 'AlbumsList';

export default AlbumsList;
