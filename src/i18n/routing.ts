import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      de: '/ueber-uns'
    }
  },
  // 'never' does not work, 'as-needed' gives query params when switching back to default lang
  localePrefix: 'as-needed'
});

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation(routing);