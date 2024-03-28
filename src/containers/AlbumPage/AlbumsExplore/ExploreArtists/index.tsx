import React, { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { songsColors } from '@/config/theme/songs.colors';
import ArtistItem from '@/components/extra/ArtistItem';
import { TArtist } from '@/config/types';

const ExploreArtists: FC<{ artists: TArtist[] }> = memo(({ artists }) => {
  return (
    <Box>
      <Typography component="h2" fontSize="1.5rem" fontWeight="400" sx={{ margin: '1.5rem 1rem 1rem' }}>
        Album's artists
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          p: '.5rem'
        }}
      >
        {artists.map((artist, index) => (
          <ArtistItem
            withAdditionalInfo
            artist={artist}
            key={index}
            color={songsColors[index]}
          />
        ))}
      </Box>
    </Box>
  );
});

ExploreArtists.displayName = 'ExploreArtists';

export default ExploreArtists;
