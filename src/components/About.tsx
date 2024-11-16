import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const About = () => {
  return (
    <div
      className="w-screen min-h-[calc(95vh)] h-max relative flex flex-col justify-center items-center py-12 lg:py-5"
      style={{ backgroundColor: "rgb(234, 242, 248)" }}
    >
      <div className="animating-back">
        <div className="wheel"></div>
        <div className="wheel"></div>
      </div>

      <div className="2xl:w-2/3 xl:w-3/4 w-4/5  h-max grid grid-cols-1 lg:grid-cols-2 place-items-center z-10 bg-transparent gap-12 px-5 lg:px-0 ">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-full lg:h-full h-max flex flex-col justify-center items-center gap-8"
        >
          <div className="w-full h-max flex justify-center">
            <Image
              alt="charles image"
              width={700}
              height={700}
              src="/images/passport.jpeg"
              loading="lazy"
              className="lg:h-1/2 xl:w-4/5 lg:w-10/12 w-64 h-64 rounded-full lg:rounded-lg object-cover lg:min-h-[calc(60vh)] shadow-lg"
            ></Image>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="w-full  h-max flex flex-row justify-around items-center"
          >
            <a
              href="http://www.linkedin.com/in/charles-njoroge-063b0626a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 shadow-md rounded-full text-black bg-white hover:text-white hover:bg-black"
              style={{
                transition: "all 300ms ease-in-out",
              }}
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/c-njoro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 shadow-md rounded-full text-black bg-white hover:text-white hover:bg-black"
              style={{
                transition: "all 300ms ease-in-out",
              }}
            >
              <FiGithub />
            </a>

            <a
              href="https://github.com/c-njoro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 shadow-md rounded-full text-black bg-white hover:text-white hover:bg-black"
              style={{
                transition: "all 300ms ease-in-out",
              }}
            >
              <FaXTwitter />
            </a>

            <a
              href="https://github.com/c-njoro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 shadow-md rounded-full text-black bg-white hover:text-white hover:bg-black"
              style={{
                transition: "all 300ms ease-in-out",
              }}
            >
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-full h-max flex flex-col justify-center items-start gap-5"
        >
          <div className="w-full h-max">
            <h1 className="font-body font-semibold tracking-widest uppercase text-3xl">
              About Me
            </h1>
          </div>
          <div className="w-full h-max">
            <p className="font-heading tracking-wide font-light text-gray-700 flex flex-row justify-start  w-full lg:w-3/4 leading-relaxed lg:text-base text-sm">
              I am an experienced full-stack developer with a proven track
              record of delivering high-quality, scalable solutions tailored to
              meet business needs. I specialize in creating robust websites and
              web applications that provide seamless user experiences and drive
              efficiency. Whether you need a dynamic front-end or a powerful
              back-end, I bring a results-driven approach to every project,
              ensuring that your business achieves its digital goals with
              innovative and reliable solutions.
            </p>
          </div>
          <div className="w-full h-max flex flex-col gap-3 justify-start items-start opacity-70 hover:opacity-100">
            <div className="w-full h-max flex flex-col justify-center items-start bg-white rounded-lg shadow-lg p-3 gap-3">
              <div className="w-full h-max">
                <p className="text-gray-600 font-body relative tracking-wider">
                  Delivery{" "}
                  <span className="text-gray-900 absolute right-0">100%</span>
                </p>
              </div>
              <div className="bg-green-400 rounded-full h-2 w-full"></div>
            </div>
            <div className="w-full h-max flex flex-col justify-center items-start bg-white rounded-lg shadow-lg p-3 gap-3">
              <div className="w-full h-max">
                <p className="text-gray-600 font-body relative">
                  Quality{" "}
                  <span className="text-gray-900 absolute right-0">90%</span>
                </p>
              </div>
              <div className="bg-orange-400 rounded-full h-2 w-11/12"></div>
            </div>
            <div className="w-full h-max flex flex-col justify-center items-start bg-white rounded-lg shadow-lg p-3 gap-3">
              <div className="w-full h-max">
                <p className="text-gray-600 font-body relative">
                  Time{" "}
                  <span className="text-gray-900 absolute right-0">80%</span>
                </p>
              </div>
              <div className="bg-blue-400 rounded-full h-2 w-4/5"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
