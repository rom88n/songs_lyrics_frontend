'use client';
import React, { memo, useMemo } from 'react';
import { tss } from 'tss-react';
import Box from '@mui/material/Box';
import SongsItem from '@/components/extra/SongsItem';
import { songsColors } from '@/config/theme/songs.colors';

const colors = songsColors()

const SongsList = memo(() => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      {new Array(10).fill(0).map((_, index) => (
        <SongsItem withAdditionalInfo key={index} color={colors[index]}/>
      ))}
    </Box>
  );
});

SongsList.displayName = 'SongsList';

const useStyles = tss.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }
});

export default SongsList;
