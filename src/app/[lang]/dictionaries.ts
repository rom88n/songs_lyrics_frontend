import 'server-only'
import { TLocale } from '@/middleware';

const dictionaries: Record<TLocale, () => Promise<Record<string, string>>> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale: TLocale): Promise<Record<string, string>> => dictionaries[locale] ? dictionaries[locale]() : {}
