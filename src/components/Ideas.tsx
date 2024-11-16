import { motion } from "framer-motion";

const Ideas = () => {
  return (
    <div className="w-screen md:h-[calc(90vh)] h-max relative flex flex-col justify-between items-center text-white pt-8 gap-16 bg-black">
      <div className="w-full h-[calc(10vh)] flex flex-row justify-end items-end gap-8">
        <div>
          <p
            className="font-body font-thin tracking-wide text-xs sm:text-sm flex flex-col justify-center items-end"
            style={{ lineHeight: "15px" }}
          >
            <span>Professional focused on helping your brand </span>
            <span>grow and move forward</span>
          </p>
        </div>

        <div className="w-1/5 sm:w-1/3 h-7 border-t border-gray-500"></div>
      </div>

      <div className="w-full h-max flex flex-col gap-12 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className=" h-max flex flex-col sm:flex-row justify-center items-center sm:gap-12 gap-5"
        >
          <div className="w-full h-max flex flex-col justify-center items-center">
            <button
              className="w-72 h-16 rounded-full"
              style={{
                background: `url("https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg")`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            ></button>
          </div>
          <div className="w-max h-max ">
            <h1 className="lg:text-7xl md:text-5xl text-3xl tracking-wider font-body font-thin flex flex-row gap-5">
              <span className="font-bold">Unique</span> Ideas
            </h1>
          </div>
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
          className="  h-max flex flex-col-reverse sm:flex-row-reverse justify-center items-center sm:gap-12 gap-5"
        >
          <div className="w-full h-max">
            <button className="w-72 h-16 flex flex-row justify-around items-center bg-blue-300 rounded-full ">
              <p>What i do</p>
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
          </div>
          <div className="w-max h-max">
            <h1 className="lg:text-7xl md:text-5xl text-3xl tracking-wider font-body font-thin flex flex-row gap-5">
              <span className="font-bold w-max">For your</span> Business
            </h1>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        }}
        className="card-section h-3/5 w-full flex flex-row items-end justify-center"
      >
        <div className="card-holder w-11/12  xl:w-3/4 2xl:w-2/3 h-max grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-r border-gray-800">
          <div className="card w-full h-max border-l  border-gray-800 grid grid-cols-1 gap-6 py-10 px-3 relative border-t md:border-t-0">
            <div className="w-full h-max">
              <h1 className="font-heading font-semibold text-lg capitalize text-white w-full h-12">
                Branding and Identity Design
              </h1>
            </div>
            <div className="w-full h-max">
              <p
                className="card-p w-full h-max min-h-28 pt-3 font-body font-light text-gray-400 translate-y-0 opacity-100 md:translate-y-6 md:opacity-0"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                Our team of agency is a group of professionals focused on
                helping your brand grow{" "}
              </p>
            </div>
            <div className="w-full h-max">
              <button
                className="card-button w-full h-16 flex flex-row items-center justify-start gap-5 
             font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm shadow-md opacity-100 md:opacity-50"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon bg-white size-10 md:size-3 p-2 text-black rounded-full shadow-md"
                  style={{ transition: "all 500ms ease-in-out" }}
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

          <div className="card w-full h-max border-l  border-gray-800 grid grid-cols-1 gap-6 py-10 px-3 relative border-t md:border-t-0">
            <div className="w-full h-max">
              <h1 className="font-heading font-semibold text-lg capitalize text-white w-full h-12">
                Branding and Identity Design
              </h1>
            </div>
            <div className="w-full h-max">
              <p
                className="card-p w-full h-max min-h-28 pt-3 font-body font-light text-gray-400 translate-y-0 opacity-100 md:translate-y-6 md:opacity-0"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                Our team of agency is a group of professionals focused on
                helping your brand grow{" "}
              </p>
            </div>
            <div className="w-full h-max">
              <button
                className="card-button w-full h-16 flex flex-row items-center justify-start gap-5 
             font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm shadow-md opacity-100 md:opacity-50"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon bg-white size-10 md:size-3 p-2 text-black rounded-full shadow-md"
                  style={{ transition: "all 500ms ease-in-out" }}
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

          <div className="card w-full h-max border-l  border-gray-800 grid grid-cols-1 gap-6 py-10 px-3 relative border-t md:border-t-0">
            <div className="w-full h-max">
              <h1 className="font-heading font-semibold text-lg capitalize text-white w-full h-12">
                Branding and Identity Design
              </h1>
            </div>
            <div className="w-full h-max">
              <p
                className="card-p w-full h-max min-h-28 pt-3 font-body font-light text-gray-400 translate-y-0 opacity-100 md:translate-y-6 md:opacity-0"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                Our team of agency is a group of professionals focused on
                helping your brand grow{" "}
              </p>
            </div>
            <div className="w-full h-max">
              <button
                className="card-button w-full h-16 flex flex-row items-center justify-start gap-5 
             font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm shadow-md opacity-100 md:opacity-50"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon bg-white size-10 md:size-3 p-2 text-black rounded-full shadow-md"
                  style={{ transition: "all 500ms ease-in-out" }}
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

          <div className="card w-full h-max border-l  border-gray-800 grid grid-cols-1 gap-6 py-10 px-3 relative border-t md:border-t-0">
            <div className="w-full h-max">
              <h1 className="font-heading font-semibold text-lg capitalize text-white w-full h-12">
                Branding and Identity Design
              </h1>
            </div>
            <div className="w-full h-max">
              <p
                className="card-p w-full h-max min-h-28 pt-3 font-body font-light text-gray-400 translate-y-0 opacity-100 md:translate-y-6 md:opacity-0"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                Our team of agency is a group of professionals focused on
                helping your brand grow{" "}
              </p>
            </div>
            <div className="w-full h-max">
              <button
                className="card-button w-full h-16 flex flex-row items-center justify-start gap-5 
             font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm shadow-md opacity-100 md:opacity-50"
                style={{ transition: "all 500ms ease-in-out" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon bg-white size-10 md:size-3 p-2 text-black rounded-full shadow-md"
                  style={{ transition: "all 500ms ease-in-out" }}
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
    </div>
  );
};

export default Ideas;
