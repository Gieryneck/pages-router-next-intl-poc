import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";
import { NextRouter, withRouter } from "next/router";

type Props = AppProps & {
  router: NextRouter;
};

function App({ Component, pageProps, router }: Props) {
  console.log(router);

  // router.locale is undefined, not available since we don't have i18n in next.config

  // in the example they recommended for pages router with localized pathnames it also is undefined for pages router
  // https://github.com/amannn/next-intl/tree/main/examples/example-app-router-migration

  /* 
    https://next-intl-docs.vercel.app/docs/usage/configuration#locale

    /*   
    import {useLocale} from 'next-intl';
    import {getLocale} from 'next-intl/server';
    
    // Regular components
    const locale = useLocale();

    // Async Server Components
    const locale = await getLocale(); 
  */

  return (
    <NextIntlClientProvider locale={(router.query?.locale as string) ?? "en"}>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}

export default withRouter(App);
