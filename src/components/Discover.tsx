import { motion } from "framer-motion";
import Image from "next/image";

const Discover = () => {
  return (
    <div
      className="main-discover-container w-screen  min-h-screen h-max relative flex flex-col justify-center items-center py-12 lg:py-5"
      style={{ background: "aliceblue" }}
    >
      <div className="animating-back">
        <div className="wheel"></div>
        <div className="wheel"></div>
      </div>
      <div className="discover 2xl:w-2/3 xl:w-3/4 w-4/5  h-max grid grid-cols-1 lg:grid-cols-2 place-items-center z-10 bg-transparent gap-8 px-5 lg:px-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="info-side w-full h-full flex flex-col justify-center items-start gap-12"
        >
          <div className="w-full h-max">
            {" "}
            <h1 className="info-side-h font-body font-extralight text-black xl:text-6xl tracking-wider 2xl:leading-relaxed leading-normal text-4xl capitalize">
              <span className="font-bold">What</span> i can{" "}
              <span className="font-bold">do</span> <br />
              for your <span className="font-bold">Business</span>
            </h1>
          </div>
          <div className="w-full h-max">
            <p className="font-heading tracking-wide font-light text-gray-700 flex flex-row justify-start  w-full lg:w-3/4 leading-relaxed lg:text-base text-sm">
              In today&apos;s digital world, a powerful online presence is key
              to business success. I specialize in creating custom websites that
              not only showcase your brand but also drive real results. From
              stunning designs to seamless functionality, I&apos;ll deliver a
              tailored solution that enhances customer engagement, boosts
              conversions, and streamlines operations. Whether you&apos;re
              looking to launch a new site or upgrade an existing one, I can
              help transform your vision into a digital experience that sets you
              apart from the competition.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="w-full h-max flex flex-row  justify-start items-center gap-3"
          >
            <div className="w-max h-max">
              <Image
                width={400}
                height={400}
                src="/images/charles.jpeg"
                loading="lazy"
                className="image w-24 h-24 object-cover rounded-full shadow-md relative"
                alt="image of the developer"
              ></Image>
            </div>

            <div className="w-max h-max flex flex-col justify-center items-start">
              <p className="font-heading tracking-wider font-thin  text-gray-900 leading-loose capitalize xl:text-base lg:text-sm text-xs">
                <span className="font-bold">Passionately Creating</span>{" "}
                wonderful designs:
              </p>
              <p className="font-heading tracking-wider font-thin  text-gray-900 leading-loose capitalize xl:text-base lg:text-sm text-xs">
                <span className="font-bold">Unleashing</span> wonderful
                boundless creativity
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="image-side w-full lg:h-full h-max flex flex-col justify-center items-center"
        >
          <Image
            width={900}
            height={1000}
            src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg"
            loading="lazy"
            className="big-image h-3/4 xl:w-4/5 lg:w-11/12 w-full object-cover min-h-[calc(70vh)]"
            alt="work image"
          ></Image>
        </motion.div>
      </div>
    </div>
  );
};

export default Discover;
