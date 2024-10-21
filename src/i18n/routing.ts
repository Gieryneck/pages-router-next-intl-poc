import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { NextRouter, useRouter as useNextRouter } from "next/router";

export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      de: "/ueber-uns",
    },
  },
  // 'never' does not work, 'as-needed' gives query params when switching back to default lang
  localePrefix: "as-needed",
});

const {
  Link,
  redirect,
  usePathname,
  useRouter: useNextIntlRouter,
} = createLocalizedPathnamesNavigation(routing);

type NextIntlRouter = ReturnType<typeof useNextIntlRouter>;
type CombinedRouter = NextRouter & NextIntlRouter;

type Router = {
  [K in keyof CombinedRouter]: K extends keyof NextIntlRouter
    ? NextIntlRouter[K]
    : K extends keyof NextRouter
    ? NextRouter[K]
    : never;
};

/**
 * Needs to be called within NextIntlClientProvider
 *  */
const useRouter = function useCombinedRouter(): Router {
  const router = useNextRouter();
  const nextIntlRouter = useNextIntlRouter();

  return {
    ...router,
    ...nextIntlRouter,
  };
};

export { Link, redirect, usePathname, useRouter };

