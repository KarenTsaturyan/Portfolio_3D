import { Link } from "react-router-dom";

import { projects } from "../constants/main";
import { arrow } from "../assets/icons";
import { hero } from "../assets/images";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg overflow-hidden' key={project.name}>
          <div className='h-40 overflow-hidden'>
            <img
              src={project.iconUrl}
              alt={project.name}
              className='w-full h-full object-cover transform scale-110 hover:scale-100 transition-transform duration-500'
            />
          </div>
        
          <div className='p-4'>
            <h4 className='text-2xl font-poppins font-bold'>
              {project.name}
            </h4>
            <p className='text-sm opacity-90 mt-1'>
              {project.description}
            </p>
            <Link
              to={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block mt-3 text-sm font-semibold bg-white text-blue-600 py-1 px-3 rounded hover:bg-gray-100 transition-colors'
            >
              Explore
            </Link>
          </div>
        </div>
        ))}
      </div>

      <hr className="border-slate-200" />
    </section>
  );
};

export default Projects;
