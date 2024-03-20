import React, { FC, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import MuiRating from '@mui/material/Rating';

type TRatingProps = {
  id: string
  type: 'song' | 'artist' | 'album'
  defaultValue: number;
}

const Rating: FC<TRatingProps> = ({ id, type, defaultValue }) => {
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    setReadOnly(Boolean(localStorage.getItem(`${type}-${id}`)));
  }, [id, type]);

  const onChange = useCallback((_: SyntheticEvent<Element, Event>, newValue: number | null) => {
    console.log(newValue);
    localStorage.setItem(`${type}-${id}`, '1');
  }, [id, type]);

  return (
    <MuiRating
      readOnly={readOnly}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default Rating;
