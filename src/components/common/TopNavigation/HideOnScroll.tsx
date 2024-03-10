import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import { memo } from 'react';

interface Props {
  children: React.ReactElement;
}

const HideOnScroll = memo((props: Props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    target: typeof window !== 'undefined' ? window : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
})

HideOnScroll.displayName = 'HideOnScroll';

export default HideOnScroll;
