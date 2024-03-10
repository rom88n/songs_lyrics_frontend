import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import Typography from '@mui/material/Typography';
import { ForwardedRef, forwardRef } from 'react';

const Link = forwardRef((props: NextLinkProps, ref: ForwardedRef<never>) => {
  const pathname = usePathname()

  if (pathname === props.href) return (<span {...props} ref={ref}/>)

  return (
    <NextLink passHref ref={ref} {...props} />
  )
});

Link.displayName = 'Link';

export default Link;
