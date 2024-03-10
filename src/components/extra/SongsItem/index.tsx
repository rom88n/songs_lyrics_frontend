import React, { FC, memo } from 'react';
import { Box, Link, Paper } from '@mui/material';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

type TSongsItemProps = {
  color: string
  withAdditionalInfo?: boolean
}

const SongsItem: FC<TSongsItemProps> = memo(({ color, withAdditionalInfo = false }) => {

  return (
    <Paper
      variant="outlined"
      component={Link}
      href="/songs/1"
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
            <strong>Costa Mee - Around This World</strong>
          </Box>
          <Box fontSize="0.875rem">
            Artist: <strong>Rezilienza</strong>
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
              Views: <strong>1 232 423</strong>, Year: <strong>2020</strong>
            </Box>
            <Box fontSize="0.875rem">
              Duration: <strong>2 minutes 45 seconds</strong>
            </Box>
          </>
        </Box>
      )}
    </Paper>
  );
});

SongsItem.displayName = 'SongsItem';

export default SongsItem;
