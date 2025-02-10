import WebDevelopment from "@/components/WebDevelopment";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>Services | Your Name - Web & Mobile Developer</title>
        <meta
          name="description"
          content="Professional web and mobile development services including custom website creation and web applications."
        />
        <meta
          property="og:title"
          content="Web and Mobile Development Services | Charles Njoroge"
        />
        <meta
          property="og:description"
          content="Professional web and mobile development services including custom website creation and web applications."
        />
      </Head>
      <div className="w-screen h-max min-h-[100(vh)] flex flex-col justify-start items-start">
        <div>
          <WebDevelopment />
        </div>
      </div>
    </>
  );
};

export default Services;
