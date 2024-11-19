import { motion } from "framer-motion";

const ContactComponent = () => {
  return (
    <div className="w-screen h-max min-h-screen grid grid-cols-1 lg:grid-cols-3 sm:pt-[calc(16vh)] pt-[calc(11vh)] bg-black text-white  ">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        }}
        className="form-side lg:col-span-2 w-full h-max flex flex-col justify-center items-center gap-10"
      >
        <div className="header w-full h-max">
          <h1 className="w-full text-center font-bold font-body text-4xl text-gray-300 tracking-widest">
            Contact Me
          </h1>
        </div>
        <div className="form w-full h-max flex flex-col gap-5 2xl:px-36 xl:px-28 lg:px-16 sm:px-10 px-5  justify-start items-start">
          <div>
            <h1 className="font-heading font-semibold text-xl tracking-wider text-gray-300">
              Send me a message
            </h1>
          </div>
          <form
            action=""
            className="w-full h-max flex flex-col justify-start items-start gap-8"
          >
            <input
              type="text"
              required
              id="name"
              name="name"
              placeholder="Enter your name..."
              className="w-full h-12  caret-white placeholder-gray-400 bg-transparent border-b border-slate-300 text-sm font-body tracking-wide"
            />
            <input
              type="email"
              required
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full h-12  caret-white placeholder-gray-400 bg-transparent border-b border-slate-300 text-sm font-body tracking-wide"
            />
            <label
              htmlFor="message "
              className="w-full h-max flex flex-col justify-start items-start gap-3"
            >
              <p className="font-semibold font-heading tracking-wide">
                Message
              </p>
              <textarea
                name="message"
                id="message"
                placeholder="Type a message here..."
                className="focus:outline-none rounded-md min-w-full min-h-28 pl-2 pt-2 placeholder-gray-400 bg-transparent border border-slate-300 tracking-wider text-sm font-body"
              ></textarea>
            </label>
            <button className="w-max h-max py-2 px-4 bg-slate-300 text-gray-800 rounded-lg uppercase font-body tracking-wider flex flex-row items-center justify-center gap-5">
              <p>send</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7  rounded-full p-1 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </motion.div>
      <div className="left w-full h-full hidden lg:flex flex-row justify-center items-center  relative">
        <div className="animating-back-services ">
          <div className="wheel"></div>
          <div className="wheel"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
