import React from "react"
import ProjectItem from "./ProjectItem"
import crud from "../assets/crud.png"
import galletasFortuna from "../assets/galletasFortuna.png"
import rickymortyapp from "../assets/rickymortyapp.png"
import weatherapp from "../assets/weatherapp.png"

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        En esta sección podrás ver algunos proyectos desarrollados utilizando
        React Js y Vite.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={crud}
          title="Crud App"
          src="https://crud-myep.netlify.app"
        />
        <ProjectItem
          img={galletasFortuna}
          title="GalletasFortuna App"
          src="https://galletasfortuna.netlify.app"
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
  )
}

export default Projects
