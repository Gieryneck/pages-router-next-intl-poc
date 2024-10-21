import { Link } from "@/i18n/routing";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import { useLocale } from "next-intl";

const About = () => {
  const locale = useLocale();

  return (
    <>
      <p>ROUTE: About</p>
      <p>LOCALE: {locale}</p>
      <Link href="/">Home</Link>

      <div>
        <Link href="/about" locale="en">
          Switch path to English
        </Link>
      </div>
      <div>
        <Link href="/about" locale="de">
          Switch path to German
        </Link>
      </div>
    </>
  );
};

export default About;

export async function getStaticProps(context: GetStaticPropsContext) {
  console.log("About getStaticProps context", context);
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
