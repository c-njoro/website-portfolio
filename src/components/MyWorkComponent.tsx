import { useState } from "react";

const ProjectsShowcase = () => {
  // Sample projects data - replace with your own projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Web Platform",
      description:
        "A full-stack e-commerce solution built with MERN stack featuring user authentication, product management, cart functionality, and payment integration.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Stripe API",
        "Next.js",
        "Tailwind CSS",
        "Javascript",
        "Typescript",
      ],
      image: "/images/c-techs.png", // Replace with your project image
      liveUrl: "https://c-techs-online-shop.vercel.app",
      githubUrl: "https://github.com/c-njoro/UserEnd",
      featured: true,
    },
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description:
        "A full-stack e-commerce solution built with MERN stack featuring user authentication, product management, cart functionality, and payment integration.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Stripe API",
        "React Native",
        "Expo",
        "React Navigation",
        "Redux Thunk",

        "Typescript",
      ],
      image:
        "https://images.pexels.com/photos/6331236/pexels-photo-6331236.jpeg", // Replace with your project image
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/c-njoro/comerce-mobile",
      featured: true,
    },
    {
      id: 2,
      title: "Real Estate Listing App",
      description:
        "A mobile-responsive web application for property listings with advanced search filters, user profiles, and appointment scheduling.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",

        "Typescript",
        "Google Maps API",
        "Next.js",
        "Tailwind CSS",
        "JWT",
        "React Admin",
      ],
      image:
        "https://images.pexels.com/photos/8470841/pexels-photo-8470841.jpeg", // Replace with your project image
      liveUrl: "https://real-estate-iota-teal.vercel.app",
      githubUrl: "https://github.com/c-njoro/real-estate",
      featured: true,
    },
    {
      id: 3,
      title: "Individual or Business Portfolio",
      description:
        "A responsive website for displaying personal or business profile and works to tell customers more about the services offered.",
      technologies: [
        "React",
        "Next.js",
        "Vercel",
        "Tailwind CSS",
        "JWT",
        "Typescript",
      ],
      image:
        "https://images.pexels.com/photos/7163361/pexels-photo-7163361.jpeg", // Replace with your project image
      liveUrl: "https://dev-charles.vercel.app",
      githubUrl: "https://github.com/c-njoro/website-portfolio",
      featured: false,
    },
    {
      id: 4,
      title: "SEO Analytics Dashboard",
      description:
        "A comprehensive SEO analytics tool that tracks website performance, keyword rankings, and provides optimization recommendations.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Chart.js",
        "Google Analytics API",
        "Next.js",
        "Tailwind CSS",
        "Typescript",
      ],
      image:
        "https://images.pexels.com/photos/5717758/pexels-photo-5717758.jpeg", // Replace with your project image
      liveUrl: "https://c-techs-online-shop.vercel.app",
      githubUrl: "https://github.com/c-njoro/UserEnd",
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
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    GitHub
                  </a>
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
