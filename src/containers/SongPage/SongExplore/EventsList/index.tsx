import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { eventsColors } from '@/config/theme/songs.colors';
import EventItem from '@/components/extra/EventItem';
import { TEvent } from '@/config/types';
import QUERIES from '@/schema/queries';
import { useQuery } from '@apollo/client';
import { Skeleton, Typography } from '@mui/material';

const EventsList: FC<{ artistName: string }> = ({ artistName }) => {
  const { data, loading } = useQuery<{
    artistEvents: TEvent[],
  }>(QUERIES.GET_ARTIST_EVENTS_QUERY, {
    variables: { artist_name: artistName  },
  });

  const { artistEvents = [] } = data || {};

  if (!loading && !artistEvents?.length) {
    return (
      <Typography
        sx={{
          width: '100%',
          textAlign: 'center',
          mb: '1rem'
        }}
      >
        No events
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        p: '.5rem 1rem'
      }}
    >
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
    </Box>
  );
};

export default EventsList;
