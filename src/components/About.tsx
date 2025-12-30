import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcSupport } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import LinkedInBadge from "./LinkedInBadge";
import GitHubBadge from "./GitHubBadge";

const About = () => {
  return (
    <div className="w-screen min-h-[calc(95vh)] h-max relative flex flex-col justify-center items-center py-12 lg:py-8 bg-slate-200">
      <div className="animating-back">
        <div className="wheel"></div>
        <div className="wheel"></div>
      </div>

      <div className="2xl:w-2/3 xl:w-4/5 w-11/12 h-max flex flex-col lg:flex-row items-center justify-evenly z-10 bg-transparent gap-8 lg:gap-12 px-5 lg:px-0">
        {/* Left Column - Profile Image */}

        {/* Middle Column - About Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            type: "spring",
            stiffness: 80,
          }}
          className="w-full lg:w-2/5 flex flex-col gap-6"
        >
          <div className="space-y-4">
            <h1 className="font-body font-bold tracking-wider uppercase text-4xl text-gray-900">
              About Me
            </h1>
            <p className="font-heading tracking-wide text-gray-700 leading-relaxed text-base lg:text-lg">
              I am an experienced full-stack web and mobile developer with a
              proven track record of delivering high-quality, scalable solutions
              tailored to meet business needs. I specialize in creating robust
              websites and web applications that provide seamless user
              experiences and drive efficiency.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <span className="font-bold text-2xl text-orange-600">5+</span>
                </div>
                <span className="font-body font-semibold text-gray-800">
                  Years Experience
                </span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <span className="font-bold text-2xl text-green-600">
                    100%
                  </span>
                </div>
                <span className="font-body font-semibold text-gray-800">
                  Client Satisfaction
                </span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-yellow-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <MdAccessTime className="text-2xl text-yellow-600" />
                </div>
                <span className="font-body font-semibold text-gray-800">
                  Timely Delivery
                </span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FcSupport className="text-2xl" />
                </div>
                <span className="font-body font-semibold text-gray-800">
                  Post-Service Support
                </span>
              </div>
            </div>
          </div>

          {/* Additional description */}
          <p className="font-heading tracking-wide text-gray-600 leading-relaxed text-sm lg:text-base mt-2">
            Whether you need a dynamic front-end or a powerful back-end, I bring
            a results-driven approach to every project, ensuring that your
            business achieves its digital goals with innovative and reliable
            solutions.
          </p>
        </motion.div>

        {/* Right Column - Badges */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            type: "spring",
            stiffness: 80,
          }}
          className="w-full lg:w-1/3 flex flex-col gap-6"
        >
          {/* LinkedIn Badge */}
          <div className="bg-white rounded-xl shadow-xl p-5 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <FaLinkedinIn className="text-blue-600 text-xl" />
              <h3 className="font-body font-semibold text-gray-800">
                LinkedIn Profile
              </h3>
            </div>
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <LinkedInBadge />
            </div>
            <p className="text-sm text-gray-600 mt-3 text-center">
              Connect for professional networking
            </p>
          </div>

          {/* GitHub Badge */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl p-5 border border-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-gray-800 rounded-lg">
                <FiGithub className="text-white text-lg" />
              </div>
              <h3 className="font-body font-semibold text-white">
                GitHub Profile
              </h3>
            </div>
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <GitHubBadge />
            </div>
            <p className="text-sm text-gray-400 mt-3 text-center">
              Explore my projects and contributions
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
