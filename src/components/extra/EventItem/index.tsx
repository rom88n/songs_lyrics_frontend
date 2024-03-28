import React, { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, Paper } from '@mui/material';
import { TEvent } from '@/config/types';
import EventIcon from '@mui/icons-material/Event';

type TEventItemProps = {
  color: string,
  event: TEvent
}

const EventItem: FC<TEventItemProps> = memo(({ color, event }) => {
  return (
    <Paper
      variant="outlined"
      component={Link}
      target="_blank"
      rel="nofollow"
      href={event.url}
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
          backgroundColor: color,
          display: 'flex',
          flexDirection: 'column',
          lineHeight: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
          height: '4rem',
          width: '4rem',
          fontSize: '0.875rem',
          borderRadius: '1.5rem',
          color: '#fff',
        }}
      >
        <EventIcon
          sx={{
            fontSize: '1.7rem'
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          paddingLeft: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          component="div"
          sx={{
            'span': {
              fontSize: '.875rem',
            }
          }}
        >
          <b>{event.name}</b>
        </Typography>
        <Typography component="div">
          <span>{event.promoter}</span>
        </Typography>
      </Box>
    </Paper>
  );
});

EventItem.displayName = 'EventItem';

export default EventItem;
