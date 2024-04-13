import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <div className="relative text-center">
          <div className="p-2 bg-white rounded-md shadow-md shadow-deepPurple/50">
            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-deepPurple to-brightViolet">
              KT
            </p>
          </div>
        </div>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Skills
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
