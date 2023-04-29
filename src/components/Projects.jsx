import React from 'react'
import ProjectItem from './ProjectItem'
import crud from '../assets/crud.png'
import galletasFortuna from '../assets/galletasFortuna.png'
import rickymortyapp from '../assets/rickymortyapp.png'
import weatherapp from '../assets/weatherapp.png'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem non architecto magnam totam mollitia ratione, vitae aliquid error neque rem atque, tempore odio asperiores est sapiente facilis ea iure?</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={crud} title='Crud App' />
           <ProjectItem img={galletasFortuna} title='GalletasFortuna App' />
           <ProjectItem img={rickymortyapp} title='Rickymortyapp App' />
           <ProjectItem img={weatherapp} title='Weather App' /> 

        </div>
    </div>
  )
}

export default Projects