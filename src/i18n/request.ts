import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';

// we're not really using it as of now (with next v13) 
// but next-intl requires this file to be here
// https://next-intl-docs.vercel.app/docs/usage/configuration#i18n-request
export default getRequestConfig(async ({locale}) => {
  if (!routing.locales.includes(locale as any)) {
    notFound()
  };

  return {};
});
