import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// A network-topology signature — nodes and links animating in on load.
// A literal nod to the RADIUS/GPON network infrastructure Charles builds,
// standing in for the old face-photo background.
const nodes = [
  { id: 0, x: 680, y: 90, r: 4 },
  { id: 1, x: 800, y: 150, r: 3 },
  { id: 2, x: 580, y: 170, r: 3 },
  { id: 3, x: 860, y: 230, r: 4 },
  { id: 4, x: 720, y: 240, r: 7, hub: true },
  { id: 5, x: 500, y: 260, r: 3 },
  { id: 6, x: 640, y: 330, r: 4 },
  { id: 7, x: 780, y: 370, r: 3 },
  { id: 8, x: 440, y: 380, r: 3 },
  { id: 9, x: 860, y: 420, r: 4 },
  { id: 10, x: 600, y: 440, r: 3 },
  { id: 11, x: 720, y: 470, r: 5 },
  { id: 12, x: 500, y: 520, r: 3 },
  { id: 13, x: 820, y: 540, r: 4 },
  { id: 14, x: 650, y: 590, r: 3 },
  { id: 15, x: 440, y: 600, r: 3 },
  { id: 16, x: 760, y: 650, r: 4 },
  { id: 17, x: 560, y: 700, r: 3 },
  { id: 18, x: 680, y: 740, r: 3 },
  { id: 19, x: 480, y: 760, r: 3 },
];

const edges: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 4],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 4],
  [3, 7],
  [4, 6],
  [4, 7],
  [5, 6],
  [5, 8],
  [6, 10],
  [6, 11],
  [7, 9],
  [7, 11],
  [8, 10],
  [8, 12],
  [9, 11],
  [9, 13],
  [10, 11],
  [10, 12],
  [11, 13],
  [11, 14],
  [12, 14],
  [12, 15],
  [13, 16],
  [14, 16],
  [14, 17],
  [15, 17],
  [16, 18],
  [17, 18],
  [17, 19],
  [18, 19],
];

const nodeById = (id: number) => nodes.find((n) => n.id === id)!;

const NetworkSignature = () => {
  return (
    <svg
      viewBox="0 0 900 900"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {edges.map(([a, b], i) => {
        const from = nodeById(a);
        const to = nodeById(b);
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="#81c7ed"
            strokeWidth={1}
            strokeOpacity={0.3}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 1,
              delay: 0.3 + i * 0.045,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {nodes.map((n) => (
        <motion.circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={n.hub ? "#81c7ed" : "#9fd6f2"}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: n.hub ? 1 : 0.75 }}
          transition={{
            duration: 0.5,
            delay: 0.5 + n.id * 0.05,
            ease: "backOut",
          }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}

      {/* Hub pulse — the one place this graphic keeps moving after load */}
      {nodes
        .filter((n) => n.hub)
        .map((n) => (
          <motion.circle
            key={`pulse-${n.id}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="none"
            stroke="#81c7ed"
            strokeWidth={1.5}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: [1, 2.8], opacity: [0.6, 0] }}
            transition={{
              duration: 2.4,
              delay: 1.6,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
        ))}
    </svg>
  );
};

const Landing = () => {
  const router = useRouter();
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
  }, []);

  return (
    <div
      className="the-landing-page w-screen h-screen relative overflow-hidden flex flex-col justify-end items-start"
      style={{ backgroundColor: "#030303", backgroundImage: "none" }}
    >
      <div className="hidden md:block absolute inset-y-0 right-0 w-3/4 lg:w-3/5 pointer-events-none">
        <NetworkSignature />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -250 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        }}
        className="relative z-10 w-full text-gray-400 h-full pl-5 2xl:pl-72 xl:pl-56 lg:pl-40 md:pl-24  flex flex-col justify-end items-start gap-8 pb-[calc(15vh)]"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-row items-center gap-3"
        >
          <span
            className="inline-block h-px w-6"
            style={{ backgroundColor: "#81c7ed" }}
          ></span>
          <p className="uppercase font-body tracking-[0.25em] text-[11px] sm:text-xs text-gray-500">
            {today}
          </p>
        </motion.div>

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
            A Full-Stack Developer dedicated to building professional,
            high-performance websites, web apps, mobile apps, and full
            business platforms — from ticketing and marketplace apps to a
            live multi-tenant ISP billing and network management system.
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