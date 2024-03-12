import React, { memo } from 'react';
import Image from 'next/image';
import { Button, Popover } from '@mui/material';
import { locales, TLocale } from '@/middleware';
import { usePathname, useRouter } from 'next/navigation';
import useLocalization from '@/hooks/useLocalization';

const LangPicker = memo(() => {
  const { lang } = useLocalization();
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (newLang: TLocale) => {
    const newPathname = pathname.split('/').map(item => item == lang ? newLang : item).join('/');

    router.push(newPathname);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'language-picker-popover' : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        onClick={handleClick}
      >
        <Image
          src={`/icons/languages/${lang}.png`}
          width={30}
          height={17}
          alt="current language"
        />
      </Button>
      <Popover
        disableScrollLock
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            variant: 'outlined',
            elevation: 0,
            sx: {
              display: 'flex',
              flexDirection: 'column',
              padding: '0.375rem 0.5rem'
            }
          }
        }}
      >
        {locales.map(locale => {
          if (locale === lang) return;
          return (
            <Image
              key={locale}
              src={`/icons/languages/${locale}.png`}
              onClick={() => handleChange(locale)}
              width={30}
              height={17}
              alt="current language"
              style={{ cursor: 'pointer' }}
            />
          );
        })}
      </Popover>
    </>
  );
});

LangPicker.displayName = 'LangPicker';

export default LangPicker;
