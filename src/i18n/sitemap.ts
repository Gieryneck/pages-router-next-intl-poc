import { getPathname, routing } from '@/i18n/routing';
import { MetadataRoute } from 'next';
 
// Adapt this as necessary
const host = 'https://acme.com';
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Adapt this as necessary
  return Object.keys(routing.pathnames).map(pathName => getEntry(pathName as Href));
}
 
type Href = Parameters<typeof getPathname>[0]['href'];
 
function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)])
      )
    }
  };
}
 
function getUrl(href: Href, locale: (typeof routing.locales)[number]) {
  const pathname = getPathname({locale, href});
  return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
}
