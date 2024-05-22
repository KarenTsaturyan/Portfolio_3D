import { Link } from "react-router-dom";

import { projects } from "../constants/main";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <div className="text-center">
        <span className="fixed top-12 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 bg-white shadow-md inline-block mb-4 text-sm text-red-700 font-poppins">
          Tap or hover on cards to see the button!
        </span>

        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Projects
          </span>
          🏗️
        </h1>
        <p className="text-gray-600 md:max-w-md mx-auto">
          Explore the projects that mark my journey as a junior full-stack
          engineer. Each one, crafted with dedication and open for exploration,
          reflects my commitment to learning and growth. These projects are a
          reflection of my growth and development in the technology industry.
        </p>
      </div>

      <div className="flex justify-between flex-wrap my-16 gap-16">
        {projects.map((project) => (
          <div
            className={
              "max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 group"
            }
            key={project.name}
          >
            <img
              src={project.iconUrl}
              alt={project.name}
              className="w-full h-56 object-cover object-center transform scale-150 transition-transform duration-500 group-hover:scale-100"
            />
            <div className="flex items-center px-6 py-3 bg-gray-900">
              <svg
                className="h-6 w-6 text-white fill-current"
                viewBox="0 0 512 512"
              >
                <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
              </svg>
              <h1 className="mx-3 text-white font-semibold text-lg flex items-center font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-blue-600 py-1 px-3 rounde transition-colors"
                >
                  Explore
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </h1>
            </div>
            <div className="py-4 px-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                {project.name}
              </h1>
              <p className="py-2 text-lg text-gray-700">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
