import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";
import { NextRouter, withRouter } from "next/router";

type Props = AppProps & {
  router: NextRouter;
};

function App({ Component, pageProps, router }: Props) {
  console.log('pageProps', pageProps)

  return (
    <NextIntlClientProvider locale={(pageProps.locale)}>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}

export default withRouter(App);
