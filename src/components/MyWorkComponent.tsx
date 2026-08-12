import { useState } from "react";

const ProjectsShowcase = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Tixflow — Event Ticketing & Door Check-In",
      description:
        "A ticketing platform for event organizers: branded event storefronts, flexible pricing tiers, QR-based door check-in, scanner-only staff accounts, a real-time sales dashboard, and payouts that go straight to the organizer's own account — no monthly fee, just a small percentage per ticket sold.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "Payments API",
        "Tailwind CSS",
      ],
      image:
        "/images/projects/tixflow.png",
      liveUrl: "https://tixflow-smoky.vercel.app",
      githubUrl: "",
      featured: true,
    },
    {
      id: 2,
      title: "eazyBill — Multi-Tenant ISP Billing Platform",
      description:
        "A multi-tenant SaaS version of the ISP management platform I built and run in production for my own internet service provider, repackaged so other ISPs can run their subscriber billing, PPPoE/hotspot RADIUS authentication, and network operations on it as tenants, with data isolated across a shared MongoDB and FreeRADIUS instance.",
      technologies: [
        "React",
        "Typescript",
        "Node.js",
        "MongoDB",
        "FreeRADIUS",
        "MikroTik RouterOS API",
        "Docker",
      ],
      image:
        "/images/projects/eazybill.png",
      liveUrl: "https://eazy-bill-demo.vercel.app",
      githubUrl: "",
      featured: true,
    },
    {
      id: 3,
      title: "Fleet Tracking Dashboard",
      description:
        "A live fleet and field-technician tracking dashboard paired with a companion mobile app. Technician locations, movement, and speed stream in over a live connection, with shift management so operators can see who's on the road in real time.",
      technologies: [
        "React",
        "Typescript",
        "Node.js",
        "Real-time / WebSockets",
        "MongoDB",
        "Mobile App",
      ],
      image:
        "/images/projects/fleet-tracking.png",
      liveUrl: "https://fleet-tracking-eight.vercel.app",
      githubUrl: "",
      featured: true,
    },
    {
      id: 4,
      title: "FundiConnect — Skilled Trades Marketplace",
      description:
        "A marketplace connecting people who need home-service work done with vetted local tradespeople (\"fundis\") — plumbers, electricians, carpenters, and more. Customers post a job and location and get competitive quotes from qualified fundis nearby; fundis get a steady way to find and manage new work.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      image:
        "/images/projects/fundiconnect.png",
      liveUrl: "https://fundiconnect-seven.vercel.app",
      githubUrl: "",
      featured: true,
    },
    {
      id: 5,
      title: "Kenya ProHaul Logistics",
      description:
        "A full business website for a Kenyan trucking and logistics company — fleet showcase by vehicle type, services broken down by cargo type, an interactive quote calculator, shipment tracking, and a team and contact section, built to give a transport operator a credible, professional online presence.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "Tailwind CSS",
      ],
      image:
        "/images/projects/prohaul.png",
      liveUrl: "https://pro-haul-logistics.vercel.app",
      githubUrl: "",
      featured: true,
    },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.technologies.includes(filter));

  return (
    <div className="bg-black py-16 w-screen h-max font-body">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === "featured"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setFilter("React")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === "React"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              React
            </button>
            <button
              onClick={() => setFilter("Next.js")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === "Next.js"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              Next.js
            </button>
            <button
              onClick={() => setFilter("Node.js")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === "Node.js"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              Node.js
            </button>
            <button
              onClick={() => setFilter("MongoDB")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === "MongoDB"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              MongoDB
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className=" bg-zinc-950 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-zinc-900 "
            >
              <div className="relative pb-2/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
