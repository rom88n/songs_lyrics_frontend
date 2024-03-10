import React, { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, Paper } from '@mui/material';

type TEventItemProps = {
  color: string,
}

const EventItem: FC<TEventItemProps> = memo(({ color }) => {
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
        <b>13</b>
        <span>Mar</span>
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
          <b>Ashanti with Monica</b>
        </Typography>
        <Typography component="div">
          <span>Sat, 6:30 – 8:30 PM</span>, <b>Chicago, IL, USA</b>
        </Typography>
      </Box>
    </Paper>
  );
});

EventItem.displayName = 'EventItem';

export default EventItem;
