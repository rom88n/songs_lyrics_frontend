import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ForwardedRef, forwardRef, useContext, useMemo } from 'react';
import { LangContext } from '@/components/layouts/LangProvider';

const Link = forwardRef((props: NextLinkProps, ref: ForwardedRef<never>) => {
  const { lang } = useContext(LangContext);
  const pathname = usePathname();

  const href = useMemo(() => {
    if (props.href) {
      if (String(props.href).includes('http')) {
        return props.href;
      }
      return `/${lang}${String(props.href).length > 1 ? props.href : ''}`;
    }

    return '';
  }, [lang, props.href]);

  if (!props.href || pathname === href) return (<span {...props} ref={ref}/>);

  return (
    <NextLink passHref ref={ref} {...props} href={href}/>
  );
});

Link.displayName = 'Link';

export default Link;
