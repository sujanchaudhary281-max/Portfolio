import React from 'react'
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/fontStyle.css'
export default function SideNavbar() {
    const location = useLocation();
    const { pathname } = location;
    // const addStyleAndActiveLink = (path)=>{
    //     return `${pathname === path ? 'text-blue-700 text-sm': ''} transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center`;
    // }
    return (
        <nav className='navbarFont sm:ml-7 ml-14 mt-9 gap-y-6 md:block  w-[50vw] h-[100vh] md:w-[30vw] lg:w-[18vw] xl:w-[15vw] hidden'>
            <ul>
                <li className='mb-6 h-6'><Link to="/" className={`${pathname === '/' ? "opacity-50 text-sm" : ""} transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center`}><Icon icon="mdi-light:home" className='inline mr-1' height={24} />Home</Link></li>
                <li className='mb-6'><Link to="/skills" className={`${pathname === '/skills' ? 'opacity-50 text-sm' : ''} transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center`}><Icon icon="skill-icons:actix-dark" className='inline mr-1' height={24} />Skills</Link></li>
                <li className='mb-6'><Link to="/more-projects" className={`${pathname === '/more-projects' ? "opacity-50 text-sm" : ""} transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center`}><Icon icon="arcticons:zoho-projects" className='inline mr-1' height={24} />More-projects</Link></li>
                <li className='mb-6'><Link to="/experiences" className={`${pathname === '/experiences' ? "opacity-50 text-sm" : ""} transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center`}><Icon icon="ph:code" className='inline mr-1' height={24} />Experiences</Link></li>
                <li className='mb-6'><Link to="https://blog-app-xi-henna.vercel.app" target="_blank" className={`${pathname === '/blogs' ? "opacity-50 text-sm" : ""} transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center`}><Icon icon="gridicons:trending" className='inline mr-1' height={24} />Blogs</Link></li>
            </ul>
            <hr className='my-5 text-white text-opacity-60 mr-14' />
            <ul>
                <h2 className='font-bold mb-4 text-2xl'>Socials</h2>
                <li className='mb-6'><Link to="https://github.com/sujanchaudhary281-max" target='_blank' className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="mingcute:github-line" className='inline mr-1 text-emerald-500' height={24} />Github</Link></li>
                <li className='mb-6'><Link to="https://www.linkedin.com/in/sujan-chaudhary-a8a549208/" target='_blank' className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="uit:linkedin-alt" className='inline mr-1 text-indigo-500' height={24} />Linkedin</Link></li>
                <li className='mb-6'><Link to="" target='_blank' className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="entypo-social:twitter" height={24} className='inline mr-1 text-blue-600' />Twitter</Link></li>
            </ul>
            <hr className='my-5 text-white text-opacity-60 mr-14' />
            <ul>
                <h2 className='font-semibold mb-4 text-xl text-green-500'>Platforms</h2>
                <li className='mb-6'><Link to="https://www.hackerrank.com/profile/mrsujan321" target='_blank' className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="cib:hackerrank" className='inline mr-1 text-emerald-500' height={24} />Hackerrank</Link></li>
                <li className='mb-6'><Link to="https://www.linkedin.com/in/sujan-chaudhary-a8a549208/" target='_blank' className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="cib:leetcode" className='inline mr-1 text-indigo-500' height={24} />Leetcode</Link></li>
            </ul>
        </nav>
    )
}