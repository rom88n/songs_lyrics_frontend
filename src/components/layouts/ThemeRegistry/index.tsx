'use client';

import * as React from 'react';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import theme from '@/config/theme/theme';
import { ThemeProvider } from '@mui/system';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </AppRouterCacheProvider>
  );
}
