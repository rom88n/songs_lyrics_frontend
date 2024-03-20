import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import EventItem from '@/components/extra/EventItem';
import { eventsColors } from '@/config/theme/songs.colors';

const ExploreEvents = memo(() => {
  return (
    <Box>
      <Typography component="h2" fontSize="1.5rem" fontWeight="400" sx={{ margin: '1.5rem 1rem 1rem' }}>
        Arist's events
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          p: '.5rem'
        }}
      >
        {new Array(5).fill(0).map((_, index) => (
          <EventItem key={index} color={eventsColors[index]}/>
        ))}
      </Box>
    </Box>
  );
});

ExploreEvents.displayName = 'ExploreEvents';

export default ExploreEvents;
