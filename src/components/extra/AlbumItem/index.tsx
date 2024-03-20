import React, { FC, memo } from 'react';
import { Box, Link, Paper } from '@mui/material';
import DvrIcon from '@mui/icons-material/Dvr';

type TSongsItemProps = {
  color: string
  withAdditionalInfo?: boolean
}

const AlbumItem: FC<TSongsItemProps> = memo(({ color, withAdditionalInfo = false }) => {

  return (
    <Paper
      variant="outlined"
      component={Link}
      href="/albums/1"
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
          <DvrIcon sx={{ fontSize: '1.5rem' }} />
        </Box>

        <Box
          sx={{
            flex: 1,
            pl: '1rem'
          }}
        >
          <Box fontSize="1rem">
            <strong>Album name</strong>
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
              Songs: <strong>35</strong> | Albums: <strong>34</strong>
            </Box>
            <Box fontSize="0.875rem">
              Subscribers: <strong>23445</strong>
            </Box>
          </>
        </Box>
      )}
    </Paper>
  );
});

AlbumItem.displayName = 'AlbumItem';

export default AlbumItem;
