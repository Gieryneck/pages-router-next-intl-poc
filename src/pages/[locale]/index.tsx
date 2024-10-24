import { Link, useRouter } from "@/i18n/routing";
import sitemap from "@/i18n/sitemap";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import { useLocale } from "next-intl";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const locale = useLocale();
  const router = useRouter();

  console.log('sitemap generation', sitemap());

  const [isRouterReady, setIsRouterReady] = useState(false);
  useEffect(() => {
    if (router.isReady) setIsRouterReady(true);
  }, [router.isReady])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>ROUTE: Home</p>
        <p>LOCALE: {locale}</p>
        {isRouterReady && <p>COMBINED ROUTER PATH: {router.asPath}</p>}

        <div>
          <Link href="/about">About us</Link>
          {/* <a href="/about" hrefLang={locale}>About us</a> */}
        </div>
        <div>
          <Link href="/" locale="en">
            Switch path to English
          </Link>
        </div>
        <div>
          <Link href="/" locale="de">
            Switch path to German
          </Link>
        </div>
        <div>
          <button onClick={() => router.push("/about")}>Push '/about'</button>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      locale: context.params?.locale,
    },
  };
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  return {
    paths: [{ params: { locale: "en" } }, { params: { locale: "de" } }],
    fallback: false,
  };
}
