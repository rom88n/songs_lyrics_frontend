import React, { FC, SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react';
import MuiRating from '@mui/material/Rating';
import { useMutation } from '@apollo/client';
import { UPDATE_RATING_MUTATION } from '@/schema/mutations/common.mutations';

type TRatingProps = {
  slug: string
  type: 'song' | 'artist' | 'album'
  rating: number;
  votes: number;
}

const Rating: FC<TRatingProps> = ({ rating, votes, slug, type }) => {
  const [state, setState] = useState({ rating, votes })
  const [readOnly, setReadOnly] = useState(false);
  const [updateRating] = useMutation(
    UPDATE_RATING_MUTATION,
    {
      onCompleted: () => {
        localStorage.setItem(`rating-${type}-${slug}`, '1');
        setReadOnly(true)
      }
    }
  )

  const currentRating = useMemo(() => state.rating / state.votes, [state]);

  useEffect(() => {
    setReadOnly(Boolean(localStorage.getItem(`rating-${type}-${slug}`)));
  }, [slug, type]);

  const onChange = useCallback((_: SyntheticEvent<Element, Event>, newValue: number | null) => {
    setState(prev => ({ rating: prev.rating + Number(newValue), votes: prev.votes + 1 }))
    updateRating({ variables: { type, slug, value: newValue } })
  }, [slug, type]);

  return (
    <MuiRating
      readOnly={readOnly}
      value={currentRating}
      max={5}
      onChange={onChange}
    />
  );
};

export default Rating;
