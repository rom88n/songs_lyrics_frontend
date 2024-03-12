'use client'
import { useContext } from 'react';
import { LangContext } from '@/components/layouts/LangProvider';

const useLocalization = () => {
  const { lang, labels } = useContext(LangContext);

  return { lang, labels };
};

export default useLocalization;
