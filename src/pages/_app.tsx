import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";
import { NextRouter, withRouter } from "next/router";
import { IntlProvider } from "react-intl";

type Props = AppProps & {
  router: NextRouter;
};

function App({ Component, pageProps }: Props) {
  console.log("pageProps", pageProps);

  return (
    <NextIntlClientProvider locale={pageProps.locale}>
      <IntlProvider locale={pageProps.locale}>
        <Component {...pageProps} />
      </IntlProvider>
    </NextIntlClientProvider>
  );
}

export default withRouter(App);
