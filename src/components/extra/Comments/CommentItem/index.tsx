import React, { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { TComment } from '@/config/types';
import moment from 'moment';

const CommentItem: FC<{ comment: TComment }> = memo(({ comment }) => {
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
          {comment.name[0]}
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
            {comment.name}
          </Typography>
          <Typography
            fontSize=".875rem"
          >
            {moment(comment.createdAt).fromNow()}
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          mt: '1rem'
        }}
      >
        {comment.text}
      </Typography>
    </Box>
  );
});

CommentItem.displayName = 'CommentItem';

export default CommentItem;
