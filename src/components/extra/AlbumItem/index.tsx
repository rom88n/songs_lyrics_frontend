import React, { FC, memo } from 'react';
import { Box, Link, Paper } from '@mui/material';
import AlbumIcon from '@mui/icons-material/Album';
import { TAlbum } from '@/config/types';
import moment from 'moment';
import { extractYear } from '@/utils/time';
import ROUTES from '@/config/routes';

type TSongsItemProps = {
  color: string
  withAdditionalInfo?: boolean
  album: TAlbum;
}

const AlbumItem: FC<TSongsItemProps> = memo(({ album, color, withAdditionalInfo = false }) => {
  return (
    <Paper
      variant="outlined"
      component={Link}
      href={`${ROUTES.albums}/${album.slug}`}
      sx={{
        borderRadius: '.5rem',
        padding: '.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        textDecoration: 'none'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '3rem',
            width: '3rem',
            fontSize: '0.875rem',
            borderRadius: '1rem',
            color: '#fff'
          }}
        >
          <AlbumIcon sx={{ fontSize: '1.5rem' }}/>
        </Box>

        <Box
          sx={{
            flex: 1,
            pl: '1rem'
          }}
        >
          <Box fontSize="1rem">
            <strong>{album.name}</strong>
          </Box>
        </Box>
      </Box>
      {withAdditionalInfo && (
        <Box
          sx={{
            flex: 0,
            pl: '1rem',
            whiteSpace: 'nowrap',
            textAlign: 'right'
          }}
        >
          <>
            <Box fontSize="0.875rem">
              Songs: <strong>{album.songs.length}</strong> | Artists: <strong>{album.artists.length}</strong>
            </Box>
            <Box fontSize="0.875rem">
              Year: <strong>{moment(extractYear(album.year)).format('YYYY')}</strong>
            </Box>
          </>
        </Box>
      )}
    </Paper>
  );
});

AlbumItem.displayName = 'AlbumItem';

export default AlbumItem;
