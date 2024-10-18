import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';

export default getRequestConfig(async ({locale}) => {
  console.log(`getRequestConfig validates locale...`)


  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    console.log(`locale: ${locale}`);
    console.log(`routing.locales: ${routing.locales}`);
    console.log(`getRequestConfig NOT FOUND`)
    notFound()
  };

  return {};
});