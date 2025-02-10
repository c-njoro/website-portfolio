import ServicesComponent from "@/components/ServicesComponent";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>
          Services | Charles Njoroge - Software Engineer, Web & Mobile Developer
        </title>
        <meta
          name="description"
          content="Professional web and mobile development services including custom website creation and web applications."
        />
        <meta
          property="og:title"
          content="Development Services | Charles Njoroge"
        />
        <meta
          property="og:description"
          content="Professional web and mobile development services including custom website creation and web applications."
        />
      </Head>
      <div className="w-screen h-max min-h-[100(vh)] flex flex-col justify-start items-start">
        <div>
          <ServicesComponent />
        </div>
      </div>
    </>
  );
};

export default Services;
