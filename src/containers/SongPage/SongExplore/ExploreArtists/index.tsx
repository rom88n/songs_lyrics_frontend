import React, { FC, memo } from 'react';
import { artistsColors } from '@/config/theme/songs.colors';
import Box from '@mui/material/Box';
import { TArtist, TSong } from '@/config/types';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import songsQueries from '@/schema/queries';
import SongsItem from '@/components/extra/SongsItem';
import { Typography } from '@mui/material';

const ExploreArtists: FC<{ artists: TArtist[] }> = memo(({ artists }) => {
  const { data } = useSuspenseQuery<{
    artistsSongs: TSong[]
  }>(songsQueries.GET_ARTISTS_SONGS_QUERY, {
    variables: { artists_slugs: artists.map(i => i.name)  },
  });
  const { artistsSongs } = data;

  if (!artistsSongs.length) {
    return (
      <Typography
        sx={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        No Artists' songs
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
      {artistsSongs.map((song, index) => (
        <SongsItem key={index} song={song} color={artistsColors[index]}/>
      ))}
    </Box>
  );
});

ExploreArtists.displayName = 'ArtistSongs';

export default ExploreArtists;
