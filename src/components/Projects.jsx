import React from "react";
import ProjectItem from "./ProjectItem";
import ecommerce from "../assets/ecommerce.png";
import rickymortyapp from "../assets/rickymortyapp.png";
import weatherapp from "../assets/weatherapp.png";
import pokedex from "../assets/pokedex.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-white">
        Projects
      </h1>
      <p className="text-center py-8 dark:text-gray-300">
        In this section you will be able to see some projects developed using
        React Js with Vite.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={ecommerce}
          title="e-commerce"
          src="https://e-commerce-myepes.netlify.app/"
        />
        <ProjectItem
          img={pokedex}
          title="Pokedex App"
          src="https://pokedex-myep.netlify.app/"
        />
        <ProjectItem
          img={rickymortyapp}
          title="Rickymortyapp App"
          src="https://ricky-morty-myep.netlify.app"
        />
        <ProjectItem
          img={weatherapp}
          title="Weather App"
          src="https://myaweather-app.netlify.app"
        />
      </div>
    </div>
  );
};

export default Projects;
