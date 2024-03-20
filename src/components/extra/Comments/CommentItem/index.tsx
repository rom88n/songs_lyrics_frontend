import React, { memo } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const CommentItem = memo(() => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box
          sx={{
            height: '3.75rem',
            width: '3.75rem',
            borderRadius: '50%',
            backgroundColor: '#e5e5e5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          A
        </Box>
        <Box
          sx={{
            margin: 'auto 0 auto 1rem',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            fontWeight="bold"
          >
            Lian Rubicorn
          </Typography>
          <Typography
            fontSize=".875rem"
          >
            27 minutes ago
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          mt: '1rem'
        }}
      >
        Textarea Autosize behaves similarly to the native HTML. By default, an empty Textarea Autosize component renders as a single row, as shown in the following demo
      </Typography>
    </Box>
  );
});

CommentItem.displayName = 'CommentItem';

export default CommentItem;
