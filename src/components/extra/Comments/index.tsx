import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CommentItem from '@/components/extra/Comments/CommentItem';
import AddComment from '@/components/extra/Comments/AddComment';
import { useQuery } from '@apollo/client';
import { TComment } from '@/config/types';
import QUERIES from '@/schema/queries';
import MuiPagination from '@mui/material/Pagination';

type TCommentsProps = {
  type: 'song' | 'album' | 'artist';
  slug: string;
  initialComments: TComment[]
}

const COUNT_PER_PAGE = 10;

const Comments: FC<TCommentsProps> = memo(({ type, slug, initialComments }) => {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState<TComment[]>(initialComments);
  const { data = { totalEntityComments: 0 }, loading, refetch } = useQuery<{
    comments: TComment[],
    totalEntityComments: number
  }>(QUERIES.GET_COMMENTS_QUERY, {
    variables: { skip: (page - 1) * COUNT_PER_PAGE, first: COUNT_PER_PAGE, slug, type },
    onCompleted: data => setComments(data.comments),
  });
  const { totalEntityComments } = data;

  const count = useMemo(() => {
    if (totalEntityComments) {
      return Math.ceil(totalEntityComments / COUNT_PER_PAGE);
    }

    return 0;
  }, [totalEntityComments]);

  const handlePage = useCallback(async (_: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    await refetch({ skip: (page - 1) * COUNT_PER_PAGE, first: COUNT_PER_PAGE, slug, type });
    document.getElementById('comments-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [slug, type, refetch]);

  const refetchComments = useCallback(async () => {
    const { data } = await refetch({
      variables: {
        skip: (page - 1) * COUNT_PER_PAGE,
        first: COUNT_PER_PAGE,
        slug,
        type
      }
    });
    setComments(data.comments);
  }, [page, slug, type, refetch]);

  return (
    <Box
      sx={{
        mt: '1rem'
      }}
      id="comments-container"
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
      {comments.length > 0 ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {[...comments].reverse().map(comment => (
            <CommentItem
              comment={comment}
              key={comment.id}
            />
          ))}
          {count > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', m: '1rem 0' }}>
              <MuiPagination
                count={count}
                page={page}
                shape="rounded"
                onChange={handlePage}
                disabled={loading}
              />
            </Box>
          )}
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
      <AddComment
        type={type}
        slug={slug}
        refetchComments={refetchComments}
      />
    </Box>
  );
});

Comments.displayName = 'Comments';

export default Comments;
