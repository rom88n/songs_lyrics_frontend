'use client';
import React, { FC, memo, createContext, ReactNode } from 'react';
import { defaultLocale, TLocale } from '@/middleware';

type TLangProviderProps = {
  lang: TLocale;
  children: ReactNode;
  labels: Record<string, string>
}

export const LangContext = createContext<Omit<TLangProviderProps, 'children'>>({
  lang: defaultLocale,
  labels: {},
});

const LangProvider: FC<TLangProviderProps> = memo(({ lang, labels, children }) => {
  return (
    <LangContext.Provider value={{ lang, labels }}>
      {children}
    </LangContext.Provider>
  );
});

LangProvider.displayName = 'LangProvider';

export default LangProvider;
