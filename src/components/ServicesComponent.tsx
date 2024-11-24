import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const ServicesComponent = () => {
  const router = useRouter();
  return (
    <div className="main-services-component w-screen h-max flex flex-col gap-6 sm:pt-28 pt-3 bg-black text-white">
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
        <p className="font-body font-thin tracking-wide text-xs sm:text-sm flex flex-col justify-center items-end hover:cursor-not-allowed">
          Services
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
        <h1 className="w-3/4 font-thin font-body md:text-7xl sm:text-6xl text-5xl leading-normal tracking-wide">
          <span className="font-semibold">This is</span> what <br />{" "}
          <span className="font-semibold">I do</span> best
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

      <div className="services-container w-full h-max flex flex-col justify-center items-center mt-12">
        <div className="services-list xl:w-3/4 w-5/6 h-max min-h-[calc(100vh)] flex flex-row justify-start items-center">
          <div className="left w-1/3 h-full hidden lg:flex flex-row justify-center items-center  relative">
            <div className="animating-back-services">
              <div className="wheel"></div>
              <div className="wheel"></div>
            </div>
          </div>

          <div className="right lg:w-2/3 w-full h-max grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="one-side flex flex-col gap-16 w-full h-full justify-start">
              <div className="space-above w-full h-10 hidden lg:flex"></div>
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                }}
                className="service  w-full h-max flex flex-col gap-2"
              >
                <h1 className="font-bold font-heading text-2xl w-full lg:w-3/4 tracking-wider leading-relaxed">
                  Website Design and Development
                </h1>

                <p className="paragraph w-full lg:w-3/4 font-body font-thin tracking-wide text-sm">
                  My creativity and elegance is here to help you develop a
                  website for your brand to help you grow.
                </p>
                <div className="explanations">
                  <p>creative</p>
                  <p>appealing</p>
                  <p>ui ux</p>
                  <p>fast navigation</p>
                </div>

                <button className="flex flex-row items-center justify-start gap-5  font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm text-orange-500">
                  <p>Read more</p>
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
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                }}
                className="service  w-full h-max flex flex-col gap-2"
              >
                <h1 className="font-bold font-heading text-2xl w-full lg:w-3/4 tracking-wider leading-relaxed">
                  WebApp Development
                </h1>

                <p className="paragraph w-full lg:w-3/4 font-body font-thin tracking-wide text-sm">
                  My creativity and elegance is here to help you develop a
                  website for your brand to help you grow.
                </p>
                <div className="explanations">
                  <p>database</p>
                  <p>frontend</p>
                  <p>fast api</p>
                  <p>simple navigation</p>
                </div>

                <button className="flex flex-row items-center justify-start gap-5  font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm text-orange-500">
                  <p>Read more</p>
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
                </button>
              </motion.div>
            </div>

            <div className="one-side flex flex-col gap-16 w-full h-full justify-start">
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                }}
                className="service  w-full h-max flex flex-col gap-2"
              >
                <h1 className="font-bold font-heading text-2xl w-full lg:w-3/4 tracking-wider leading-relaxed">
                  Mobile App development
                </h1>

                <p className="paragraph w-full lg:w-3/4 font-body font-thin tracking-wide text-sm">
                  My creativity and elegance is here to help you develop a
                  website for your brand to help you grow.
                </p>
                <div className="explanations">
                  <p>appealing</p>
                  <p>fast</p>
                  <p>database</p>
                  <p>smooth</p>
                </div>

                <button className="flex flex-row items-center justify-start gap-5  font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm text-orange-500">
                  <p>Read more</p>
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
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                }}
                className="service  w-full h-max flex flex-col gap-2"
              >
                <h1 className="font-bold font-heading text-2xl w-full lg:w-3/4 tracking-wider leading-relaxed">
                  System repair
                </h1>

                <p className="paragraph w-full lg:w-3/4 font-body font-thin tracking-wide text-sm">
                  I can learn your code base to fix any isues you have been
                  having with it to restore your sysytem to 100% efficiency.
                </p>
                <div className="explanations">
                  <p>Node</p>
                  <p>Next & React</p>
                  <p>backend</p>
                  <p>All systems</p>
                </div>

                <button className="flex flex-row items-center justify-start gap-5  font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm text-orange-500">
                  <p>Read more</p>
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
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="impact-part w-full h-max min-h-[calc(60vh)] flex flex-col justify-start gap-12 text-black"
        style={{ backgroundColor: "rgb(239, 248, 255)" }}
      >
        <motion.div
          initial={{ opacity: 0, x: 250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="top w-full h-[calc(10vh)] flex flex-row justify-end items-end gap-8"
        >
          <p
            className="font-body font-light capitalize tracking-wide text-xs sm:text-sm flex flex-col justify-center items-end"
            style={{
              lineHeight: "15px",
              color: "rgba(128, 128, 128, 0.86)",
            }}
          >
            Looking to make your mark? We&apos;ll help you turn <br /> your
            project into a success
          </p>
          <div
            className="line-through w-0 sm:w-1/3 h-7"
            style={{
              borderTop: "1px solid rgba(128, 128, 128, 0.405)",
            }}
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -250 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="bottom w-full h-max flex flex-col gap-12 justify-center items-center pb-8"
        >
          <div className="big-text w-full h-max flex flex-col justify-center items-center">
            <h1 className="font-body font-thin xl:text-7xl lg:text-6xl md:text-5xl text-2xl capitalize tracking-wider leading-relaxed">
              <span className="font-bold xl:text-7xl lg:text-6xl md:text-5xl text-2xl">
                Let&apos;s make an
              </span>{" "}
              impact{" "}
            </h1>
            <h1 className="font-body font-thin xl:text-7xl lg:text-6xl md:text-5xl text-2xl capitalize tracking-wider leading-relaxed">
              <span className="font-bold xl:text-7xl lg:text-6xl md:text-5xl text-2xl">
                together. Ready
              </span>{" "}
              when you are
            </h1>
          </div>

          <button
            onClick={() => router.push("/contact")}
            className="flex flex-row items-center justify-center py-3 px-7 gap-5  font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm text-black bg-orange-500"
          >
            <p>Contact Me Now</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon sm:size-9 size-7  p-2 text-orange-500 rounded-full shadow-md bg-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesComponent;
