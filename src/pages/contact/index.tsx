import ContactComponent from "@/components/ContactComponent";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>
          Contact | Charles Njoroge - Software Engineer, Web & Mobile Developer
        </title>
        <meta
          name="description"
          content="Get in touch with me for your web and mobile development projects."
        />
        <meta property="og:title" content="Contact | Charles Njoroge" />
        <meta
          property="og:description"
          content="Get in touch with me for your web and mobile development projects."
        />
      </Head>
      <div className="w-screen h-max min-h-screen flex flex-col justify-start items-start">
        <div>
          <ContactComponent />
        </div>
      </div>
    </>
  );
};

export default Contact;
