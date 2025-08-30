// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../content.js";
import "./Skills.css"; // import custom css

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 p-5 font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-green-500 mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 w-full">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="skill-card bg-gray-900 backdrop-blur-md px-6 sm:px-8 py-8 sm:py-6 rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Items */}
          <div className="grid grid-cols-2 gap-5">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-item space-y-2 text-center"
              >
                {/* Image */}
                <div className="flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>

                {/* Name */}
                <span className="text-xs sm:text-sm text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
