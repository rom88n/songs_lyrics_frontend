import React, { FC, memo } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Skeleton } from '@mui/material';
import EventItem from '@/components/extra/EventItem';
import { eventsColors } from '@/config/theme/songs.colors';
import { useQuery } from '@apollo/client';
import { TEvent } from '@/config/types';
import QUERIES from '@/schema/queries';

const ExploreEvents: FC<{ artistName?: string }> = memo(({ artistName }) => {
  const { data, loading } = useQuery<{
    artistEvents: TEvent[],
  }>(QUERIES.GET_ARTIST_EVENTS_QUERY, {
    variables: { artist_name: artistName  },
    skip: !artistName
  });

  const { artistEvents = [] } = data || {};

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
        {!loading && !artistEvents?.length ? (
          <Typography
            sx={{
              width: '100%',
              textAlign: 'center',
              mb: '1rem'
            }}
          >
            No events
          </Typography>
        ) : (
          <>
            {!loading ? artistEvents.map((event, index) => (
              <EventItem key={index} event={event} color={eventsColors[index]}/>
            )) : new Array(5).fill(0).map((_, index) => (
              <Skeleton
                key={index}
                height="5.125rem"
                width="100%"
                sx={{ transform: 'none' }}
              />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
});

ExploreEvents.displayName = 'ExploreEvents';

export default ExploreEvents;
