import { motion } from "framer-motion";
import Image from "next/image";

const Works = () => {
  return (
    <div className="main-works-container w-screen h-max min-h-screen relative flex flex-col justify-center items-center py-12 lg:py-5 bg-pink-100 overflow-hidden">
      <div className="animating-back">
        <div className="wheel"></div>
        <div className="wheel"></div>
      </div>

      <div className="my-work 2xl:w-2/3 xl:w-3/4 w-4/5  h-max grid grid-cols-1 lg:grid-cols-2 place-items-center z-10 bg-transparent gap-12 px-5 lg:px-0 ">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="images-side w-full h-max grid grid-cols-1 sm:grid-cols-2 gap-12"
        >
          <div className="images-holder w-full h-max flex flex-col gap-8">
            <div className="one-image relative w-full h-max flex flex-col justify-center items-center">
              <div className="w-full h-max">
                {" "}
                <Image
                  width={900}
                  height={1000}
                  src="https://images.pexels.com/photos/7172858/pexels-photo-7172858.jpeg"
                  loading="lazy"
                  className="big-image w-full h-80 object-cover shadow-md"
                  alt="work image"
                ></Image>
              </div>
              <div
                className="work-name absolute w-full h-max flex flex-row justify-center text-xl items-center py-1 tracking-wider font-body font-bold uppercase text-black translate-y-0 opacity-100 md:translate-y-6 md:opacity-0"
                style={{
                  transition: "all 500ms ease-in-out",
                  backgroundColor: "rgba(255, 192, 203, 0.607)",
                }}
              >
                <p>E-Commerce WebApp</p>
              </div>
              <div
                className="work-button absolute w-full h-16 flex flex-row items-center justify-center gap-5 mt-40
               font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm opacity-100 md:opacity-50"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon size-10 md:size-3 p-2 text-white rounded-full shadow-md"
                    style={{
                      backgroundColor: "rgb(255, 148, 166)",
                      transition: "all 500ms ease-in-out",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="one-image relative w-full h-max flex flex-col justify-center items-center">
              <div className="w-full h-max">
                {" "}
                <Image
                  width={900}
                  height={1000}
                  src="https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg"
                  loading="lazy"
                  className="big-image w-full h-80 object-cover shadow-md"
                  alt="work image"
                ></Image>
              </div>
              <div
                className="work-name absolute w-full h-max flex flex-row justify-center text-xl items-center py-1 tracking-wider font-body font-bold uppercase text-black translate-y-0 opacity-100 md:translate-y-6 md:opacity-0"
                style={{
                  transition: "all 500ms ease-in-out",
                  backgroundColor: "rgba(255, 192, 203, 0.607)",
                }}
              >
                <p>POS Restaurant</p>
              </div>
              <div
                className="work-button absolute w-full h-16 flex flex-row items-center justify-center gap-5 mt-40
               font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm opacity-100 md:opacity-50"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon size-10 md:size-3 p-2 text-white rounded-full shadow-md"
                    style={{
                      backgroundColor: "rgb(255, 148, 166)",
                      transition: "all 500ms ease-in-out",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="images-holder w-full h-max flex flex-col gap-8">
            <div className="w-full h-max">
              <p className="top-p font-body tracking-wide text-sm text-gray-400">
                Some of Charles&apos; great works
              </p>
            </div>

            <div className="one-image relative w-full h-max flex flex-col justify-center items-center">
              <div className="w-full h-max">
                {" "}
                <Image
                  width={900}
                  height={1000}
                  src="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg"
                  loading="lazy"
                  className="big-image w-full h-80 object-cover shadow-md"
                  alt="work image"
                ></Image>
              </div>
              <div
                className="work-name absolute w-full h-max flex flex-row justify-center text-xl items-center py-1 tracking-wider font-body font-bold uppercase text-black translate-y-0 opacity-100 md:translate-y-6 md:opacity-0"
                style={{
                  transition: "all 500ms ease-in-out",
                  backgroundColor: "rgba(255, 192, 203, 0.607)",
                }}
              >
                <p>Meditation Mobile App</p>
              </div>
              <div
                className="work-button absolute w-full h-16 flex flex-row items-center justify-center gap-5 mt-40
               font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm opacity-100 md:opacity-50"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon size-10 md:size-3 p-2 text-white rounded-full shadow-md"
                    style={{
                      backgroundColor: "rgb(255, 148, 166)",
                      transition: "all 500ms ease-in-out",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="one-image relative w-full h-max flex flex-col justify-center items-center">
              <div className="w-full h-max">
                {" "}
                <Image
                  width={900}
                  height={1000}
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                  loading="lazy"
                  className="big-image w-full h-80 object-cover shadow-md"
                  alt="work image"
                ></Image>
              </div>
              <div
                className="work-name absolute w-full h-max flex flex-row justify-center text-xl items-center py-1 tracking-wider font-body font-bold uppercase text-black translate-y-0 opacity-100 md:translate-y-6 md:opacity-0"
                style={{
                  transition: "all 500ms ease-in-out",
                  backgroundColor: "rgba(255, 192, 203, 0.607)",
                }}
              >
                <p>USSD Betting App</p>
              </div>
              <div
                className="work-button absolute w-full h-16 flex flex-row items-center justify-center gap-5 mt-40
               font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm opacity-100 md:opacity-50"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon size-10 md:size-3 p-2 text-white rounded-full shadow-md"
                    style={{
                      backgroundColor: "rgb(255, 148, 166)",
                      transition: "all 500ms ease-in-out",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="info-side w-full h-max flex flex-col gap-12 justify-center items-start lg:pl-12"
        >
          <div className="w-full h-max">
            <h1 className="info-heading w-full flex flex-col justify-center items-start lg:text-7xl md:text-5xl text-3xl  capitalize font-heading font-semibold">
              view <br /> my work{" "}
            </h1>
          </div>
          <div className="w-full h-max">
            <p className="info-p font-heading tracking-wide font-light text-gray-700 flex flex-row justify-start  w-full lg:w-3/4 leading-relaxed lg:text-base text-sm">
              Here you&apos;ll find a selection of projects showcasing my skills
              in full-stack development, UI/UX design, and creative
              problem-solving. From building robust web applications to crafting
              visually engaging interfaces, each project reflects my passion for
              creating seamless digital experiences. Explore the details to see
              how I bring ideas to life through code.
            </p>
          </div>
          <div className="w-full h-max">
            <button
              className="info-button  md:min-w-72 min-w-56 h-16 flex flex-row items-center justify-center gap-5 
             font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm shadow-lg bg-pink-200 px-3"
            >
              <p className="button-p font-bold">Read more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon size-10 md:size-9 p-2 text-white rounded-full shadow-md"
                style={{
                  backgroundColor: "rgb(255, 148, 166)",
                  transition: "all 500ms ease-in-out",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div className="w-full h-max">
            {" "}
            <h2 className="info-h2 font-extralight text-2xl font-body tracking-wide">
              I <span className="font-semibold">deliver</span> <br />{" "}
              exceptional <span className="font-semibold">results</span>.
            </h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
