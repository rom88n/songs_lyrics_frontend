import React, { FC, memo } from 'react';
import { Box, Link, Paper } from '@mui/material';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { TSong } from '@/config/types';
import moment from 'moment';
import { formatDuration } from '@/utils/time';
import ROUTES from '@/config/routes';

type TSongsItemProps = {
  color: string
  withAdditionalInfo?: boolean
  song: TSong
}

const SongsItem: FC<TSongsItemProps> = memo(({ color, withAdditionalInfo = false, song = {} }) => {
  return (
    <Paper
      variant="outlined"
      component={Link}
      href={`${ROUTES.songs}/${song.slug}`}
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
          <AudiotrackIcon
            sx={{
              fontSize: '1.5rem',
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            pl: '1rem'
          }}
        >
          <Box fontSize="1rem">
            <strong>{song.title}</strong>
          </Box>
          <Box fontSize="0.875rem">
            Artist: <strong>{song.artists?.map(i => i.name).join(', ')}</strong> {song.album && <>|
            Album: <strong>{song.album?.name}</strong></>}
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
              Year: <strong>{moment(song.publishDateYt).format('YYYY')}</strong> | Views: <strong>{String(song.viewCountYt).toLocaleString()}</strong>
            </Box>
            <Box fontSize="0.875rem">
              Duration: <strong>{formatDuration(song.duration || 0)}</strong>
            </Box>
          </>
        </Box>
      )}
    </Paper>
  );
});

SongsItem.displayName = 'SongsItem';

export default SongsItem;
