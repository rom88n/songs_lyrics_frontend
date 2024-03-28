import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ForwardedRef, forwardRef, useContext, useMemo } from 'react';
import { LangContext } from '@/components/layouts/LangProvider';

const Link = forwardRef((props: NextLinkProps, ref: ForwardedRef<never>) => {
  const { lang } = useContext(LangContext);
  const pathname = usePathname();
  const { href: hrefOriginal, prefetch, ...restProps } = props

  const href = useMemo(() => {
    if (hrefOriginal) {
      if (String(hrefOriginal).includes('http')) {
        return hrefOriginal;
      }
      return `/${lang}${String(hrefOriginal).length > 1 ? hrefOriginal : ''}`;
    }

    return '';
  }, [lang, hrefOriginal]);

  if (!props.href || pathname === href) return (<span {...restProps} ref={ref}/>);

  return (
    <NextLink passHref ref={ref} prefetch={prefetch} {...restProps} href={href}/>
  );
});

Link.displayName = 'Link';

export default Link;
