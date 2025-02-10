import About from "@/components/About";
import Discover from "@/components/Discover";
import Ideas from "@/components/Ideas";
import Landing from "@/components/Landing";
import Works from "@/components/Works";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Your Name - Web & Mobile Developer</title>
        <meta
          name="description"
          content="Welcome to my portfolio - I create modern web and mobile applications with cutting-edge technologies."
        />
        <meta
          property="og:title"
          content="Charles Njoroge - Software Engineer,  Web & Mobile Developer"
        />
        <meta
          property="og:description"
          content="Welcome to my portfolio - I create modern web and mobile applications with cutting-edge technologies."
        />
      </Head>

      <div className="w-screen h-max min-h-[100(vh)] flex flex-col justify-start items-start">
        <div>
          <Landing />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Ideas />
        </div>
        <div>
          <Discover />
        </div>
        <div id="works">
          <Works />
        </div>
      </div>
    </>
  );
};

export default Home;
