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
  localePrefix: 'always'
});

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation(routing);