import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import { songsColors } from '@/config/theme/songs.colors';
import EventItem from '@/components/extra/EventItem';

const EventsList = () => {
  const colors = useMemo(() => songsColors(), [])
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        p: '.5rem 1rem'
      }}
    >
      {new Array(5).fill(0).map((_, index) => (
        <EventItem key={index} color={colors[index]}/>
      ))}
    </Box>
  );
};

export default EventsList;
