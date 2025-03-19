import MyWorkComponent from "@/components/MyWorkComponent";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>
          My Work | Charles Njoroge - Software Engineer, Web & Mobile Developer
        </title>
        <meta
          name="description"
          content="Professional web and mobile projects i have created in the past."
        />
        <meta property="og:title" content="Previous Works | Charles Njoroge" />
        <meta
          property="og:description"
          content="Professional web and mobile development services including custom website creation and web applications."
        />
      </Head>
      <div className="w-screen h-max min-h-[100(vh)] flex flex-col justify-start items-start">
        <div>
          <MyWorkComponent />
        </div>
      </div>
    </>
  );
};

export default Services;
