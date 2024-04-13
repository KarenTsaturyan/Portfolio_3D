import React from "react";
import { languages, skills } from "../constants/main";

const Skills = () => {
  return (
    <section className="max-container">
      {/* Skills Section */}
      <h1 className="text-3xl font-bold mt-16 mb-8 text-center">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-16">
        {skills.map((skill) => (
          <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 relative">
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-75 w-full h-full flex items-center justify-center">
                <p className="text-white text-sm font-semibold">{skill.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Languages Section */}
      <h1 className="text-3xl font-bold mt-12 mb-8 text-center">Languages</h1>
      <div className="flex flex-wrap justify-between">
        {languages.map((language) => (
          <div
            className="bg-white rounded-lg shadow hover:shadow-lg p-4 w-40 transition duration-300"
            key={language.name}
          >
            {language.iconUrl && (
              <img
                src={language.iconUrl}
                alt={language.name}
                className="w-12 h-12 mx-auto"
              />
            )}
            <div className="text-center mt-2">
              <h2 className="font-semibold">{language.name}</h2>
              <p className="text-gray-600">{language.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
