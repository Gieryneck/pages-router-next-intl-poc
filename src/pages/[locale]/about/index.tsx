import { Link } from "@/i18n/routing";

const About = () => {
  return (
    <>
      <p>About route</p>
      <Link href="/">Home</Link>

      <div>
          <Link href="/about" locale="en">
            Switch path to English
          </Link>
        </div>{" "}
        <div>
          <Link href="/about" locale="de">
            Switch path to German
          </Link>
        </div>
    </>
  )
}

export default About;
