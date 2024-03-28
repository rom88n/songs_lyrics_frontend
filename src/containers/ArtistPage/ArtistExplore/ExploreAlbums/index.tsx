import React, { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { songsColors } from '@/config/theme/songs.colors';
import AlbumItem from '@/components/extra/AlbumItem';
import { TAlbum } from '@/config/types';

const ExploreAlbums: FC<{ albums: TAlbum[] }> = memo(({ albums }) => {
  return (
    <Box>
      <Typography component="h2" fontSize="1.5rem" fontWeight="400" sx={{ margin: '1.5rem 1rem 1rem' }}>
        Artist's albums lyrics
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          p: '.5rem'
        }}
      >
        {albums.map((album, index) => (
          <AlbumItem
            withAdditionalInfo
            key={album.slug}
            album={album}
            color={songsColors[index]}
          />
        ))}
      </Box>
    </Box>
  );
});

ExploreAlbums.displayName = 'ExploreAlbums';

export default ExploreAlbums;
