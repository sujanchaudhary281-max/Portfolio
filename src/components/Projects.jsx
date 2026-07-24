import React from 'react';
import { Icon } from '@iconify/react';
import "../styles/fontStyle.css"
import projects from '../assets/projects.json';
import { Link } from 'react-router-dom'

const Projects = () => {
  const slicedProjects = projects.slice(0,3);
  return <div>
    <div className='ml-11 mr-11 mb-7 text-2xl text-white text-opacity-100 font-semibold'>Projects</div>
    <div className='mx-11 mt-8 grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-6'>
      {
        slicedProjects.map((item) => {
          return <div className='flex flex-col titleFont' key={item.id}>
            <div className='h-52 w-auto overflow-hidden'>
              <img className='rounded-md h-full w-full object-cover' src={item.imgUrl} alt="" />
            </div>
            <h1 className='text-2xl my-3'>{item.title}</h1>
            <p><span className='text-lg playFairFont'>Tech stacks : </span><span className='opacity-50'>{item.techStacks}</span></p>
            <div className='my-3 flex justify-between gap-4'>
              {item.githubLink ? (
                <a href={item.githubLink} target='_blank' rel='noopener noreferrer' className='bg-medium_dark px-5 py-1 rounded-sm flex gap-2'><span>Github</span> <span><Icon icon="mingcute:github-line" className='inline mr-1 text-emerald-500' height={24} /></span></a>
              ) : (
                <span className='bg-medium_dark px-5 py-1 rounded-sm flex gap-2 opacity-40 cursor-not-allowed text-gray-400'><span>Github</span> <span><Icon icon="mingcute:github-line" className='inline mr-1 text-emerald-500 opacity-50' height={24} /></span></span>
              )}
              {item.liveLink ? (
                <a href={item.liveLink} target='_blank' rel='noopener noreferrer' className='bg-medium_dark px-5 py-1 rounded-sm flex justify-center items-center gap-2'><span>Live</span><Icon icon="ic:outline-arrow-right-alt" width="24" height="24" style={{ marginTop: "3px" }} /></a>
              ) : (
                <span className='bg-medium_dark px-5 py-1 rounded-sm flex justify-center items-center gap-2 opacity-40 cursor-not-allowed text-gray-400'><span>Live</span><Icon icon="ic:outline-arrow-right-alt" width="24" height="24" style={{ marginTop: "3px" }} /></span>
              )}
            </div>
          </div>
        })
      }
    </div>
  </div>


}

export default Projects;