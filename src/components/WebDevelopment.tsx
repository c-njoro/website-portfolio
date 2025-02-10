import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck, FaCode, FaComments } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
import { GrTechnology } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";

const WebDevelopment = () => {
  return (
    <div className="main-web-component w-screen h-max flex flex-col gap-6 sm:pt-28 pt-3 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, x: -250 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        }}
        className="page-state w-full h-max min-h-[calc(10vh)] flex flex-row justify-start items-center gap-3"
      >
        <div
          className="line-through w-[calc(12.5vw)] h-2"
          style={{ borderTop: "0.05px solid rgba(128, 128, 128, 0.334)" }}
        ></div>
        <Link
          href="/"
          className="home-link font-body tracking-wider font-semibold hover:text-orange-500 "
        >
          Home{" "}
        </Link>
        <h4>/</h4>
        <Link
          href="/services"
          className="home-link font-body tracking-wider  hover:text-orange-500 "
        >
          Services{" "}
        </Link>
        <h4>/</h4>
        <p className="font-body font-thin tracking-wide text-xs sm:text-sm flex flex-col justify-center items-end hover:cursor-not-allowed">
          Web and Mobile Development
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -250 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        }}
        className="header w-full h-max flex flex-col justify-center items-center gap-8"
      >
        <h1 className="w-3/4 font-thin font-body md:text-7xl sm:text-6xl text-4xl leading-normal tracking-wide">
          <span className="font-semibold">Web</span> and <br />{" "}
          <span className="font-semibold">Mobile</span> development
        </h1>

        <div className="btn w-3/4">
          <button className="flex flex-row items-center justify-between gap-5  font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm text-orange-500">
            <p>Read more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon  sm:size-9 size-7  p-2 text-orange-500 rounded-full shadow-md"
              style={{ backgroundColor: "rgba(55, 55, 55, 0.449)" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      </motion.div>
      <div className="w-full h-max flex flex-col justify-center items-center mt-12 gap-12 relative">
        <div className="animating-back">
          <div className="wheel"></div>
          <div className="wheel"></div>
        </div>
        <div className="w-3/4 h-max flex flex-row justify-start items-center">
          <h2 className="font-light font-heading sm:text-3xl text-2xl tracking-wider md:py-3">
            Website Development
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-3/4 h-max grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 text-sm sm:text-base"
        >
          <div className="w-full h-max flex flex-col justify-start items-start gap-8">
            <p className="sm:w-4/5 w-full font-body tracking-wide leading-relaxed font-extralight">
              I specialize in creating responsive, fast, and user-friendly
              websites tailored to meet diverse needs. My websites are designed
              with modern web standards, ensuring compatibility across devices
              and browsers. <br /> <br /> Below are some systems i have
              developed:
            </p>
            <Link
              target="_blank"
              href="https://real-estate-iota-teal.vercel.app/"
              className="w-max px-8 py-2 h-max flex flex-row gap-5 justify-start items-center bg-gray-900 rounded-full shadow-lg"
            >
              <p className="uppercase text-sm font-semibold font-body">
                Real Estate Web Application
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon bg-white sm:size-9 size-7  p-2 text-orange-500 rounded-full shadow-md"
                style={{
                  backgroundColor: "rgba(55, 55, 55, 0.449)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <ul className="font-body tracking-wide leading-relaxed font-extralight list-disc pl-3">
            <p className="font-thin uppercase tracking-widest">
              Website Services
            </p>
            <li>Custom themes and templates</li>
            <li>SEO optimization for better search engine rankings</li>
            <li>Integration with content management systems like WordPress</li>
            <li>Static and dynamic website development</li>
            <li>Focus on accessibility and user experience</li>
          </ul>
        </motion.div>

        <div className="w-3/4 h-max flex flex-row justify-start items-center">
          <h2 className="font-light font-heading sm:text-3xl text-2xl tracking-wider md:py-3">
            Web App Development
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-3/4 h-max grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 text-sm sm:text-base"
        >
          <div className="w-full h-max flex flex-col justify-start items-start gap-8">
            <p className="sm:w-4/5 w-full font-body tracking-wide leading-relaxed font-extralight">
              I build scalable, secure, and feature-rich web applications
              tailored to user and business needs. My expertise spans across
              front-end and back-end development, ensuring a seamless
              experience.
            </p>
            <Link
              target="_blank"
              href="https://c-techs-online-shop.vercel.app"
              className="w-max px-8 py-2 h-max flex flex-row gap-5 justify-start items-center bg-gray-900 rounded-full shadow-lg"
            >
              <p className="uppercase text-sm font-semibold font-body">
                E-Commerce Web Application
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon bg-white sm:size-9 size-7  p-2 text-orange-500 rounded-full shadow-md"
                style={{
                  backgroundColor: "rgba(55, 55, 55, 0.449)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <ul className="font-body tracking-wide leading-relaxed font-extralight list-disc pl-3">
            <p className="font-thin uppercase tracking-widest">
              Web App Services
            </p>
            <li>Interactive single-page applications (SPA)</li>
            <li>Integration with third-party APIs and services</li>
            <li>Full-stack development (MERN stack)</li>
            <li>Real-time features with WebSockets</li>
            <li>Cloud-based solutions with modern deployment pipelines</li>
          </ul>
        </motion.div>

        <div className="w-3/4 h-max flex flex-row justify-start items-center">
          <h2 className="font-light font-heading sm:text-3xl text-2xl tracking-wider md:py-3">
            Mobile App Development
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-3/4 h-max grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 text-sm sm:text-base"
        >
          <div className="w-full h-max flex flex-col justify-start items-start gap-8">
            <p className="sm:w-4/5 w-full font-body tracking-wide leading-relaxed font-extralight">
              I design and develop scalable, high-performance mobile
              applications tailored to user needs. From smooth UI/UX to
              efficient backend integrations, I ensure a seamless mobile
              experience for both iOS and Android platforms.
            </p>
            <Link
              target="_blank"
              href="https://github.com/c-njoro/Meditation-app"
              className="w-max px-8 py-2 h-max flex flex-row gap-5 justify-start items-center bg-gray-900 rounded-full shadow-lg"
            >
              <p className="uppercase text-sm font-semibold font-body">
                Mobile App Demo
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon bg-white sm:size-9 size-7 p-2 text-orange-500 rounded-full shadow-md"
                style={{
                  backgroundColor: "rgba(55, 55, 55, 0.449)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <ul className="font-body tracking-wide leading-relaxed font-extralight list-disc pl-3">
            <p className="font-thin uppercase tracking-widest">
              Mobile App Services
            </p>
            <li>Custom iOS and Android applications</li>
            <li>Integration with native and third-party APIs</li>
            <li>Cross-platform development with React Native</li>
            <li>Real-time features and notifications</li>
            <li>Secure and scalable mobile architectures</li>
          </ul>
        </motion.div>
      </div>

      <div
        className="w-full h-max min-h-[calc(60vh)] grid grid-span-1 xl:grid-cols-2 xl:place-items-center mt-12 text-black relative pb-8 px-10 xl:px-5 xl:gap-3 gap-10"
        style={{ backgroundColor: "rgb(239, 248, 255)" }}
      >
        <div className="animating-back">
          <div className="wheel"></div>
          <div className="wheel"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="flex flex-col justify-start items-start gap-5 pt-5"
        >
          <div className="flex flex-row text-gray-700 justify-start items-center">
            <GrTechnology className="xl:text-3xl lg:text-2xl text-xl  mr-5" />
            <h3 className="xl:text-3xl lg:text-2xl text-xl font-bold font-heading">
              Technologies I Use
            </h3>
          </div>

          <p className="font-body tracking-wider sm:text-base text-sm">
            I leverage modern tools and frameworks to bring ideas to life.{" "}
            <br /> Some of the technologies I’m skilled in include:
          </p>
          <ul className="list-disc font-body tracking-wider leading relaxed pl-5 text-gray-600 sm:text-base text-sm">
            <li>Front-end: React, Next.js, Tailwind CSS</li>
            <li>Back-end: Node.js, Express</li>
            <li>Databases: MongoDB, PostgreSQL</li>
            <li>DevOps: Docker, CI/CD pipelines</li>
            <li>Version Control: Git, GitHub</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="flex flex-col justify-start items-start gap-5"
        >
          <div className="flex flex-row text-gray-700 justify-start items-center">
            <FaCheck className="xl:text-3xl lg:text-2xl text-xl mr-5" />
            <h3 className="xl:text-3xl lg:text-2xl text-xl font-bold font-heading">
              Why Choose Me
            </h3>
          </div>

          <p className="font-body tracking-wider sm:text-base text-sm">
            My approach to development focuses on understanding client needs,{" "}
            <br />
            providing efficient solutions, and ensuring the highest level of
            satisfaction. <br /> I am committed to delivering:
          </p>
          <ul className=" text-gray-600 text-sm sm:text-base font-body tracking-wider leading-loose">
            <li className="flex-row flex gap-5 justify-start items-center">
              {" "}
              <MdAccessTime /> <p>Timely project delivery.</p>
            </li>
            <li className="flex-row flex gap-5 justify-start items-center">
              <FaCode />
              <p>Clean, maintainable code.</p>
            </li>
            <li className="flex-row flex gap-5 justify-start items-center">
              <FaComments />
              <p>Transparent communication throughout the process.</p>
            </li>
            <li className="flex-row flex gap-5 justify-start items-center">
              <FcSupport />
              <p>Post-deployment support.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;
