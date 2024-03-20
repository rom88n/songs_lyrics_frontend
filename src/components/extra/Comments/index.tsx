import React, { memo } from 'react';
import { Divider, Typography } from '@mui/material';
import CommentItem from '@/components/extra/Comments/CommentItem';
import Box from '@mui/material/Box';
import AddComment from '@/components/extra/Comments/AddComment';

const Comments = memo(() => {
  const comments = Array(10).fill(0);
  return (
    <Box
      sx={{
        mt: '1rem'
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: '1.5rem'
        }}
      >
        Comments
      </Typography>
      <Divider sx={{ margin: '1rem 0' }}/>
      {comments.length ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {comments.map((_, index) => (
            <CommentItem
              key={index}
            />
          ))}
        </Box>
      ) : (
        <Typography
          variant="body2"
          sx={{
            fontSize: '1.2rem',
            color: '#000',
            textAlign: 'center'
          }}
        >
          No comments
        </Typography>
      )}
      <AddComment/>
    </Box>
  );
});

Comments.displayName = 'Comments';

export default Comments;
