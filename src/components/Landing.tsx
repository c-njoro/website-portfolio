import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter();
  return (
    <div className="the-landing-page w-screen h-screen relative flex flex-col justify-end items-start bg-black">
      <motion.div
        initial={{ opacity: 0, y: -250 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        }}
        className="w-full text-gray-400 h-full pl-5 2xl:pl-72 xl:pl-56 lg:pl-40 md:pl-24  flex flex-col justify-end items-start gap-10 pb-[calc(15vh)]"
      >
        <div className="w-full h-max">
          <h1 className="capitalize font-thin text-white font-body  tracking-widest text-4xl sm:text-6xl lg:text-7xl">
            Hello, am <span className="font-bold">Charles</span>.
          </h1>
        </div>
        <div className="w-full h-max">
          <h1 className="capitalize font-thin text-white font-body  tracking-widest text-4xl sm:text-6xl lg:text-7xl">
            <span className="font-bold">Software </span>Engineer
          </h1>
        </div>
        <div className="w-full h-max">
          <p className="h-max w-full md:w-1/2 xl:w-1/3 tracking-wide font-thin text-sm sm:text-base">
            A Full-Stack Developer dedicated to creating professional,
            high-performance websites web apps and mobile apps for businesses.
            Whether you need an online presence or a custom solution, I’m here
            to turn your ideas into reality.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-full h-max flex flex-row items-center justify-start gap-8"
        >
          <button
            onClick={() => router.push("/services")}
            style={{
              transition: "all 300ms ease-in-out",
            }}
            className="bg-gray-500 flex flex-row items-center justify-center gap-5 py-2 px-5 sm:px-7 font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm hover:translate-x-2"
          >
            <p className="button-p">My Services</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon bg-white sm:size-10 size-7  p-2 text-black rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>

          <a
            href="/files/Charles_Njoroge_Resume.pdf"
            download
            className="border-2 border-gray-500 flex flex-row items-center justify-center gap-5 py-2 px-5 sm:px-7 font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm hover:translate-x-2 transition-all duration-300 ease-in-out"
          >
            <p className="button-p">Download CV</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon bg-gray-500 sm:size-10 size-7 p-2 text-black rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 3v13.5m0 0l-4.5-4.5m4.5 4.5l4.5-4.5"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;
